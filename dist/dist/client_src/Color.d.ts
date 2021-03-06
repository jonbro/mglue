export declare class Color {
    r: number;
    g: number;
    b: number;
    static readonly black: Color;
    static readonly white: Color;
    static readonly grey: Color;
    static readonly darkgrey: Color;
    static readonly lightgrey: Color;
    static readonly gray: Color;
    static readonly darkgray: Color;
    static readonly lightgray: Color;
    static readonly red: Color;
    static readonly darkred: Color;
    static readonly lightred: Color;
    static readonly brown: Color;
    static readonly darkbrown: Color;
    static readonly lightbrown: Color;
    static readonly green: Color;
    static readonly darkgreen: Color;
    static readonly lightgreen: Color;
    static readonly blue: Color;
    static readonly darkblue: Color;
    static readonly lightblue: Color;
    static readonly orange: Color;
    static readonly yellow: Color;
    static readonly purple: Color;
    static readonly pink: Color;
    static arnecolors: any;
    static currentPalette: any;
    constructor(r: number, g: number, b: number);
    static hexToRgb(hex: string): (Color | null);
    toString(): string;
}
