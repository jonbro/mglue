import * as m from "./mglue";
import {Vector, Color, Keyboard, Random} from "./mglue";
class Shot extends m.Actor
{
    begin()
    {
        this.drawing
            .setColor(Color.yellow)
            .addRect(0.02)
    }
    update()
    {
        this.checkOverlap(Enemy, (e:Enemy)=>{
            e.destroy();
            this.destroy();
            if(g.currentState == "game")
            {
                g.score += 1;
            }
        });
    }
}
class Player extends m.Actor
{
    Acceleration : Vector = new Vector(0,0);
    Speed : number = 0.001;
    MaxVelocity : number = 0.01;
    begin()
    {
        this.drawing
            .setColor(Color.white)
            .addSegementedRect(0.01, 0.05, 0.015, 0, 30)
            .addSegementedRect(0.01, 0.05, -0.015, 0, -30)
            this.position.set(0.5, 0.85);
    }
    update()
    {
        this.Acceleration.set(0,0);
        if(Keyboard.keyDown[Keyboard.LEFT])
        {
            this.Acceleration.set(-this.Speed, 0);
        }
        else if(Keyboard.keyDown[Keyboard.RIGHT])
        {
            this.Acceleration.set(this.Speed, 0);
        }
        else
        {
            this.velocity.multiply(0.8);
        }
        this.velocity.add(this.Acceleration);
        this.velocity.x = this.velocity.x.clamp(-this.MaxVelocity, this.MaxVelocity);
        let clampedX = this.position.x.clamp(0.1, 0.9);
        // zero velocity when we hit the walls
        if(clampedX != this.position.x)
        {
            this.velocity.x = 0;
            this.position.x = clampedX;
        }
        this.checkOverlap(Enemy, (e : Enemy)=>{
            e.destroy();
            this.destroy();
            g.endGame();
        })
        let rotationVector = new Vector(this.velocity.x*3, -0.06);
        this.rotation = rotationVector.rotation();
        if(g.ticks % 20 == 0)
        {
            let s = new Shot();
            s.setPosition(this.position);
            s.setVelocity(rotationVector.multiply(0.2));
        }
    }
}
// just gonna do a simple drop in actor for now
class Enemy extends m.Actor
{
    maxTurn : number = 1;
    begin()
    {
        this.position.set(Random.range(0.1, 0.9), 0);
        this.velocity.set(0, 0.006);
        this.drawing
            .setColor(Color.red)
            .addRect(0.02, 0.02, 0.02)
            .addArc(45, 8);
   }
   update()
   {
       if(this.position.y > 1.0)
       {
           this.destroy();
       }
       this.rotation += this.velocity.rotation()*0.05;
       // only rotate in the middle of the screen
       if(this.position.y < 0.7)
       {
            let toPlayer = new Vector(p.position.x, p.position.y).subtract(this.position);
            let changeRotation = LerpRotation(this.velocity.rotation(), toPlayer.rotation());
            this.velocity.rotate(changeRotation.clamp(-this.maxTurn, this.maxTurn));
       }
   }
}
function LerpRotation(startRotation : number, endRotation : number, amount : number = 1.0)
{
    let shortest_angle=((((endRotation - startRotation) % 360) + 540) % 360) - 180;
    return shortest_angle * amount;
}
function Lerp(a :number, b:number, amount:number)
{
    return a + (b-a)*amount;
}
var p : Player;
class SlideShot extends m.Game
{
    onBeginGame()
    {
        m.Config.title = "SLIDE SHOT"
        p = new Player();
    }
    update()
    {
        if(this.currentState == "game" && this.ticks%20 == 0)
        {
            let e = new Enemy();
        }
    }
}
let g = new SlideShot();