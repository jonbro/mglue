import { Color } from "./Color";

export class CaptureConfig
{
    constructor(public scale : number = 0.5, public duration : number = 3, public interval : number = 0.05) { }
}
export class Config
{
    static fps: number = 60;
    static backgroundColor : Color = Color.black;
    static soundTempo : number = 120;
    static soundVolume : number = 0.02;
    static debugMode : boolean = true;
    static title : string = "GAME TITLE";
    static saveName : string = "changeMe"
    static isDebuggingMode : boolean = false;
    static captureConfig : CaptureConfig = new CaptureConfig();
}