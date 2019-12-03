import * as m from "mglue";
import {Vector, Color, Keyboard, Random, TextDrawer, Sound} from "mglue";
var SPEED_MULT = 0.6;
class Shot extends m.Actor
{
    begin()
    {
        this.drawing
            .setColor(Color.lightgrey)
            .addRect(0.02)
    }
    update()
    {
        if(!this.position.onScreen())
        {
            this.destroy();
        }
    }
}
// used for hitstop frames and bounces from above
class FakeShot extends Shot
{
    destroyAtAge = 2;
    update()
    {
        if(this.age > this.destroyAtAge)
        {
            this.destroy();
        }
    }
}
class Player extends m.Actor
{
    acceleration : Vector = new Vector(0,0);
    speed : number = 0.0017 * SPEED_MULT;
    maxVelocity : number = 0.019 * SPEED_MULT;
    static deathSound : Sound;
    initialize()
    {
        Player.deathSound = (new Sound()).setFromParams(Sound.generateDrumParams(21530));
    }
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
        this.acceleration.set(0,0);
        if(Keyboard.keyDown[Keyboard.LEFT])
        {
            this.acceleration.set(-this.speed, 0);
        }
        else if(Keyboard.keyDown[Keyboard.RIGHT])
        {
            this.acceleration.set(this.speed, 0);
        }
        else
        {
            this.velocity.multiply(0.8);
        }
        this.velocity.add(this.acceleration);
        this.velocity.x = this.velocity.x.clamp(-this.maxVelocity, this.maxVelocity);
        let clampedX = this.position.x.clamp(0, 1);
        // zero velocity when we hit the walls
        if(clampedX != this.position.x)
        {
            this.velocity.x = 0;
            this.position.x = clampedX;
        }
        this.checkOverlap(Enemy, (e : Enemy)=>{
            e.kill();
            this.kill();
        })
        let rotationVector = new Vector(this.velocity.x*3, -0.06);
        this.rotation = rotationVector.rotation();
        if(g.ticks % 10 == 0)
        {
            let s = new Shot();
            s.setPosition(this.position);
            s.setVelocity(rotationVector.multiply(0.2*SPEED_MULT));
        }
    }
    kill()
    {
        Player.deathSound.play();
        let ps = new m.ParticleSystem();
        ps.position.set(this.position.x, this.position.y);
        ps.count = 30;
        ps.duration = 40;
        ps.size = 0.01;
        ps.color = Color.white;

        this.destroy();
        g.endGame();
    }
}
// just gonna do a simple drop in actor for now
class Enemy extends m.Actor
{
    gravity : number = 0.0004*SPEED_MULT;
    maxTurn : number = 1;
    juggled : boolean = false;
    bounceCount : number = 1;
    value : m.TextActor;
    static juggleCount : number = 0;
    hitStopFrames : number = -1;
    lastVelocity : Vector = new Vector(0,0);
    endOnDrop : boolean;
    tutorial : m.TextActor;
    static hitSound : Sound;
    static companionHitSound : Sound;
    // called on class initialization for static params
    initialize()
    {
        Enemy.hitSound = (new Sound()).setFromParams(Sound.generateDrumParams(2111330));
        Enemy.companionHitSound = (new Sound()).setFromParams(Sound.generateDrumParams(2131330));
    }
    begin()
    {
        this.endOnDrop = g.enemyCount==1;
        if(!this.endOnDrop)
        {
            this.value = new m.TextActor("");
            this.value.setDurationForever();    
        }
        else
        {
            this.tutorial = new m.TextActor("DON'T DROP");
            this.tutorial.setDuration(200);
        }
        this.position.set(Random.range(0.1, 0.9), 0);
        this.velocity.set(0, 0.006);
        this.drawing
            .setColor(g.enemyCount==1?Color.green:Color.purple)
            .addRect(0.02, 0.02, 0.02)
            .addArc(45, 8);
        g.enemyCount++;
   }
   kill()
   {
        if(!this.endOnDrop)
        {
            this.value.destroy();
        }
        this.destroy();
   }
   update()
   {
        if(this.hitStopFrames > 0)
        {
            this.hitStopFrames--;
            return;
        }
        else if(this.hitStopFrames == 0)
        {
            this.hitStopFrames--;
            this.velocity = this.lastVelocity;
        }
        if(!this.juggled)
        {
           this.preJuggleUpdate();
        }
        else
        {
            this.postJuggleUpdate();
        }
        if(!this.isActive())
        {
            if(this.endOnDrop)
            {
                p.kill();
                g.endGame();
            }
            else
            {
                this.value.destroy();
            }
            this.destroy();
        }
        this.checkOverlap(Shot, (s:Shot)=>{
            let fs : FakeShot = new FakeShot();
            fs.setPosition(s.position)
            s.destroy();
            // pop the enemy up
            this.velocity = new Vector(((this.position.x-s.position.x)*0.17*SPEED_MULT).clamp(-0.3, 0.3), -0.01);
            //this.velocity = this.position.copy().subtract(s.position).normalize().multiply(0.017*SPEED_MULT);
            if(this.endOnDrop && this.group.members.length < g.waveCount+2)
            {
                new Enemy();
            }
            else
            {
                this.bounceCount+=1;
            }
            if(!this.endOnDrop)
            {
                this.value.displayString = (this.bounceCount-1).toString();
                if(g.currentState == "game")
                {
                    let lastScore = Math.max(0,this.bounceCount-1);
                    g.score += lastScore;
                    let ta = new m.TextActor("+" + lastScore);
                    ta.setDuration(20);
                    ta.velocity.set(0,-0.0025);
                    ta.position.set(this.position.copy().add(new Vector(0,-0.01)))
                }
                Enemy.hitSound.play();
            }
            else
            {
                Enemy.companionHitSound.play();
            }
            this.juggled = true;
            this.hitStopFrames = 3;
            this.lastVelocity.set(this.velocity.x, this.velocity.y);
            this.velocity.set(0,0);
        });
        if(!this.endOnDrop)
        {
            this.value.setPosition(this.position.copy().add(this.velocity));
        }
        else
        {
            this.tutorial.setPosition(this.position.copy().add(this.velocity).add(new Vector(0.1, 0)));
        }
        if(this.position.y + this.velocity.y < 0)
        {
            this.position.y = 0;
            this.velocity.y *= -0.95;
        }
   }
   isActive()
   {
       return this.position.y < 1.0;
   }
   postJuggleUpdate()
   {
        this.velocity.add(new Vector(0,this.gravity));
        // bounce off the walls
        let nextX = this.position.x+this.velocity.x;
        if(nextX < 0 || nextX > 1)
        {
            this.velocity.x *= -0.95;
            if(nextX<0)
            {
                this.position.x = 0;
            }
            else if(nextX > 1)
            {
                this.position.x = 1;
            }
        }
   }
   preJuggleUpdate()
   {
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
class JuggleShip extends m.Game
{
    gameAge :number = 0;
    waveCount :number = 1;
    enemyCount : number = 1;
    addedSounds : any = [];
    onBeginGame()
    {
        Sound.setSeed(712);
        this.enemyCount = 1;
        Enemy.juggleCount = 0;
        p = new Player();
        new Enemy();
        this.gameAge = 0;
        this.waveCount = 1;
    }
    update()
    {
        this.gameAge++;
        // add a new enemy every 20 seconds
        if(this.currentState == "game" && this.gameAge%(60*12) == 0)
        {
            this.waveCount++;
            let ta = new m.TextActor("WAVE " + this.waveCount);
            ta.setDuration(120);
            ta.color = new Color(0.6, 0.5, 0.6);
            ta.setPosition(new Vector(0.5, 0.2));
            ta.scale = new Vector(3, 3);
            ta.setVelocity(new Vector(0,0.001));
            let s = new Sound();
            s.setFromParams(Sound.generateDrumParams()).setPattern(Sound.generateDrumPattern(0), 0.25).playPattern(); 
            this.addedSounds.push(s);
            new Enemy();
        }
        Sound.update();
    }
    onEndGame()
    {
        this.addedSounds.forEach(s => {
            s.remove();
        });
        this.addedSounds = [];
    }
}
var g;
m.Config.title = "JUGGLE SHIP";
m.Config.saveName = "juggleship";
m.Game.runOnReady(()=>{
    Sound.initialize();
    Sound.setSeed(119);
    let patternSpeeds = [0.25, 0.25, 0.75, 0.25]
    for(let i=0;i<2;i++)
    {
        let s = new Sound();
        s.setFromParams(Sound.generateDrumParams()).setPattern(Sound.generateDrumPattern(0), patternSpeeds[i]).playPattern();    
    }

    g = new JuggleShip();
    g.enableLeaderboard("https://juggleboard.glitch.me");
});