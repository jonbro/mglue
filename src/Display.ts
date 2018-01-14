import { Color } from "./Color";
import { Vector } from "./Vector";
import { Config } from "./Config";
import { TextDrawer } from "./Drawing"
export class Display
{
    static element: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    static size : Vector = new Vector(0,0);
    private resizeTimer : number;
    private textDrawer : TextDrawer = new TextDrawer();
    constructor()
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
        let clientWidth = Display.element.clientWidth;
        Display.element.width = Display.element.height = clientWidth 
        Display.size.set(clientWidth, clientWidth);
    }
    clear()
    {
        this.context.fillStyle = Config.backgroundColor.toString()
        this.context.fillRect(0,0,Display.size.x, Display.size.y);
    }
    preUpdate()
    {
        this.clear();
    }
    fillRect(x : number,y : number,width : number,height : number, color : Color = Color.White)
    {
        this.context.fillStyle = color.toString();
        this.context.fillRect(
            (x-width/2) * Display.size.x,
            (y-height / 2) * Display.size.y,
            width * Display.size.x,
            height * Display.size.y
        );
    }
    fillRectDirect(x, y, width, height, color = Color.White)
    {
        this.context.fillStyle = color.toString();
        this.context.fillRect(x, y, width, height);
    }
    drawText(text : string, x : number, y : number, alignX = -1, alignY = -1, color = Color.White, scale = 1)
    {
        this.textDrawer.setSize(Display.size);
        this.textDrawer.drawString(text, x, y, alignX, alignY, color, scale);
    }
}