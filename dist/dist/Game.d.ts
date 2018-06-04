import { DisplayInterface } from "./Display";
import "./Extensions";
declare class Game {
    static INTERVAL: number;
    static display: DisplayInterface;
    private currentTime;
    private previousTime;
    private delta;
    score: number;
    lastScore: number;
    highScore: number;
    ticks: number;
    currentState: string;
    static animationFrameIdentifier: number;
    readonly gameOver: boolean;
    constructor(display?: DisplayInterface);
    transitionToTitle(): void;
    endGame(): void;
    transitionToGame(): void;
    onBeginGame(): void;
    onEndGame(): void;
    update(): void;
    updateTitle(): void;
    preUpdateFrame(time: any): boolean;
    updateFrame(time: any): void;
    postUpdateFrame(): void;
}
export { Game };
