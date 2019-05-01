/**
 * Dummy class
 */
export declare class Dummy {
    /**
     * Gets a person.
     * @param  {string} name
     * @returns An object with a name.
     */
    getPerson(name: string): any;
}
export declare class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    set(x: number, y: number): void;
    set(v: Vector): void;
    static distance(a: Vector, b: Vector): number;
    directionTo(other: Vector): number;
    rotation(): number;
    addDirection(degrees: number, amount: number): this;
    add(other: Vector): Vector;
    subtract(other: Vector): Vector;
    length(): number;
    normalize(): Vector;
    divide(scalar: number): Vector;
    multiply(scalar: number): Vector;
    rotate(angleDegrees: number): Vector;
    /** Returns a copy of this vector */
    copy(): Vector;
    onScreen(): boolean;
    equal(other: Vector): boolean;
}
