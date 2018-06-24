import { Color } from "./Color";
import { Vector } from "./Vector";
import { Config } from "./Config";
import { TextDrawer } from "./Drawing"
import { Game } from "./Game"

// gif encoding stuff. Its raw js, so we are just doing it raw
require("./GIFEncoder")
require("./NeuQuant");
require("./LZWEncoder");
require("./b64")

declare var GIFEncoder : any;
declare var encode64 : any;
export interface DisplayInterface extends Display {}

export class Display
{
    static element: HTMLCanvasElement = null;
    protected context: CanvasRenderingContext2D;
    static size : Vector = new Vector(0,0);
    protected resizeTimer : any;
    protected textDrawer : TextDrawer = new TextDrawer();

    // gif capture support
    /** contexts to temporarily store the captured gifs */
    private captureContexts : CanvasRenderingContext2D[];
    private captureIndex : number = 0;
    private captureDuration : number = 0;
    private captureInterval : number = 0.016;
    private _isCapturing : boolean = false;
    public get isCapturing() { return this._isCapturing; }
    constructor()
    {
        this.buildDisplay();
        this.setSize();
    }
    protected buildDisplay()
    {
        let displayElement = document.getElementById("display");
        Display.element = <HTMLCanvasElement>displayElement;
        this.context = Display.element.getContext("2d");
        window.onresize = () => 
        {
            if(this.resizeTimer)
            {
                clearTimeout(this.resizeTimer);
            }
            this.resizeTimer = setTimeout(this.setSize, 200);
        }
        this.setSize();
    }
    setSize()
    {
        let displayParent = document.getElementById("displayDiv");
        let shortEdge = Math.min(displayParent.clientWidth, displayParent.clientHeight);
        Display.element.width = Display.element.height = shortEdge;
        Display.size.set(shortEdge, shortEdge);
    }
    preUpdate()
    {
        this.clear();
    }
    clear()
    {
        this.context.fillStyle = Config.backgroundColor.toString()
        this.context.fillRect(0,0,Display.size.x, Display.size.y);
    }
    fillRect(x : number,y : number,width : number,height : number, color : Color = Color.white)
    {
        this.fillRectDirect((x-width/2) * Display.size.x,
        (y-height / 2) * Display.size.y,
        width * Display.size.x,
        height * Display.size.y,
        color);
    }
    fillRectDirect(x :number, y : number, width : number, height : number, color : Color = Color.white)
    : void
    {
        this.context.fillStyle = color ? color.toString() : Color.white.toString();
        this.context.fillRect(x, y, width, height);
    }
    drawText(text : string, x : number, y : number, alignX = -1, alignY = -1, color = Color.white, scale = 1)
    {
        this.textDrawer.setSize(Display.size);
        this.textDrawer.drawString(text, x, y, alignX, alignY, color, scale);
    }
    /**
     * start capturing the game
     * @param duration length of the capture in seconds
     * @param interval frame timing in seconds (0.01667 for 60fps etc)
     * @param scale the scale of the capture compared to the render size
     */
    beginCapture(duration:number = 1, interval=0.016, scale=0.65)
    {
        // generate a series of canvases that will hold the captured images
        this.captureDuration = Math.floor(duration/interval);
        this.captureInterval = Math.floor(interval * 1000); // interval in ms
        let captureTick = Math.floor(Game.INTERVAL * interval); // number of game frames to step between captures
        this.captureContexts = [];
        this.captureIndex = 0;
        for(let i = 0; i<this.captureDuration;i++)
        {
            var canvas = document.createElement('canvas');
            canvas.width = Display.size.x * scale;
            canvas.height = Display.size.y * scale;
            var context = canvas.getContext("2d");
            context.scale(scale, scale);
            this.captureContexts.push(context);
        }
        this._isCapturing = true;
    }
    /** internal method called per frame while capturing is true. Returns true if capture should end. */
    capture()
    : boolean
    {
        // copy the current canvas into the capture context
        this.captureContexts[this.captureIndex].drawImage(Display.element, 0, 0);
        this.captureIndex++;
        return this.captureIndex >= this.captureDuration;
    }
    /** call to finalize capture and return the gif */
    endCapture()
    {
        this._isCapturing = false;
        // encode the gif and return it to the user
        let encoder = new GIFEncoder();
        encoder.setRepeat(0);
        encoder.setDelay(this.captureInterval);
        encoder.start();
        for (let i =0;i<this.captureDuration;i++)
        {
            if(!encoder.addFrame(this.captureContexts[i]))
            {
                console.log("adding frame failed");
            }
        }
        encoder.finish();
        let binaryGif = encoder.stream().getData();
        return window.location.href = 'data:image/gif;base64,' + (encode64(binaryGif));
    }
}