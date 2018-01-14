export class Color
{
    public r : number;
    public g : number;
    public b : number;
    public static Black : Color = new Color(0,0,0);
    public static Red : Color = new Color(1,0,0);
    public static Green : Color = new Color(0,1,0);
    public static Blue : Color = new Color(0,0,1);
    public static Yellow : Color = new Color(1,1,0);
    public static Magenta : Color = new Color(1,0,1);
    public static Cyan : Color = new Color(0,1,1);
    public static White : Color = new Color(1,1,1);
    constructor(r : number, g : number, b : number)
    {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    public toString()
    {
        let rval : number = this.r*255.0;
        let gval : number = this.g*255.0;
        let bval : number = this.b*255.0;
        return `rgb(${rval}, ${gval}, ${bval})`;
    }
}