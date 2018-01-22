import { Color } from "./Color";
import { Actor } from "./Actor";
import { Game } from "./Game";
import { Vector } from "./Vector";
import { Display } from "./Display";
class TextDrawer
{
    static COUNT : number = 66
    dotPatterns : Vector[][] = [];
    charToIndex : number[] = [];
    static patterns : number[] = [
        0x4644AAA4, 0x6F2496E4, 0xF5646949, 0x167871F4, 0x2489F697,
        0xE9669696, 0x79F99668, 0x91967979, 0x1F799976, 0x1171FF17,
        0xF99ED196, 0xEE444E99, 0x53592544, 0xF9F11119, 0x9DDB9999,
        0x79769996, 0x7ED99611, 0x861E9979, 0x994444E7, 0x46699699,
        0x6996FD99, 0xF4469999, 0x2224F248, 0x26244424, 0x64446622,
        0x84284248, 0x40F0F024, 0x0F0044E4, 0x480A4E40, 0x9A459124,
        0x000A5A16, 0x640444F0, 0x80004049, 0x40400004, 0x44444040,
        0x0AA00044, 0x6476E400, 0xFAFA61D9, 0xE44E4EAA, 0x24F42445,
        0xF244E544, 0x00000042
        ]
    baseDotSize = 1;
    constructor()
    {
        let p = 0
        let d = 32
        let pIndex = 0
        for (let i = 1; i <= TextDrawer.COUNT; i++) {
            let dots : Vector[] = [];
            for (let j = 1; j <= 5; j++) {
                for (let k = 1; k <= 4; k++) {
                    d++;
                    if(d >= 32)
                    {
                        p = TextDrawer.patterns[pIndex++]
                        d = 0
                    }
                    if((p & 1) > 0)
                    {
                        dots.push(new Vector(k, j)); 
                    }
                    p >>= 1
                }
            }
            this.dotPatterns.push(dots)
        }
        let charStr = "()[]<>=+-*/%&_!?,.:|'\"$@#\\urdl"
        for(let c =0;c<=127;c++)
        {
            let li;
            if(c==32)
            {
                li = -1;
            }
            else if(48 <= c && c < 58)
            {
                li = c-48;
            }
            else if(65 <= c && c < 90)
            {
                li = c-65+10;
            }
            else
            {
                let ci = charStr.indexOf(String.fromCharCode(c))
                if(ci >= 0)
                {
                    li = ci+36;
                }
                else
                {
                    li = -2
                }
            }
            this.charToIndex.push(li);
        }
    }
    drawString(text : string, x, y, xAlign, yAlign, color : Color, scale : number)
    {
        let tx = Math.floor(x * Display.size.x)
		let ty = Math.floor(y * Display.size.y)
		let size = this.baseDotSize * scale;
		let lw = size * 5;
        if(xAlign == 0)
        {
            tx -= Math.floor(text.length * lw / 2)
        }
        else if(xAlign == 1)
        {
            tx -= Math.floor(text.length * lw)
        }
        if(yAlign == 0)
        {
            ty -= Math.floor(size * 3.5)
        }
        for (let i = 0; i < text.length; i++) {
            const c = text[i];
            let li = this.charToIndex[c.charCodeAt(0)];
            if(li >= 0)
            {
                this.drawDots(li, tx, ty, color, size)
            }
            else if(li == -2)
            {
                throw `invalid char: ${c}`
            }	
			tx += lw            
        }
        return
    }
    drawDots(li, x, y, color, size)
    {
        for (let i = 0; i < this.dotPatterns[li].length; i++) {
            const p = this.dotPatterns[li][i];
            Game.display.fillRectDirect(x + p.x * size, y + p.y * size,
                size, size, color);            
        }
    }
    setSize(size : Vector)
    {
        this.baseDotSize = Math.floor((Math.min(size.x, size.y)) / 250 + 1).clamp(1, 20)
    }
    
}
class DrawingRect
{
    private currentPosition : Vector = new Vector(0,0);
    private currentSize : Vector = new Vector(0,0);
    private
    constructor(
        public color : Color,
        public width : number,
        public height : number,
        public offsetX : number,
        public offsetY : number,
        public hasCollision)
    { }
    updateState(drawing : Drawing)
    {
        this.currentPosition.set(this.offsetX, this.offsetY);
        this.currentPosition.rotate(drawing.rotation);
        this.currentPosition.add(drawing.position);
        this.currentSize.set(this.width*drawing.scale.x, this.height*drawing.scale.y);
    }
    draw(drawing : Drawing)
    {
        this.updateState(drawing);
        Game.display.fillRect(
            this.currentPosition.x,
            this.currentPosition.y,
            this.currentSize.x,
            this.currentSize.y,
            this.color);
    }
    isOverlapping(other : DrawingRect)
    : boolean
    {
        if(!this.hasCollision || !other.hasCollision)
        {
            return false;
        }       
        return Math.abs(this.currentPosition.x - other.currentPosition.x) < (this.currentSize.x + other.currentSize.x) / 2 && Math.abs(this.currentPosition.y - other.currentPosition.y) < (this.currentSize.y + other.currentSize.y) / 2;
    }
}

class Drawing
{
    static RectParam = class {
        constructor(public type : string, public width : number, public height : number, public offsetX : number, public offsetY : number, public angle : number=0) {}
    }
    position : Vector = new Vector(0,0);
    rotation : number = 0;
    scale : Vector = new Vector(1,1); 
    private rects : DrawingRect[] = [];
    private color : Color;
    hasCollision : boolean = true;
    private lastAdded : any;
    setColor(color : Color)
    : Drawing
    {
        this.color = color;
        return this;
    }
    addRect(width : number, height : number = 0, offsetX : number = 0, offsetY : number = 0)
    : Drawing
    {
        this.rects.push(new DrawingRect(
            this.color,
            width,
            height==0?width:height,
            offsetX,
            offsetY,
            this.hasCollision));
        this.lastAdded = new Drawing.RectParam(
            'rect',
            width,
            height==0?width:height,
            offsetX,
            offsetY,
        );
        return this;
    }
    addSegementedRect(width : number, height : number = 0, offsetX : number = 0, offsetY : number = 0, angle : number = 0)
    : Drawing
    {
        this.lastAdded = new Drawing.RectParam(
            'segmentedRect',
            width,
            height==0?width:height,
            offsetX,
            offsetY,
            angle
        );

        let radians = angle * Math.PI / 180;
        if(width > height)
        {
            radians += Math.PI / 2;
            let twidth = width;
            width = height;
            height = twidth;
        }
        if(width < 0.01)
        {
            return this;
        }
        let n = Math.floor(height/width);
        let o = -width * (n-1)/2;
        let vo = width;
        width *= 1.05;
        for(let i = 0; i< n; i++)
        {
            this.rects.push(new DrawingRect(
                this.color,
                width,
                width,
                Math.sin(radians) * o + offsetX,
                Math.cos(radians) * o + offsetY,
                this.hasCollision));
            o+=vo;
        }
        return this;
    }
    addArc(angle : number, count : number = 1)
    : Drawing
    {
        let offset = new Vector(this.lastAdded.offsetX, this.lastAdded.offsetY);
        let currentAngle = this.lastAdded.angle;
        for(let i=0;i<count;i++)
        {
            offset.rotate(angle);
            if(this.lastAdded.type == 'rect')
            {
                this.addRect(this.lastAdded.width, this.lastAdded.height, offset.x, offset.y);
            }
            else
            {
                currentAngle -= angle;
                this.addSegementedRect(this.lastAdded.width, this.lastAdded.height, offset.x, offset.y, currentAngle);
            }
        }
        return this;
    }
    mirrorX()
    : Drawing
    {
        if(this.lastAdded.type == 'rect')
        {
            this.addRect(
                this.lastAdded.width,
                this.lastAdded.height,
                -this.lastAdded.offsetX,
                this.lastAdded.offsetY);
        }else
        {

        }
        return this;
    }
    mirrorY()
    : Drawing
    {
        if(this.lastAdded.type == 'rect')
        {
            this.addRect(
                this.lastAdded.width,
                this.lastAdded.height,
                this.lastAdded.offsetX,
                -this.lastAdded.offsetY);
        }else
        {

        }
        return this;
    }
    updateState()
    {
        this.rects.forEach(rect => {
            rect.updateState(this);
        });    
    }
    setPosition(v:Vector)
    : Drawing
    {
        this.position.set(v);
        return this;
    }
    setRotation(r:number)
    : Drawing
    {
        this.rotation = r;
        return this;
    }
    draw()
    {
        this.rects.forEach(rect => {
            rect.draw(this);
        });
    }
    isOverlapping(other : Drawing)
    : boolean
    {
        this.updateState()
        for (let i = 0; i < this.rects.length; i++) {
            const rect = this.rects[i];
            for (let j = 0; j < other.rects.length; j++) {
                const otherRect = other.rects[j];
                if(rect.isOverlapping(otherRect))
                {
                    return true;
                }
            }
        }
        return false;
    }
}
export { Drawing, TextDrawer }