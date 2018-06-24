import { Color } from "./Color";
import { Vector } from "./Vector";
declare class TextDrawer {
    static COUNT: number;
    dotPatterns: Vector[][];
    charToIndex: number[];
    static patterns: number[];
    baseDotSize: number;
    constructor();
    drawString(text: string, x: any, y: any, xAlign: any, yAlign: any, color: Color, scale: number): void;
    drawDots(li: any, x: any, y: any, color: any, size: any): void;
    setSize(size: Vector): void;
}
declare class Drawing {
    /**
     * Internal class for tracking the last type of rectangle which was added to a drawing
     */
    private static RectParam;
    position: Vector;
    rotation: number;
    scale: Vector;
    private rects;
    private color;
    hasCollision: boolean;
    private lastAdded;
    setColor(color: Color): Drawing;
    addRect(width: number, height?: number, offsetX?: number, offsetY?: number): Drawing;
    addSegementedRect(width: number, height?: number, offsetX?: number, offsetY?: number, angle?: number): Drawing;
    addArc(angle: number, count?: number): Drawing;
    mirrorX(): Drawing;
    mirrorY(): Drawing;
    updateState(): void;
    setPosition(v: Vector): Drawing;
    setRotation(r: number): Drawing;
    draw(): void;
    isOverlapping(other: Drawing): boolean;
}
export { Drawing, TextDrawer };
