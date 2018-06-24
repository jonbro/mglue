class Random
{
    static instance : Random = new Random();
    x : number;
    y : number;
    z : number;
    w : number;
    sv : number;
    constructor(seed : number = -0x7fffffff)
    {
        this.seed(seed);
    }
    seed(seedValue : number = -0x7fffffff)
    {
        if(seedValue == -0x7fffffff)
        {
            seedValue = Math.floor(Math.random() * 0x7fffffff);
        }
        this.sv = seedValue;
		this.x = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30))
		this.y = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30)) + 1
		this.z = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30)) + 2
		this.w = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30)) + 3
        return this;
    }
    static range(low:number=0, high:number=1)
    {
        return this.instance.range(low, high);
    }
    static rangeInt(low:number=0, high:number=1)
    {
        return this.instance.rangeInt(low, high);
    }
    static value()
    {
        return this.instance.value();
    }
    range(low:number=0, high:number=1)
    {
        return this.value()*(high-low)+low;
    }
    rangeInt(low:number=0, high:number=1)
    {
        return Math.floor(this.range(low, high+1))
    }
    value()
    {
        let t = this.x ^ (this.x << 11);
		this.x = this.y;
		this.y = this.z;
		this.z = this.w;
		this.w = (this.w ^ (this.w >> 19)) ^ (t ^ (t >> 8));
        return this.w / 0x7fffffff;
    }
    
}
export{ Random }

