interface Number {
    clamp: (min?: number, max?: number) => number;
    loopRange: (min?: number, max?: number) => number;
    mod: (n: number) => number;
    EPSILON: number;
}
