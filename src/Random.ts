class Random
{
    static range(low:number=0, high:number=1)
    {
        return Math.random()*(high-low)+low;
    }
    static rangeInt(low:number=0, high:number=1)
    {
        return Math.floor(Random.range(low, high+1))
    }
}
export{ Random }