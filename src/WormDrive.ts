import * as glue from "./Mglue"
import * as Tone from "./Tone"

var g : WormDriveGame;
class WormDriveGame extends glue.Game
{
    onBeginGame()
    {
        let p = new Player();
    }
}
class Player extends glue.Actor
{
    begin()
    {
        this.position.set(0.5,0.5);
    }
    update()
    {
        let distance = glue.Vector.distance(this.position, glue.Mouse.position)
        let direction = this.position.directionTo(glue.Mouse.position);
        this.position.addDirection(direction, (distance).clamp(0,0.005));    
    }
}
window.onload = function()
{
    g = new WormDriveGame();
}