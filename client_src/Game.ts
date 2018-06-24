import { Color } from "./Color";
import { Display, DisplayInterface } from "./Display";
import { Actor, TextActor } from "./Actor";
import { Config } from "./Config";
import { Mouse } from "./Mouse";
import { Vector } from "./Vector";
import { Keyboard } from "./Keyboard"
import { Leaderboard } from "./Leaderboard";
import {GameState} from "./GameState";
import "./Extensions";

/**
 * Handles the core game loop. Subclass this to kick off your game.
 * Runs updating all the actors, refreshing the display, transitioning between
 * the title and the game, and tracking scores.
 * 
 * ```
 * class MyGame extends Game
 * {
 *     // when the game starts, spawn a new player
 *     onBeginGame()
 *     {
 *         p = new Player();
 *     }
 *     // every 20 frames, while the game is playing, spawn an enemy
 *     update()
 *     {
 *         if(this.currentState == "game" && this.ticks%20 == 0)
 *         {
 *             let e = new Enemy();
 *         }
 *     }
 * } 
 * ```
 */
var INTERVAL;
class Game
{
    
    //** ms per frame */
    private static _INTERVAL : number;

    //** ms per frame */
    public static get INTERVAL() { return Game._INTERVAL; }

    // this should be read only
    public static display: DisplayInterface;
    private currentTime : number = 0;
    private previousTime : number = 0;
    private delta : number = 0;
    public score : number = 0;
    protected leaderboardEnabled : boolean = false;
    protected lastScore : number = -1;
    protected highScore : number = -1;
    private _ticks : number = 0;
    /** actor used to display the leaderboard */
    protected leaderboardText : TextActor = new TextActor("");
    /** helper strings for ordinals */
    private rankStrings : string[] = ['ST', 'ND', 'RD'];

    /** number of frames that has elapsed since the game started */
    public get ticks() : number
    {
        return this._ticks;
    }
    currentState = GameState.title;
    private static animationFrameIdentifier : number;
    public get gameOver() { return this.currentState!=GameState.game; }
    constructor(display : DisplayInterface = new Display())
    {
        // if there was a game running prior we need to make sure we clean up its animation loop
        // lets us spawn off a bunch of games in a row without timing issues
        window.cancelAnimationFrame(Game.animationFrameIdentifier);
        // clean up any straggling actors
        Actor.clear();
        if(window.localStorage.getItem(Config.saveName))
        {
            this.highScore = Number(window.localStorage.getItem(Config.saveName));
        }
        Game._INTERVAL = 1000/Config.fps;
        INTERVAL = Game._INTERVAL;
        Game.display = display;
        Display.element.focus();
        Keyboard.initialize();
        Mouse.initialize();
        this.transitionToTitle();
        Game.animationFrameIdentifier = Game.requestAnimationFrame((time) => {this.updateFrame(time)});
    }

    /** Helper function to run the game after the window loads, or if the window is ready, immediately */
    static runOnReady(fn : Function)
    {
        if(document.readyState == "complete")
        {
            fn();
        }
        else
        {
            window.addEventListener('load', function() {
                fn();
            }, true);
        }
    }
    endGame()
    {
        this.lastScore = this.score;
        if(this.lastScore > 0 && this.lastScore > this.highScore)
        {
            this.highScore = this.lastScore;
            window.localStorage.setItem(Config.saveName, this.highScore.toString());
        }
        this.transitionToTitle();
        this.currentState = GameState.title;
        this.onEndGame();
    }
    protected onBeginGame(){}
    protected onEndGame(){}
    protected update() {}
    protected updateTitle()
    {
        if(Keyboard.keyDown[Keyboard.SPACE])
        {
            this.transitionToGame();
        }
        if(this.leaderboardEnabled)
        {
            this.updateLeaderboard();
        }
    }
    protected updateLeaderboard()
    {
        let leaderboardType =Math.floor(this.ticks/180)%4;
        if(this.ticks%180 == 0)
        {
            switch(leaderboardType)
            {
                case 0:
                    break;
                case 1:
                    Leaderboard.get(true);
                    break;
                case 2:
                    Leaderboard.get(false, true)
                    break;
                case 3:
                    Leaderboard.get();
                    break;
            }
            Leaderboard.get();
        }
        if(Leaderboard.scores == null || leaderboardType == 0)
        {
            return;
        }
        let count = 0;
        let startPosition = 0.2;
        this.leaderboardText.color = Color.white;
        var leaderboardTypes = ['LAST', 'BEST', 'TOP'];

        this.leaderboardText.displayString = leaderboardTypes[leaderboardType-1];
        this.leaderboardText.setPosition(new Vector(0.5, startPosition));
        this.leaderboardText.update();
        startPosition += 0.035;
        Leaderboard.scores.forEach(score => {
            if(Leaderboard.playerId == score.playerId)
            {
                this.leaderboardText.color = Color.lightgreen;
                this.leaderboardText.xAlign = 1;
                this.leaderboardText.setPosition(new Vector(0.2,count*0.03+startPosition));
                this.leaderboardText.displayString = "YOU";
                this.leaderboardText.update();
                }
            else
            {
                this.leaderboardText.color = Color.white;
            }

            this.leaderboardText.xAlign = 1;
            this.leaderboardText.setPosition(new Vector(0.4,count*0.03+startPosition));
            if(score.rank != null)
            {
                let rs = "" + (score.rank + 1) + ((score.rank < 3) ? this.rankStrings[score.rank] : 'TH');
                this.leaderboardText.displayString = rs;
                this.leaderboardText.update();
            }

            this.leaderboardText.xAlign = -1;
            this.leaderboardText.setPosition(new Vector(0.6,count*0.03+startPosition));
            this.leaderboardText.displayString = score.score.toString();
            this.leaderboardText.update();
            count++;
        });
    }
    private transitionToTitle()
    {
        let ty = (Config.title.length == 1)?.2:.15;
        new TextActor(Config.title).setPosition(new Vector(.5, ty)).setDurationForever().scale = new Vector(2,2);
        new TextActor('[ SPACE ] TO START').setPosition(new Vector(.5, .7)).setDurationForever()
        if(this.lastScore >= 0)
        {        
            new TextActor(`LAST SCORE: ${this.lastScore}`).setPosition(new Vector(.5, .8)).setDurationForever()
            Leaderboard.set(this.score);            
        }
        if(this.highScore >= 0)
        {
            if(this.lastScore != this.highScore)
            {
                new TextActor(`YOUR HIGH SCORE: ${this.highScore}`).setPosition(new Vector(.5, .85)).setDurationForever();
            }
            else
            {
                new TextActor(`NEW HIGH SCORE!!!`).setPosition(new Vector(.5, .85)).setDurationForever()    
            }
        }
    }
    public enableLeaderboard(leaderboardUrl : string = "")
    {
        Leaderboard.init(leaderboardUrl);
        this.leaderboardEnabled = true;
    }
    private transitionToGame()
    {
        this.currentState = GameState.game;
        this.score = 0;
        Actor.clear();
        this.onBeginGame();
    }
    private preUpdateFrame(time : any)
    :boolean
    {
        if(time)
        {
            this.currentTime = time;
        }
        else
        {
            this.currentTime = new Date().getTime();
        }
        this.delta += (this.currentTime - this.previousTime) / Game._INTERVAL;
        this.previousTime = this.currentTime;
        if(this.delta >= 0.75)
        {
            return true;
        }
        Game.animationFrameIdentifier = Game.requestAnimationFrame((time) => {this.updateFrame(time)});
        return false;
    }
    private updateFrame(time : any)
    {
        if(!this.preUpdateFrame(time))
        {
            return;
        }
        // if the player has pressed c, then kick off capturing
        Game.display.preUpdate();
        this._ticks++;
        this.update();
        Actor.update();
        if(this.currentState == GameState.title)
        {
            this.updateTitle();
        }
        Game.display.drawText(`SCORE: ${this.score}`, 1,0,1);
        if(Keyboard.keyDown[67])
        {
            Game.display.beginCapture(3, 0.01667, 0.65);
        }    
        if(Game.display.isCapturing)
        {
            if(Game.display.capture())
            {
                Game.display.endCapture();
            }
        }
        this.postUpdateFrame();
    }
    private postUpdateFrame()
    {
        this.delta = 0;
        Game.animationFrameIdentifier = Game.requestAnimationFrame((time) => {this.updateFrame(time)});
    }
    private static requestAnimationFrame = (callback) : number =>
    {
        return requestAnimationFrameWrapper(callback)
    }

}


var requestAnimationFrameWrapper =
window.requestAnimationFrame	   ||
window.webkitRequestAnimationFrame ||
function(callback)
: number
{
    return window.setTimeout(callback, INTERVAL / 2)
}

export { Game };