import { Color } from "./Color";
import { Display } from "./Display";
import { Actor, TextActor } from "./Actor";
import { Config } from "./Config";
import { Mouse } from "./Mouse";
import { Vector } from "./Vector";
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
    currentState = GameState.title;

    constructor()
    {
        Game.INTERVAL = 1000/Config.fps;
        Game.display = new Display();
        Mouse.initialize();
        this.transitionToTitle();
        requestAnimationFrame((time) => {this.updateFrame(time)});
    }
    transitionToTitle()
    {
        let ty = (Config.title.length == 1)?.4:.35;
        new TextActor(Config.title).setPosition(new Vector(.5, ty))
        /*
		if Config.title.length > 1
			new Text(Config.title[1]).xy(.5, .45).sc(3).df
		new Text('[ CLICK / TOUCH ] TO START').xy(.5, .6).df
Mouse.setPressedDisabledCount 10
*/
    }
    endGame()
    {
        this.transitionToTitle();
        this.currentState = GameState.title;
        this.onEndGame();
    }
    transitionToGame()
    {
        this.currentState = GameState.game;
        Actor.clear();
        this.onBeginGame();
    }
    // override
    onBeginGame(){}
    onEndGame(){}
    updateTitle()
    {
        if(Mouse.isPressed)
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
        Actor.update();
        if(this.currentState == GameState.title)
        {
            this.updateTitle();
        }
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