/**
 * Dummy class
 */
export class Dummy {
    /**
     * Gets a person.
     * @param  {string} name
     * @returns An object with a name.
     */
    getPerson(name: string): any {
      return { name: name };
    }
  }
  
export class Vector
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
    subtract(other : Vector)
    : Vector
    {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    }
    length()
    : number
    {
        return Math.sqrt(this.x * this.x + this.y*this.y);
    }
    normalize()
    : Vector
    {
        return this.divide(this.length());
    }
    divide(scalar : number)
    : Vector
    {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    multiply(scalar : number)
    : Vector
    {
        this.x *= scalar;
        this.y *= scalar;
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
    /** Returns a copy of this vector */
    copy()
    :Vector
    {
        return new Vector(this.x, this.y);
    }
    onScreen()
    : boolean
    {
        return this.x >= 0 && this.x <= 1 && this.y >= 0 && this.y <= 1;
    }
    equal(other : Vector)
    : boolean
    {
        return this.x == other.x && this.y == other.y;
    }
}
