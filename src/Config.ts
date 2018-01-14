import { Color } from "./Color";

class Config
{
    static fps: number = 60;
    static backgroundColor : Color = Color.Black;
    static soundTempo : number = 120;
    static soundVolume : number = 0.02;
    static debugMode : boolean = true;
    static title : string = "WORM DRIVE";
}
export { Config }