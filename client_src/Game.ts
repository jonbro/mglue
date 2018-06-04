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

class Game
{
    public static INTERVAL : number;
    public static display: DisplayInterface;
    private currentTime : number = 0;
    private previousTime : number = 0;
    private delta : number = 0;
    public score : number = 0;
    protected lastScore : number = -1;
    protected highScore : number = -1;
    private _ticks : number = 0;
    /** number of frames that has elapsed since the game started */
    public get ticks() : number
    {
        return this._ticks;
    }
    currentState = GameState.title;
    static animationFrameIdentifier : number;
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
        Game.INTERVAL = 1000/Config.fps;
        Game.display = display;
        Display.element.focus();
        Keyboard.initialize();
        Mouse.initialize();
        this.transitionToTitle();
        Game.animationFrameIdentifier = Game.requestAnimationFrame((time) => {this.updateFrame(time)});
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
        this.delta += (this.currentTime - this.previousTime) / Game.INTERVAL;
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
        Game.display.preUpdate();
        this._ticks++;
        this.update();
        Actor.update();
        if(this.currentState == GameState.title)
        {
            this.updateTitle();
        }
        Game.display.drawText(`SCORE: ${this.score}`, 1,0,1);
        this.postUpdateFrame();
    }
    private postUpdateFrame()
    {
        this.delta = 0;
        Game.animationFrameIdentifier = Game.requestAnimationFrame((time) => {this.updateFrame(time)});
    }
    private static requestAnimationFrameWrapper =
	window.requestAnimationFrame	   ||
	window.webkitRequestAnimationFrame ||
    function(callback)
    : number
    {
        return window.setTimeout(callback, Game.INTERVAL / 2)
    }
    private static requestAnimationFrame = (callback) : number =>
    {
        return Game.requestAnimationFrameWrapper(callback)
    }

}

export { Game };