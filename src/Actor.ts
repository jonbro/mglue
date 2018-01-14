import { Color } from "./Color";
import { Game } from "./Game";
import { Drawing } from "./Drawing";
import { Vector } from "./Vector";
class ActorGroup
{
    name : string;
    members : Actor[];
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
        this.begin(args)
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
    lateUpdate()
    {
        this.position.add(this.velocity);
        this.drawing.rotation = this.rotation;
        this.drawing.position.set(this.position.x, this.position.y);
        this.drawing.draw();
        this.age++;
    }
    checkOverlap(targetClass, handler)
    {
        let checkActors : Actor[] = Actor.getGroup(targetClass);
        checkActors.forEach(a => {
            if(a.drawing.isOverlapping(this.drawing))
            {
                handler(a);
            }
        });
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
}
class TextActor extends Actor
{
    duration : Number = 1;
    displayString : string;
    constructor(s : string)
    {
        super();
        this.displayString = s;
    }
    setDurationForever()
    {
        this.duration = 999999;
    }
    update()
    {
        Game.display.drawText(this.displayString, this.position.x, this.position.y, 0, -1, Color.White, 1);
    }   
    setPosition(p : Vector)
    : TextActor
    {
        super.setPosition(p);
        return this;
    }
}
export { Actor, TextActor };