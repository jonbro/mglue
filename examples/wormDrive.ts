import { Drawing, ParticleSystem, TextActor, Config, Color, Keyboard, Vector, Random, Actor, Game } from "./Mglue";
var g : WormDriveGame;
class WormDriveGame extends Game
{
    onBeginGame()
    {
        let p = new Player();
        let a = new Apple();
        let i = new InstructionText("OVERLAP SAFE");
    }
}
class InstructionText extends TextActor
{
    begin()
    {
        this.setDisplayPriority(-1);
        this.setDurationForever();
        this.xAlign = 0;
        this.setPosition(new Vector(0.5, 0.5));
        this.scale.x = 2;
        this.color = Color.darkgreen;
    }
}
class Apple extends Actor
{
    begin()
    {
        this.position.set(0.25, 0.25)
        this.drawing
            .setColor(Color.red)
            .addRect(0.02, 0.02, 0.02)
            .addArc(60,6)
    }
    chooseNewPosition()
    {
        this.position.set(Random.range(0.1,0.9), Random.range(0.1,0.9))
    }
}
class BodySegment extends Actor
{
    begin(dangerSeg : boolean)
    {
        let color = dangerSeg?Color.lightgreen:Color.darkgreen;
        this.drawing.hasCollision = dangerSeg;
        this.drawing
            .setColor(color)
            .addRect(0.02, 0.02)
    }
}
// line intersection
function turn(p1:Vector, p2:Vector, p3:Vector):number
{
    let epsilon = Math.pow(2, -52);
    let a = p1.x; let b = p1.y; 
    let c = p2.x; let d = p2.y;
    let e = p3.x; let f = p3.y;
    let A = (f - b) * (c - a);
    let B = (d - b) * (e - a);
    return (A > B + epsilon) ? 1 : (A + epsilon < B) ? -1 : 0;   
}
function lineIntersecting(p1:Vector, p2:Vector, p3:Vector, p4:Vector)
:boolean
{
    return (turn(p1, p3, p4) != turn(p2, p3, p4)) && (turn(p1, p2, p3) != turn(p1, p2, p4));
}
class Player extends Actor
{
    turnSpeed:number = 5;
    bodySegments:BodySegment[] = []
    spawnRemaining:number = 0;
    moveSpeed:number = 0.005;
    spawnPosition : Vector;
    overlapDrawing : Drawing;
    intersections: Vector[] = [];
    begin()
    {
        this.position.set(0.5,0.5);
        this.drawing
            .setColor(Color.lightblue)
            .addRect(0.02, 0.02, 0.01)
            .addArc(60, 6)
            .setColor(Color.darkgray)
            .addRect(0.01, 0.01, 0.015, 0)
            .mirrorX()
        this.overlapDrawing = new Drawing();
        this.overlapDrawing
            .setColor(Color.red)
            .addRect(0.01, 0.01, 0.04)
            .addArc(20, 18)
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
            let distance = Vector.distance(cSeg.position, moveTarget);
            cSeg.position.addDirection(direction, distance*0.05);
        }
        // see how many line segments overlap
        let overlapCount = 0;
        this.intersections = [];
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
                     
                    let intersection = new Vector(a.x, a.y).add(b).add(c).add(d).divide(4);
                    this.intersections.push(intersection);
                    this.overlapDrawing
                        .setRotation(this.age)
                        .setPosition(intersection)
                        .draw();
                }
            }
        }
        if(Keyboard.keyDown[Keyboard.LEFT])
        {
            this.rotation -= this.turnSpeed;
        }
        if(Keyboard.keyDown[Keyboard.RIGHT])
        {
            this.rotation += this.turnSpeed;
        }
        let v = new Vector(0,0).addDirection(this.rotation, 1);
        if(this.position.x > 1 || this.position.x < 0)
        {
            v.x *= -1;
        }
        if(this.position.y > 1 || this.position.y < 0)
        {
            v.y *= -1;
        }
        this.rotation = v.rotation();
        this.position.addDirection(this.rotation, this.moveSpeed);
        // check to see if we are eating an apple
        if(this.checkOverlap(Apple, (a)=>{
            a.chooseNewPosition();
        }))
        {
            // add score
            this.intersections.forEach(intersection => {
                new TextActor(`+1`).setPosition(intersection).setDuration(30).setVelocity(new Vector(0,-0.001));
                g.score+=1;
            });
            // start spawning body segments
            this.spawnRemaining = 8;
            this.spawnPosition = new Vector(this.getSpawnPosition().x, this.getSpawnPosition().y)
        }
        if(!g.gameOver && this.checkOverlap(BodySegment))
        {
            this.destroy();
            let ps = new ParticleSystem();
            ps.position.set(this.position.x, this.position.y);
            ps.count = 10;
            ps.color = Color.blue;
            g.endGame();
        }
    }
}
window.onload = function()
{
    console.log("window loading");
    Config.title = "WORM DRIVE";
    g = new WormDriveGame();
}
