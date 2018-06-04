import { Vector } from "./Vector";
export declare class Mouse {
    static position: Vector;
    static isPressed: boolean;
    static initialize(): void;
    static onMouseUp(e: any): void;
    static onMouseDown(e: any): void;
    static onMouseMove(e: any): void;
}
