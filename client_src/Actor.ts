import { Color } from "./Color";
import { Game } from "./Game";
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
export class Actor
{
    private static groups : ActorGroup[] = [];
    
    /** Current position of the actor. Used for both drawing and overlap checks. */
    position : Vector = new Vector(0,0);
    
    /** How fast the actor is moving. This value is added to the actors position every update loop. */
    velocity : Vector = new Vector(0,0);
    
    /** Rotation of the actor in degrees. */
    rotation : number = 0;
    
    scale : Vector = new Vector(1,1);

    /** Default drawing for the actor. This drawing is automatically added to the game during update. */
    drawing : Drawing = new Drawing();
    
    isDestroying : boolean = false;
    
    /** Number of frames the actor has been alive for. */
    age : number = 0;
    
    /** group this actor belongs to */
    group : ActorGroup;
    
    /** Number of actors in the game. */
    static totalCount : number = 0;
    
    constructor(...args: any[])
    {
        let className = this.constructor['name'];
        let group;
        for (let i = 0; i < Actor.groups.length; i++) {
            const g = Actor.groups[i];
            if(g.name == className)
            {
                group = g;
                break;
            }
        }
        if(!group)
        {
            group = new ActorGroup(className);
            Actor.groups.push(group);
            this.initialize();
        }
        group.members.push(this);
        this.group = group;
        this.begin(...args)
        // after begin, force an update of the drawing state, so we don't get bad collisions on the first frame
        this.drawing.position.set(this.position.x, this.position.y);
        this.drawing.updateState();
    }
    initialize()
    {

    }
    /** Mark this actor to be removed from the game at the end of the current update loop. */
    destroy()
    {
        this.isDestroying = true;
    }
    protected begin(...args: any[])
    {
        
    }
    /** Override this function, it will be called every frame while the actor is in the game. */
    update()
    {

    }
    /**
     * Adds a vector value to all actors within a class, or a group of classes. Can be used to simulate camera type effects.
     * 
     * @param targetClass an array of actor classes, or a single actor class
     */
    static scroll(targetClass : Array<Actor> | Actor, offset:Vector)
    {
        let t = [targetClass];
        if(targetClass instanceof Array)
        {
            t = targetClass;
        }
        t.forEach(c => {
            Actor.getGroup(c).forEach(a =>{
                a.position.add(offset);
            });
        });
    }
    setPosition(p : Vector)
    : Actor
    {
        this.position.set(p.x, p.y);
        return this;
    }
    setVelocity(velocity : Vector)
    : Actor
    {
        this.velocity.set(velocity.x, velocity.y);
        return this;
    }
    lateUpdate()
    {
        this.position.add(this.velocity);
        this.drawing.rotation = this.rotation;
        this.drawing.position.set(this.position.x, this.position.y);
        this.drawing.draw();
        this.age++;
    }
    checkOverlap(targetClass:any, handler?:Function)
    : boolean
    {
        let res = false;
        let checkActors : Actor[] = Actor.getGroup(targetClass);
        checkActors.forEach(a => {
            if(a.drawing.isOverlapping(this.drawing))
            {
                res = true;
                if(handler)
                {
                    handler(a);
                }
            }
        });
        return res;
    }
    static update()
    {
        Actor.totalCount = 0;
        Actor.groups.forEach(group => {
            Actor.totalCount += group.members.length;
            group.update();
        });
    }
    static clear()
    {
        Actor.groups.forEach(group => {
            group.clear();
        });
    }
    static getGroup(targetClass:any)
    : Actor[]
    {
        let classname : string = targetClass["name"];
        for (let i = 0; i < Actor.groups.length; i++) {
            const g = Actor.groups[i];
            if(g.name == classname)
            {
                return g.members;
            }
        }
        return [];
    }
    setDisplayPriority(displayPriority:number)
    {
        this.group.displayPriority = displayPriority;
        Actor.sortGroups();
    }
    static sortGroups()
    {
        Actor.groups.sort((a, b)=>{
            return a.displayPriority - b.displayPriority;
        });
    }
}
export class TextActor extends Actor
{
    duration : number;
    xAlign : number;
    displayString : string = "";
    color : Color;
    constructor(s : string)
    {
        super();
        this.displayString = s;
    }
    begin()
    {
        this.setDisplayPriority(2);
        this.duration = 1;
        this.scale.set(1,1);
        this.xAlign = 0;
        this.color = Color.white;
    }
    setDurationForever()
    : TextActor
    {
        this.duration = 999999;
        return this;
    }
    update()
    {
        Game.display.drawText(this.displayString, this.position.x, this.position.y, 0, this.xAlign, this.color, this.scale.x);
        this.position.add(this.velocity);
        if(this.age>this.duration)
        {
            this.destroy();
        }
    }   
    setDuration(duration:number)
    : TextActor
    {
        this.duration = duration;
        return this;
    }
    setVelocity(velocity : Vector)
    : TextActor
    {
        super.setVelocity(velocity);
        return this;
    }
    setPosition(p : Vector)
    : TextActor
    {
        super.setPosition(p);
        return this;
    }
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

export class ActorGroup
{
    name : string;
    members : Actor[];
    displayPriority: number = 1;
    constructor(name : string)
    {
        this.name = name;
        this.clear();
    }
    clear()
    {
        this.members = [];
    }
    update()
    {
        let i = 0;
        while(true)
        {
            if(i>=this.members.length)
            {
                break;
            }
            let a = this.members[i];
            if(!a.isDestroying)
            {
                a.update()
                a.lateUpdate();
                i++;
            }else
            {
                this.members.splice(i, 1);
            }
        }
    }
}