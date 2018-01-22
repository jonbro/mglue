/*
Color Definitions from Puzzlescript, which is provided under the following license
----------------------------------------------------------------------------------
The MIT License (MIT)

Copyright (c) 2013 Stephen Lavelle

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
export class Color
{
    public r : number;
    public g : number;
    public b : number;
    // color accessors
    static get black() : Color { return Color.hexToRgb(Color.currentPalette.black) }
    static get white() : Color { return Color.hexToRgb(Color.currentPalette.white) }
    static get grey() : Color { return Color.hexToRgb(Color.currentPalette.grey) }
    static get darkgrey() : Color { return Color.hexToRgb(Color.currentPalette.darkgrey) }
    static get lightgrey() : Color { return Color.hexToRgb(Color.currentPalette.lightgrey) }
    static get gray() : Color { return Color.hexToRgb(Color.currentPalette.grey) }
    static get darkgray() : Color { return Color.hexToRgb(Color.currentPalette.darkgrey) }
    static get lightgray() : Color { return Color.hexToRgb(Color.currentPalette.lightgrey) }
    static get red() : Color { return Color.hexToRgb(Color.currentPalette.red) }
    static get darkred() : Color { return Color.hexToRgb(Color.currentPalette.darkred) }
    static get lightred() : Color { return Color.hexToRgb(Color.currentPalette.lightred) }
    static get brown() : Color { return Color.hexToRgb(Color.currentPalette.brown) }
    static get darkbrown() : Color { return Color.hexToRgb(Color.currentPalette.darkbrown) }
    static get lightbrown() : Color { return Color.hexToRgb(Color.currentPalette.lightbrown) }
    static get green() : Color { return Color.hexToRgb(Color.currentPalette.green) }
    static get darkgreen() : Color { return Color.hexToRgb(Color.currentPalette.darkgreen) }
    static get lightgreen() : Color { return Color.hexToRgb(Color.currentPalette.lightgreen) }
    static get blue() : Color { return Color.hexToRgb(Color.currentPalette.blue) }
    static get darkblue() : Color { return Color.hexToRgb(Color.currentPalette.darkblue) }
    static get lightblue() : Color { return Color.hexToRgb(Color.currentPalette.lightblue) }
    static get orange() : Color { return Color.hexToRgb(Color.currentPalette.orange) }
    static get yellow() : Color { return Color.hexToRgb(Color.currentPalette.yellow) }
    static get purple() : Color { return Color.hexToRgb(Color.currentPalette.purple) }
    static get pink() : Color { return Color.hexToRgb(Color.currentPalette.pink) }
    static arnecolors :any = {
        black   		: "#000000",
        white			: "#FFFFFF",
        grey			: "#9d9d9d",
        darkgrey		: "#697175",
        lightgrey		: "#cccccc",
        gray			: "#9d9d9d",
        darkgray		: "#697175",
        lightgray		: "#cccccc",
        red				: "#be2633",
        darkred			: "#732930",
        lightred		: "#e06f8b",
        brown			: "#a46422",
        darkbrown		: "#493c2b",
        lightbrown		: "#eeb62f",
        orange			: "#eb8931",
        yellow 			: "#f7e26b",
        green			: "#44891a",
        darkgreen		: "#2f484e",
        lightgreen		: "#a3ce27",
        blue			: "#1d57f7",
        lightblue		: "#B2DCEF",
        darkblue		: "#1B2632",
        purple			: "#342a97",
        pink			: "#de65e2"
    }
    static currentPalette : any = Color.arnecolors;
    constructor(r : number, g : number, b : number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    public static hexToRgb(hex:string)
    : (Color | null)
    {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new Color(
            parseInt(result[1], 16)/255.0,
            parseInt(result[2], 16)/255.0,
            parseInt(result[3], 16)/255.0
         ) : null;
    }
    public toString()
    {
        let rval : number = this.r*255.0;
        let gval : number = this.g*255.0;
        let bval : number = this.b*255.0;
        return `rgb(${rval}, ${gval}, ${bval})`;
    }
}