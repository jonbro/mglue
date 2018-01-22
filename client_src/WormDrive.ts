import { Drawing, ParticleSystem, TextActor, Config, Color, Keyboard, Vector, Random, Actor, Game } from "./Mglue";
import { Leaderboard } from "./Leaderboard";
var g : WormDriveGame;
class WormDriveGame extends Game
{
    rankStrings : string[] = ['ST', 'ND', 'RD'];
    leaderboardText : TextActor = new TextActor("");
    onBeginGame()
    {
        let p = new Player();
        let a = new Apple();
        let i = new InstructionText("OVERLAP SAFE");
    }
    updateTitle()
    {
        if(Keyboard.keyDown[Keyboard.SPACE])
        {
            this.transitionToGame();
        }
        let leaderboardType =Math.floor(this.ticks/180)%4;
        if(this.ticks%180 == 0)
        {
            switch(leaderboardType)
            {
                case 0:
                    break;
                case 1:
                    Leaderboard.get(true);
                    break;
                case 2:
                    Leaderboard.get(false, true)
                    break;
                case 3:
                    Leaderboard.get();
                    break;
            }
            Leaderboard.get();
        }
        if(Leaderboard.scores == null || leaderboardType == 0)
        {
            return;
        }
        let count = 0;
        let startPosition = 0.2;
        this.leaderboardText.color = Color.white;
        var leaderboardTypes = ['LAST', 'BEST', 'TOP'];

        this.leaderboardText.displayString = leaderboardTypes[leaderboardType-1];
        this.leaderboardText.setPosition(new Vector(0.5, startPosition));
        this.leaderboardText.update();
        startPosition += 0.035;
        Leaderboard.scores.forEach(score => {
            if(Leaderboard.playerId == score.playerId)
            {
                this.leaderboardText.color = Color.lightgreen;
                this.leaderboardText.xAlign = 1;
                this.leaderboardText.setPosition(new Vector(0.2,count*0.03+startPosition));
                this.leaderboardText.displayString = "YOU";
                this.leaderboardText.update();
                }
            else
            {
                this.leaderboardText.color = Color.white;
            }

            this.leaderboardText.xAlign = 1;
            this.leaderboardText.setPosition(new Vector(0.4,count*0.03+startPosition));
            if(score.rank != null)
            {
                let rs = "" + (score.rank + 1) + ((score.rank < 3) ? this.rankStrings[score.rank] : 'TH');
                this.leaderboardText.displayString = rs;
                this.leaderboardText.update();
            }

            this.leaderboardText.xAlign = -1;
            this.leaderboardText.setPosition(new Vector(0.6,count*0.03+startPosition));
            this.leaderboardText.displayString = score.score.toString();
            this.leaderboardText.update();
            count++;
        });
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
    update()
    {
        if(g.gameOver)
        {
            this.destroy();
        }
        super.update();
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
    lastPosition:Vector = new Vector(0,0);
    gameOverVelocitySet:boolean = false;
    begin(dangerSeg : boolean)
    {
        let color = dangerSeg?Color.lightgreen:Color.darkgreen;
        this.drawing.hasCollision = dangerSeg;
        this.drawing
            .setColor(color)
            .addRect(0.02, 0.02)
    }
    update()
    {
        if(g.gameOver)
        {
            if(!this.gameOverVelocitySet)
            {
                this.velocity.set(this.position);
                this.velocity.subtract(this.lastPosition);
                this.gameOverVelocitySet = true;    
            }
        }else{
            this.lastPosition.set(this.position);
        }
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
class PositionBuffer
{
    private positions: Vector[] = [new Vector(0,0)];
    private writeIndex:number = 0;
    getPosition(index:number)
    : Vector
    {
        return this.positions[(this.writeIndex+index)%this.positions.length];
    }
    addPosition(newPosition:Vector)
    {
        this.writeIndex = (this.writeIndex-1).mod(this.positions.length);
        this.positions[this.writeIndex] = newPosition;
    }
    growBuffer(growAmount:number, fillVector:Vector)
    {
        // generate a new fill buffer
        let c = 0;
        while(c<growAmount)
        {
            this.positions.splice(this.writeIndex, 0, new Vector(fillVector.x, fillVector.y));
            c++;
            this.writeIndex++;
        }
    }
}
class Player extends Actor
{
    turnSpeed:number = 4;
    bodySegments:BodySegment[] = []
    spawnRemaining:number = 0;
    moveSpeed:number = 0.005;
    spawnPosition : Vector;
    overlapDrawing : Drawing;
    intersections: Vector[] = [];
    priorPositions: PositionBuffer = new PositionBuffer();
    segmentLength: number = 10;
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
        this.priorPositions.addPosition(new Vector(this.position.x, this.position.y));
        if(this.spawnRemaining > 0 && this.age % this.segmentLength ==0)
        {
            this.spawnRemaining--;
            let dangerSeg :boolean = Math.floor(this.bodySegments.length/8)%2==1;
            let newSeg = new BodySegment(dangerSeg);
            this.bodySegments.push(newSeg);
            this.priorPositions.growBuffer(this.segmentLength, this.spawnPosition);
        }
        // update all the body segment positions
        for(let i=this.bodySegments.length-1;i>=0;i--)
        {
            let cSeg = this.bodySegments[i];
            cSeg.setPosition(this.priorPositions.getPosition((i+1)*this.segmentLength));
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
            this.position.x = this.position.x.clamp(0,1);
        }
        if(this.position.y > 1 || this.position.y < 0)
        {
            v.y *= -1;
            this.position.y = this.position.y.clamp(0,1);
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
            this.spawnPosition = new Vector(this.getSpawnPosition().x, this.getSpawnPosition().y);
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
    Config.title = "WORM DRIVE";
    Leaderboard.init();
    g = new WormDriveGame();
}
