class Vector
{
    constructor(public x : number, public y : number) {}
    set(x: number, y:number): void;
    set(v: Vector): void;
    set(x : number | Vector, y? : number)
    : void
    {
        if(x instanceof Vector)
        {
            this.x = (<Vector>x).x;
            this.y =  (<Vector>x).y;
        }else{
            this.x = <number>x;
            this.y = <number>y;
        }
    }
    static distance(a : Vector, b : Vector)
    : number
    {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
    directionTo(other : Vector)
    : number
    {
        return Math.atan2(other.x - this.x, -(other.y-this.y)) * 180.0 / Math.PI;
    }
    rotation()
    : number
    {
        return Math.atan2(this.x, -this.y) * 180 / Math.PI;
    }
    addDirection(degrees : number, amount : number)
    {
        let radians = degrees * Math.PI / 180.0;
        this.x += Math.sin(radians) * amount;
        this.y -= Math.cos(radians) * amount;
        return this;
    }
    add(other : Vector)
    : Vector
    {
        this.x += other.x;
        this.y += other.y;
        return this;
    }
    divide(scalar : number)
    : Vector
    {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    rotate(angleDegrees : number)
    : Vector
    {
        if(angleDegrees == 0)
        {
            return this;
        }
        let radians = angleDegrees * Math.PI / 180;
        let tx = this.x;
        this.x = this.x * Math.cos(radians) - this.y * Math.sin(radians);
        this.y = tx * Math.sin(radians) + this.y * Math.cos(radians); 
        return this;
    }
}
export { Vector };