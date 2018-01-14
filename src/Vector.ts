class Vector
{
    constructor(public x : number, public y : number) {}
    set(x : number, y : number)
    {
        this.x = x;
        this.y = y;
    }
    static distance(a : Vector, b : Vector)
    : Number
    {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }
    directionTo(other : Vector)
    : number
    {
        return Math.atan2(other.x - this.x, -(other.y-this.y)) * 180.0 / Math.PI;
    }
    addDirection(degrees : number, amount : number)
    {
        let radians = degrees * Math.PI / 180.0;
        this.x += Math.sin(radians) * amount;
        this.y -= Math.cos(radians) * amount;
        return this;
    }
    add(other : Vector)
    {
        this.x += other.x;
        this.y += other.y;
    }
}
export { Vector };