import { Color } from "./Color";

class Config
{
    static fps: number = 60;
    static backgroundColor : Color = Color.black;
    static soundTempo : number = 120;
    static soundVolume : number = 0.02;
    static debugMode : boolean = true;
    static title : string = "GAME TITLE";
    static saveName : string = "Wormdrive3hs"
    static isDebuggingMode : boolean = false;
}
export { Config }