interface Number {
    clamp: (min?:number, max?:number)=>number;
    loopRange: (min?:number, max?:number)=>number;
    EPSILON:number;
}
Number.prototype.clamp = function(min : number = 0, max : number = 1)
: number {
    if(this < min)
    {
        return min;
    }
    else if(this > max)
    {
        return max;
    }
    return this;
}
Number.prototype.loopRange = function(min:number = 0, max : number = 1)
: number
{
    let delta = max-min;
    let t = this;
    t-=min;
    if(t>=0)
    {
        return t%delta+min;
    }
    return delta + t % delta + min;
}