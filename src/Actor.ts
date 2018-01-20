import { Color } from "./Color";
import { Game } from "./Game";
import { Drawing } from "./Drawing";
import { Vector } from "./Vector";
class ActorGroup
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
class Actor
{
    private static groups : ActorGroup[] = [];
    position : Vector;
    velocity : Vector = new Vector(0,0);
    rotation : number = 0;
    scale : Vector;
    drawing : Drawing;
    isDestroying : boolean = false;
    age : number = 0;
    group : ActorGroup;
    constructor(...args: any[])
    {
        this.drawing = new Drawing();
        this.position = new Vector(0,0);
        this.scale = new Vector(1,1);
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
            // Actor.sortGroups();
            // this.initialize()
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
    destroy()
    {
        this.isDestroying = true;
    }
    begin(...args: any[])
    {
        
    }
    update()
    {

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
    checkOverlap(targetClass, handler?:Function)
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
        Actor.groups.forEach(group => {
            group.update();
        });
    }
    static clear()
    {
        Actor.groups.forEach(group => {
            group.clear();
        });
    }
    static getGroup(targetClass)
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
    : Actor
    {
        this.group.displayPriority = displayPriority;
        Actor.sortGroups();
        return this;
    }
    static sortGroups()
    {
        Actor.groups.sort((a, b)=>{
            return a.displayPriority - b.displayPriority;
        });
    }
}
class TextActor extends Actor
{
    duration : number;
    xAlign : number;
    displayString : string;
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
export { Actor, TextActor };