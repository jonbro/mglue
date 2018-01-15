import * as glue from "./Mglue"
import * as Tone from "./Tone"
import { Keyboard } from "./Keyboard";
import { Vector } from "./Vector";

var g : WormDriveGame;
class WormDriveGame extends glue.Game
{
    onBeginGame()
    {
        let p = new Player();
        let a = new Apple();
    }
}
class Apple extends glue.Actor
{
    begin()
    {
        this.position.set(0.25, 0.25)
        this.drawing
            .setColor(glue.Color.red)
            .addRect(0.02, 0.02, 0.02)
            .addArc(60,6)
    }
    chooseNewPosition()
    {
        this.position.set(glue.Random.range(0.1,0.9), glue.Random.range(0.1,0.9))
    }
}
class BodySegment extends glue.Actor
{
    begin(dangerSeg : boolean)
    {
        let color = dangerSeg?glue.Color.lightgreen:glue.Color.darkgreen;
        this.drawing.hasCollision = dangerSeg;
        this.drawing
            .setColor(color)
            .addRect(0.02, 0.02)
    }
}
// line intersection
function turn(p1:glue.Vector, p2:glue.Vector, p3:glue.Vector):number
{
    let epsilon = Math.pow(2, -52);
    let a = p1.x; let b = p1.y; 
    let c = p2.x; let d = p2.y;
    let e = p3.x; let f = p3.y;
    let A = (f - b) * (c - a);
    let B = (d - b) * (e - a);
    return (A > B + epsilon) ? 1 : (A + epsilon < B) ? -1 : 0;   
}
function lineIntersecting(p1:glue.Vector, p2:glue.Vector, p3:glue.Vector, p4:glue.Vector)
:boolean
{
    return (turn(p1, p3, p4) != turn(p2, p3, p4)) && (turn(p1, p2, p3) != turn(p1, p2, p4));
}
class Player extends glue.Actor
{
    turnSpeed:number = 5;
    bodySegments:BodySegment[] = []
    spawnRemaining:number = 0;
    moveSpeed:number = 0.005;
    spawnPosition : glue.Vector;
    begin()
    {
        this.position.set(0.5,0.5);
        this.drawing
            .setColor(glue.Color.blue)
            .addRect(0.02, 0.02, 0.02)
            .addArc(60, 6)
            .setColor(glue.Color.green)
            .addRect(0.01, 0.01, 0.015, 0)
            .mirrorX()
    }
    private getSpawnPosition()
    {
        if(this.bodySegments.length==0)
        {
            return this.position;
        }
        return this.bodySegments[this.bodySegments.length-1].position;
    }
    update()
    {
        
        if(this.spawnRemaining > 0 && this.age % 20 ==0)
        {
            this.spawnRemaining--;
            let dangerSeg :boolean = Math.floor(this.bodySegments.length/8)%2==1;
            let newSeg = new BodySegment(dangerSeg);
            newSeg.setPosition(this.spawnPosition);
            this.bodySegments.push(newSeg);
        }
        // update all the body segment positions
        for(let i=this.bodySegments.length-1;i>=0;i--)
        {
            let moveTarget = this.position;
            let cSeg = this.bodySegments[i];
            if(i>0)
            {
                moveTarget = this.bodySegments[i-1].position;
            }
            let direction = cSeg.position.directionTo(moveTarget);
            let distance = glue.Vector.distance(cSeg.position, moveTarget);
            cSeg.position.addDirection(direction, distance*0.05);
        }
        // see how many line segments overlap
        let overlapCount = 0;
        for (let i = 0; i < this.bodySegments.length-1; i++) {
            const a = this.bodySegments[i].position;
            const b = this.bodySegments[i+1].position;
            for(let j=i;j<this.bodySegments.length-1;j++)
            {
                if(Math.abs(i-j)<4)
                {
                    continue;
                }
                const c = this.bodySegments[j].position;
                const d = this.bodySegments[j+1].position;
                if(lineIntersecting(a,b,c,d))
                {
                    overlapCount++;
                    let ps = new glue.ParticleSystem();
                    let pp = new Vector(d.x, d.y);
                    pp.add(c).add(b).add(a);
                    ps.position.set(pp.x/4,pp.y/4);
                    ps.count = 1;
                    ps.duration = 2;
                    ps.size = 0.01;
                    ps.color = glue.Color.darkred;        
                }
            }
        }
        if(glue.Keyboard.keyDown[glue.Keyboard.LEFT])
        {
            this.rotation -= this.turnSpeed;
        }
        if(glue.Keyboard.keyDown[glue.Keyboard.RIGHT])
        {
            this.rotation += this.turnSpeed;
        }
        this.position.addDirection(this.rotation, this.moveSpeed);
        this.position.x = this.position.x.loopRange();
        this.position.y = this.position.y.loopRange();
        // check to see if we are eating an apple
        if(this.checkOverlap(Apple, (a)=>{
            a.chooseNewPosition();
        }))
        {
            // add score
            new glue.TextActor(`+${overlapCount}`).setPosition(this.position).setDuration(30).setVelocity(new Vector(0,-0.001));
            g.score+=overlapCount;
            // start spawning body segments
            this.spawnRemaining = 8;
            this.spawnPosition = new glue.Vector(this.getSpawnPosition().x, this.getSpawnPosition().y)
        }
        if(!g.gameOver && this.checkOverlap(BodySegment))
        {
            this.destroy();
            let ps = new glue.ParticleSystem();
            ps.position.set(this.position.x, this.position.y);
            ps.count = 10;
            ps.color = glue.Color.blue;
            g.endGame();
        }
    }
}
window.onload = function()
{
    glue.Config.title = "WORM DRIVE";
    g = new WormDriveGame();
}