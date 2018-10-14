/**
 * This is a pretty direct port of the sound class in https://github.com/abagames/mgl.coffee
 */
export declare class Sound {
    private static context;
    private static gainNode;
    private static enabled;
    private static sounds;
    private static scheduleInterval;
    private static playInterval;
    private static quantize;
    private static drumParameters;
    private static drumPatterns;
    private static random;
    private oneShot;
    private scheduledTime;
    private patternInterval;
    private patternIndex;
    private pattern;
    private buffer;
    private volume;
    private playedTime;
    private isPlayingLoop;
    constructor();
    /** call to set up all static properties */
    static initialize(): void;
    /**
     * Change the seed that is used by the Sound internal Random instance.
     * @param seed random seed value
     */
    static setSeed(seed: number): void;
    /**
     * call once per frame to update all playing loops, and play sounds that are linked to quantization.
     */
    static update(): void;
    /**
     * stop all playing sounds and loops.
     */
    private static clear;
    private static initDrumParams;
    private static initDrumPatterns;
    static generateParams(seed: any, params: any, mixRatio?: number): any;
    static generateDrumParams(seed?: number): any;
    static generateDrumPattern(seed?: number): string;
    private calculateNextScheduledTime;
    private playAt;
    /**
     * internal method to play a quantized sound or play a looping sound
     * @param currentTime audio context time
     * @param nextTime next time this update function will be called
     */
    private update;
    setFromParams(params: any): this;
    setPattern(pattern: any, patternInterval?: number): this;
    playNow(): void;
    /**
     * schedules the sound to play at the next quantized time
     * */
    play(): this;
    /**
     * Plays the sound as a looping pattern.
     * Will throw an error if the sound doesn't have a pattern defined.
     */
    playPattern(): this;
    /**
     * removes a playing sound from the scheduled sounds.
     */
    remove(): void;
}
