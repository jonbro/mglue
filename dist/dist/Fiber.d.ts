export declare class Fiber {
    private ops;
    private waitCounter;
    private current;
    isDestroying: boolean;
    do(fn: Function): Fiber;
    wait(time: number): Fiber;
    update(): void;
}
