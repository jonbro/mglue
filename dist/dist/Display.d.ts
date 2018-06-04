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
    constructor();
    protected buildDisplay(): void;
    setSize(): void;
    preUpdate(): void;
    clear(): void;
    fillRect(x: number, y: number, width: number, height: number, color?: Color): void;
    fillRectDirect(x: number, y: number, width: number, height: number, color?: Color): void;
    drawText(text: string, x: number, y: number, alignX?: number, alignY?: number, color?: Color, scale?: number): void;
}
