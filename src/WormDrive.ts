import * as glue from "./Mglue"
import * as Tone from "./Tone"
import { Keyboard } from "./Keyboard";

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
    turnSpeed:number = 3;
    begin()
    {
        this.position.set(0.5,0.5);
        this.drawing
            .setColor(glue.Color.Blue)
            .addRect(0.02, 0.02, 0.02)
            .addArc(60, 6)
            .setColor(glue.Color.Green)
            .addRect(0.01, 0.01, 0.015, 0)
            .mirrorX()
    }
    update()
    {
        if(glue.Keyboard.keyDown[glue.Keyboard.LEFT])
        {
            this.rotation -= this.turnSpeed;
        }
        if(glue.Keyboard.keyDown[glue.Keyboard.RIGHT])
        {
            this.rotation += this.turnSpeed;
        }
        this.position.addDirection(this.rotation, 0.005);
    }
}
window.onload = function()
{
    glue.Config.title = "WORM DRIVE";
    g = new WormDriveGame();
}