class Random
{
    static range(low, high)
    {
        return Math.random()*(high-low)+low;
    }
}
export{ Random }