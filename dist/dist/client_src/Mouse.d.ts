import { Vector } from "./Vector";
export declare class Mouse {
    static position: Vector;
    static isPressed: boolean;
    static pressedThisFrame: boolean;
    private static wasPressed;
    static initialize(): void;
    static onMouseUp(e: any): void;
    static onMouseDown(e: any): void;
    static onMouseMove(e: any): void;
    static onTouchMove(e: any): void;
    static onTouchStart(e: any): void;
    static onTouchEnd(e: any): void;
    static Update(): void;
}
