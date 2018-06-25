import { Color } from "./Color";
export declare class CaptureConfig {
    scale: number;
    duration: number;
    interval: number;
    constructor(scale?: number, duration?: number, interval?: number);
}
export declare class Config {
    static fps: number;
    static backgroundColor: Color;
    static soundTempo: number;
    static soundVolume: number;
    static debugMode: boolean;
    static title: string;
    static saveName: string;
    static isDebuggingMode: boolean;
    static captureConfig: CaptureConfig;
}
