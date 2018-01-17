import * as glue from "./Mglue"
import * as Tone from "./Tone"

var g : TestGame;
class TestGame extends glue.Game
{
    onBeginGame()
    {
        let p = new Player();
        let e = new Enemy();
    }
}
class Enemy extends glue.Actor
{
    begin()
    {
        this.position.set(0.2, 0.2);
        this.drawing.setColor(glue.Color.red)
            .addRect(0.1, 0.1, 0,0);
    }
}
class Player extends glue.Actor
{
    begin()
    {
        this.position.set(0.5,0.5);
        this.drawing
            .setColor(glue.Color.blue)
            .addRect(0.01, 0.05, 0, -0.005)
            .addRect(0.025, 0.01, 0.015, 0)
            .mirrorX()
            .addRect(0.01, 0.03, 0.008, 0.025)
            .mirrorX()  
    }
    update()
    {
        let distance = glue.Vector.distance(this.position, glue.Mouse.position)
        let direction = this.position.directionTo(glue.Mouse.position);
        this.position.addDirection(direction, (distance).clamp(0,0.005));    
        this.checkOverlap(Enemy, (e)=>{
            this.destroy();
            let ps = new glue.ParticleSystem();
            ps.position.set(this.position.x, this.position.y);
            ps.count = 10;
            ps.color = glue.Color.blue;
            g.endGame();
        });
    }
}
window.onload = function()
{
    g = new TestGame();
    let s = new Tone.MonoSynth();
    s.toMaster();
    s.triggerAttackRelease('C4', '0.1');
}