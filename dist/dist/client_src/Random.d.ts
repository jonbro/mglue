declare class Random {
    static instance: Random;
    x: number;
    y: number;
    z: number;
    w: number;
    sv: number;
    constructor(seed?: number);
    seed(seedValue?: number): this;
    static range(low?: number, high?: number): number;
    static rangeInt(low?: number, high?: number): number;
    static value(): number;
    range(low?: number, high?: number): number;
    rangeInt(low?: number, high?: number): number;
    value(): number;
}
export { Random };
