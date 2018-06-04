import { Color } from "./Color";
import { Drawing } from "./Drawing";
import { Vector } from "./Vector";
export declare class ActorGroup {
    name: string;
    members: Actor[];
    displayPriority: number;
    constructor(name: string);
    clear(): void;
    update(): void;
}
export declare class Actor {
    private static groups;
    position: Vector;
    velocity: Vector;
    rotation: number;
    scale: Vector;
    drawing: Drawing;
    isDestroying: boolean;
    age: number;
    group: ActorGroup;
    static totalCount: number;
    constructor(...args: any[]);
    initialize(): void;
    destroy(): void;
    begin(...args: any[]): void;
    update(): void;
    setPosition(p: Vector): Actor;
    setVelocity(velocity: Vector): Actor;
    lateUpdate(): void;
    checkOverlap(targetClass: any, handler?: Function): boolean;
    static update(): void;
    static clear(): void;
    static getGroup(targetClass: any): Actor[];
    setDisplayPriority(displayPriority: number): Actor;
    static sortGroups(): void;
}
export declare class TextActor extends Actor {
    duration: number;
    xAlign: number;
    displayString: string;
    color: Color;
    constructor(s: string);
    begin(): void;
    setDurationForever(): TextActor;
    update(): void;
    setDuration(duration: number): TextActor;
    setVelocity(velocity: Vector): TextActor;
    setPosition(p: Vector): TextActor;
}
