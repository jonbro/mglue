import { Color } from "./Color";
import { Display } from "./Display";
import { Actor, TextActor } from "./Actor";
import { Config } from "./Config";
import { Mouse } from "./Mouse";
import { Vector } from "./Vector";
import { Keyboard } from "./Keyboard"
import { Leaderboard } from "./Leaderboard";
import "./Extensions";

var requestAnimationFrameWrapper =
	window.requestAnimationFrame	   ||
	window.webkitRequestAnimationFrame ||
    function(callback)
    {
        window.setTimeout(callback, Game.INTERVAL / 2)
    }
var requestAnimationFrame = (callback) =>
{
	requestAnimationFrameWrapper(callback)
}
// https://stackoverflow.com/questions/46025487/create-extendable-enums-for-use-in-extendable-interfaces
type GameStateEnum<T extends string> = {[K in T]: K};
// create an enum from given values
function makeEnum<T extends string>(...vals: T[]): GameStateEnum<T> {
    const ret = {} as GameStateEnum<T>;
    vals.forEach(k => ret[k] = k)
    return ret;
}
  
  // take an existing enum and extend it with more values
function extendEnum<T extends string, U extends string>(
    firstEnum: GameStateEnum<T>, ...vals: U[]): GameStateEnum<T | U>
{
    return (<any>Object).assign(makeEnum(...vals), firstEnum) as any;  
}
const GameState = makeEnum("title", "game");
type GameState = typeof GameState;

class Game
{
    public static INTERVAL : number;
    public static display: Display;
    private currentTime : number = 0;
    private previousTime : number = 0;
    private delta : number = 0;
    public score : number = 0;
    public lastScore : number = -1;
    public highScore : number = -1;
    public ticks : number = 0;
    currentState = GameState.title;
    public get gameOver() { return this.currentState!=GameState.game; }
    constructor()
    {
        if(window.localStorage.getItem(Config.saveName))
        {
            this.highScore = Number(window.localStorage.getItem(Config.saveName));
        }
        Game.INTERVAL = 1000/Config.fps;
        Game.display = new Display();
        Mouse.initialize();
        this.transitionToTitle();
        requestAnimationFrame((time) => {this.updateFrame(time)});
    }
    transitionToTitle()
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
    transitionToGame()
    {
        this.currentState = GameState.game;
        this.score = 0;
        Actor.clear();
        this.onBeginGame();
    }
    // override
    onBeginGame(){}
    onEndGame(){}
    update() {}
    updateTitle()
    {
        if(Keyboard.keyDown[Keyboard.SPACE])
        {
            this.transitionToGame();
        }
    }
    preUpdateFrame(time : any)
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
        requestAnimationFrame((time) => {this.updateFrame(time)});
        return false;
    }
    updateFrame(time : any)
    {
        if(!this.preUpdateFrame(time))
        {
            return;
        }
        Game.display.preUpdate();
        this.ticks++;
        this.update();
        Actor.update();
        if(this.currentState == GameState.title)
        {
            this.updateTitle();
        }
        Game.display.drawText(`SCORE: ${this.score}`, 1,0,1);
        this.postUpdateFrame();
    }
    postUpdateFrame()
    {
        this.delta = 0;
        requestAnimationFrame((time) => {this.updateFrame(time)});
    }
}

// test game, should move this elsewhere...


export { Game };