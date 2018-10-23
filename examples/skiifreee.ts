// this line puts the mglue classes inside the m variable.
// you might see code that moves the classes directly into the
// namespace of your file, but those are just shorthand and not necessary
import * as m from "mglue";

class Player extends m.Actor
{
    // this function is called when the player is ititialized
    begin()
    {
        // make the player be represented by a small square
        this.drawing
            .addRect(0.05);

        // put the player in the top middle of the screen
        this.setPosition(new m.Vector(0.5, 0.25));
    }
    // this function is called every frame
    update()
    {
        let steeringSpeed = 0.01;
        // may as well support keyboard, mouse and touchscreen, no reason not to :)
        if((m.Mouse.isPressed && m.Mouse.position.x < 0.5) || m.Keyboard.keyDown[m.Keyboard.LEFT])
        {
            // mglue adds a few extension methods to numbers
            // which are helpful for simple game stuff.
            // clamp can take a min and max value, or by default clamps to 0-1
            this.position.x = (this.position.x-steeringSpeed).clamp();
        }
        else if((m.Mouse.isPressed && m.Mouse.position.x >= 0.5) || m.Keyboard.keyDown[m.Keyboard.RIGHT])
        {
            this.position.x = (this.position.x+steeringSpeed).clamp();
        }
   }
}

// in our game, trees will be the enemy, so add a class for them
class TreeEnemy extends m.Actor
{
    begin()
    {
        // the tree will be represented by a green rectangle
        this.drawing
            .setColor(m.Color.green)
            .addRect(0.02, 0.04);
        // it will start at a random position at the bottom of the screen
        // and move upwards
        this.setPosition(new m.Vector(m.Random.value(), 1));
        this.setVelocity(new m.Vector(0, -0.01));
    }
    update()
    {
        // if this and the player overlap
        this.checkOverlap(Player, (p:any)=>{
            // kill this tree
            this.destroy();
            // kill the player
            p.destroy();
            // end the game
            g.endGame();
        });
        // finally, if this tree goes off the screen, destroy it.
        if(this.position.y < 0)
        {
            this.destroy();
        }
    }
}

class ScoreThing extends m.Actor
{
    begin()
    {
        // the tree will be represented by a green rectangle
        this.drawing
            .setColor(m.Color.yellow)
            .addRect(0.03); 
        this.setPosition(new m.Vector(m.Random.value(), 1));
        this.setVelocity(new m.Vector(0, -0.01));
    }
    update()
    {
        // if this and the player overlap
        this.checkOverlap(Player, (p:any)=>{
            // remove this score thing
            this.destroy();
            // raise the game score by one
            g.score++;
            // pop out some particle effects
            let particles = new m.ParticleSystem();
		    particles.position.set(this.position);
            particles.color = m.Color.yellow;
		    particles.count = 10;
        });
        // this should be familiar from the tree code
        if(this.position.y < 0)
        {
            this.destroy();
        }
    }
}

// our game class, handles adding the player and enemies
class BasicGame extends m.Game
{
    onBeginGame()
    {
        new Player();
    }
    update()
    {
        // if the game hasn't ended, then every 20 frames add a new tree
        if(!this.gameOver && this.ticks%20==0)
        {
            new TreeEnemy();
        }
        // and we need the score things to spawn, so add the following to the game update loop
        if(!this.gameOver && this.ticks%40==0)
        {
            new ScoreThing();
        }
    }
}

// declare a variable that will hold your game
var g : BasicGame;

// this function is called when the webpage is up and running.
// the callback provided creates an instance of the basic game and stores it in the variable declared earlier.
m.Game.runOnReady(()=>{
    g = new BasicGame();
});

// then anywhere in the file, you can add the following code.
// configure the game name
m.Config.title = "FREELY SKIII";
// configure the save file name
m.Config.saveName = "freelySkiily";


