import { DisplayInterface } from "./Display";
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
declare class Game {
    static INTERVAL: number;
    static display: DisplayInterface;
    private currentTime;
    private previousTime;
    private delta;
    score: number;
    protected lastScore: number;
    protected highScore: number;
    private _ticks;
    /** number of frames that has elapsed since the game started */
    readonly ticks: number;
    currentState: string;
    static animationFrameIdentifier: number;
    readonly gameOver: boolean;
    constructor(display?: DisplayInterface);
    endGame(): void;
    protected onBeginGame(): void;
    protected onEndGame(): void;
    protected update(): void;
    protected updateTitle(): void;
    private transitionToTitle();
    private transitionToGame();
    private preUpdateFrame(time);
    private updateFrame(time);
    private postUpdateFrame();
    private static requestAnimationFrameWrapper;
    private static requestAnimationFrame;
}
export { Game };
