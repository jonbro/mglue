import { Color } from "./Color";
import { Vector } from "./Vector";
import { TextDrawer } from "./Drawing";
export interface DisplayInterface extends Display {
}
export declare class Display {
    static element: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    static size: Vector;
    protected resizeTimer: any;
    protected textDrawer: TextDrawer;
    /** contexts to temporarily store the captured gifs */
    private captureContexts;
    private captureIndex;
    private captureDuration;
    private captureInterval;
    private _isCapturing;
    readonly isCapturing: boolean;
    constructor();
    protected buildDisplay(): void;
    setSize(): void;
    preUpdate(): void;
    clear(): void;
    fillRect(x: number, y: number, width: number, height: number, color?: Color): void;
    fillRectDirect(x: number, y: number, width: number, height: number, color?: Color): void;
    drawText(text: string, x: number, y: number, alignX?: number, alignY?: number, color?: Color, scale?: number): void;
    /**
     * start capturing the game
     * @param duration length of the capture in seconds
     * @param interval frame timing in seconds (0.01667 for 60fps etc)
     * @param scale the scale of the capture compared to the render size
     */
    beginCapture(duration?: number, interval?: number, scale?: number): void;
    /** internal method called per frame while capturing is true. Returns true if capture should end. */
    capture(): boolean;
    /** call to finalize capture and return the gif */
    endCapture(): string;
}
