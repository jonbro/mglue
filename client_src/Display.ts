import { Color } from "./Color";
import { Vector } from "./Vector";
import { Config } from "./Config";
import { TextDrawer } from "./Drawing"

export interface DisplayInterface extends Display {}

export class Display
{
    static element: HTMLCanvasElement;
    protected context: CanvasRenderingContext2D;
    static size : Vector = new Vector(0,0);
    protected resizeTimer : any;
    protected textDrawer : TextDrawer = new TextDrawer();
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
    }
    setSize()
    {
        let clientWidth = Display.element.clientWidth;
        Display.element.width = Display.element.height = clientWidth 
        Display.size.set(clientWidth, clientWidth);
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
}