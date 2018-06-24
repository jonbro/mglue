import { DisplayInterface } from "./Display";
import { TextActor } from "./Actor";
import "./Extensions";
declare class Game {
    private static _INTERVAL;
    static readonly INTERVAL: number;
    static display: DisplayInterface;
    private currentTime;
    private previousTime;
    private delta;
    score: number;
    protected leaderboardEnabled: boolean;
    protected lastScore: number;
    protected highScore: number;
    private _ticks;
    /** actor used to display the leaderboard */
    protected leaderboardText: TextActor;
    /** helper strings for ordinals */
    private rankStrings;
    /** number of frames that has elapsed since the game started */
    readonly ticks: number;
    currentState: string;
    private static animationFrameIdentifier;
    readonly gameOver: boolean;
    constructor(display?: DisplayInterface);
    /** Helper function to run the game after the window loads, or if the window is ready, immediately */
    static runOnReady(fn: Function): void;
    endGame(): void;
    protected onBeginGame(): void;
    protected onEndGame(): void;
    protected update(): void;
    protected updateTitle(): void;
    protected updateLeaderboard(): void;
    private transitionToTitle();
    enableLeaderboard(leaderboardUrl?: string): void;
    private transitionToGame();
    private preUpdateFrame(time);
    private updateFrame(time);
    private postUpdateFrame();
    private static requestAnimationFrame;
}
export { Game };
