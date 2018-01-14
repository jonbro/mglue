interface Number {
    clamp: (min : number, max : number) => number;
}
Number.prototype.clamp = function(min : number = 0, max : number = 1) : number {
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