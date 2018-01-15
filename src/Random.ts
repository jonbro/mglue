class Random
{
    static range(low:number=0, high:number=1)
    {
        return Math.random()*(high-low)+low;
    }
}
export{ Random }