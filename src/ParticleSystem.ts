import { Actor } from "./Actor";
import { Game } from "./Game";
import { Color } from "./Color"
import { Display } from "./Display";
import { Vector } from "./Vector";
import { Random } from "./Random";

class ParticleSystem
{
    count : number = 1;
    position : Vector = new Vector(0,0);
    angleWidth : number = 360;
    speed : number = 0.01;
    color : Color = Color.White;
    size : number = 0.02;
    duration : number = 30;
    constructor()
    {
        let actor = new ParticleActor();
        actor.particleSystem = this;
    }
}
class ParticleActor extends Actor
{
    particleSystem : ParticleSystem;
    private color : Color;
    private size : number;
    private duration : number;
    update()
    {
        if(this.particleSystem)
        {
            // if we are generating particles, spawn them and bail
            this.destroy();
            let s = this.particleSystem;
            if(s.count < 1)
            {
                return;
            } 
            for (let i = 0; i < s.count; i++) {
                let p = new ParticleActor();
                p.position.set(s.position.x, s.position.y);
                p.velocity.addDirection(Random.range(-s.angleWidth/2, s.angleWidth/2), s.speed * Random.range(0.5, 1.5));
                p.color = s.color;
                p.size = s.size;
                p.duration = s.duration;                   
            }
            return;
        }
        // otherwise just do a draw loop on ourself
        Game.display.fillRect(this.position.x, this.position.y, this.size, this.size, this.color);
        if(this.age > this.duration)
        {
            this.destroy();
        }
    }
}
export { ParticleSystem }