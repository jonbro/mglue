import { Color } from "./Color";
import { Drawing } from "./Drawing";
import { Vector } from "./Vector";
/**
 * You are going to make your game out of a pile of these.
 * Contains very basic movement, updating, and drawing.
 * Also where you handle overlap detection and removing things from groups.
 *
 * ```
 * class Enemy extends Actor
 * {
 *      begin()
 *      {
 *
 *          // this actor will move down the screen 1/100 of the distance per frame
 *          // velocity is automatically integrated after the update call
 *          this.velocity.set(0, 0.01);
 *
 *          // setup the drawing that will be used for this actor
 *          // drawn to the screen after every update
 *          this.drawing
 *              .setColor(Color.red)
 *              .addRect(0.01);
 *      }
 *      update()
 *      {
 *          // check if this object is overlapping an actor of type Player
 *          this.checkOverlap(Player, (p:player)=>{
 *              // destroy the player that is overlapped
 *              p.destroy();
 *          });
 *      }
 * }
 * ```
 *
 * The drawing property is also what is used for overlap checks between actors, so if you want differently sized hitboxes,
 * make sure to add additional drawings to your actor.
 *
 */
export declare class Actor {
    private static groups;
    position: Vector;
    velocity: Vector;
    rotation: number;
    scale: Vector;
    drawing: Drawing;
    isDestroying: boolean;
    /** Number of frames the actor has been alive for. */
    age: number;
    group: ActorGroup;
    /** Number of actors in the game. */
    static totalCount: number;
    constructor(...args: any[]);
    initialize(): void;
    /** Mark this actor to be removed from the game at the end of the current update loop. */
    destroy(): void;
    protected begin(...args: any[]): void;
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
/**
 * Collection of Actors. Each new actor subclass generates a group, though you can create further ones if necessary.
 * Actors are automatically added to their class group on creation.
 * The main actor groups are tracked by `Game` to handle updating, so don't mess with them too much.
 *
 * Most accessing of this class happens through the actor class.
 *
 * ```
 * class Player extents Actor {}
 * let p = new Player();
 * if(Actor.getGroup(Player).members[0] == p)
 * {
 *      console.log("you found the player!");
 * }
 * ```
 */
export declare class ActorGroup {
    name: string;
    members: Actor[];
    displayPriority: number;
    constructor(name: string);
    clear(): void;
    update(): void;
}
