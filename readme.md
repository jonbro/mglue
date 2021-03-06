# mGlue is an engine for making small arcade games
It is written in typescript, and based on concepts from [MGL.coffee](https://github.com/abagames/mgl.coffee)

It is currently in prerelease, meaning that the api has not stabilized. However, it is totally possible to make games with it. Below are a few of the games that have been made using it so far.

- [Worm Drive](http://jonbro.itch.io/worm-drive/)
- [Juggle Ship](http://jonbro.itch.io/juggle-ship/)

If you want a ton of examples of games it would be possible to make with this engine, check out [kenta cho's 50 small games](http://www.asahi-net.or.jp/~cs8k-cyu/blog/2014/12/12/games-in-2014/). This weekly game project, and the engine that came out of it, inspired me to write *mGlue*.

## Features

This engine is intentionally limited to get you to focus on making the bits of the game that are most important, and not let you get out into the weeds of "making cool art" or "coding a game loop". While you could use this engine to make a type of game that wouldn't be classified as an "arcade game", it is tuned to make arcade games as quickly as possible.

- Predefined game loop, you get a game state and a title state without any code
- automatic high score tracking and easy to use anonymous online leaderboards
- drawing API which only allows colored squares
- collision detection only allowing axis aligned rectangle collision
- automatic actor grouping for collision detection based on classes
- particle systems
- text actors
- touchscreen, mouse, and keyboard input
- procedural sound effects and music

## Getting Started

The best way to get started with the project is as follows:

- install [node.js](https://nodejs.org) if you don't have it already.
- make sure you have correctly set up all the nodejs paths.
- download [the mglue template](https://github.com/jonbro/mglueTemplate) app.
- from inside the mglue template folder, run `npm install`. This will install all the dependencies.
- from inside the mglue template folder, run `npm run watch`. This will start up a development server that will refresh your game any time you make changes to the source files. by default it is running at [http://localhost:8080](http://localhost:8080).
- Edit the game file located in `mGlueTemplate/client_src/newGame.ts`

## Tutorial

The following steps will get you making a simple game.

The most basic game is as follows. You should have more than this already in the template file, but go ahead and delete it. We want to start from scratch so you can understand what is happening.

```
// this line puts the mglue classes inside the m variable.
// you might see code that moves the classes directly into the
// namespace of your file, but those are just shorthand and not necessary
import * as m from "mglue";

// extend the Game class. We will fill this out shortly.
class BasicGame extends m.Game
{}

// declare a variable that will hold your game
var g : BasicGame;

// this function is called when the webpage is up and running.
// the callback provided creates an instance of the basic game and stores it in the variable declared earlier.
m.Game.runOnReady(()=>{
    g = new BasicGame();
});

```

With the above code, you should have a simple title screen up and running. You will notice that if you follow the directions `[TAP / PRESS SPACE]` then you will get to a black screen. This is because we haven't added anything to the game. Secondarily, the game is called `GAME TITLE` which is a wierd name for a game.

Lets fix those two issues, by adding the following code.

```
class Player extends m.Actor
{
    begin()
    {
        // make the player be represented by a small square
        this.drawing
            .addRect(0.05);

        // put the player in the top middle of the screen
        this.setPosition(0.5, 0.25);
    }
}

class BasicGame extends m.Game
{
    onBeginGame()
    {
        new Player();
    }
}

// then anywhere in the file, you can add the following code.
// configure the game name
m.Config.title = "FREELY SKIII";
// and the save file key
m.Config.saveName = "freelySkiii"

```
**A note about strings** any text that appears in the game _must_ be ALL CAPS. This is because the font embedded in the engine only supports uppercase letters. If you attempt to use lowercase, it will cause the game to throw errors.

With the above code, you should see that your game name has changed, and when you attempt to start the game, you get a white square on screen. That is your player.

We still don't have a lose conditions, so the game goes on forever. Lets add a way to lose. 

```
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
        this.setVelocity(new m.Vector(0, -0.01);
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
// inside your BasicGame class, add the following function
class BasicGame extends m.Game
{
    update()
    {
        // if the game hasn't ended, then every 20 frames add a new tree
        if(!this.gameOver && this.ticks%20==0)
        {
            new TreeEnemy();
        }
    }
}
```

The game is slightly better, but now its just a matter of the random number generator being kind to you. Let's add a way to control the player so you can dodge the trees.

```
// inside the player class add the following function.
class Player extends m.Actor
{
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
```

nearly there! We are at ~100 lines of code, and we have more or less a game all together. The last thing we are going to add is a quick class of "score things" so that there is a bit of an object for the game.

```
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
            let particle = new m.ParticleSystem();
		    particle.position.set(this.position);
            particle.color = m.Color.yellow;
		    particle.count = 10;
        });
        // this should be familiar from the tree code
        if(this.position.y < 0)
        {
            this.destroy();
        }
    }
}
// and we need the score things to spawn, so add the following to the game update loop
if(!this.gameOver && this.ticks%40==0)
{
    new ScoreThing();
}
```

and there you go! a fully formed game with local highscores. I leave making it into an interesting game as an excercise for the reader. You might want to try adding a difficulty curve, or changing the way that the skiier moves across the play field.

## API Overview

There are a few main classes that you will interact with when making an mGlue game. Below are the major ones that you will deal with, though there are a few addition ones that you can use if you want to dig into the source cod.

A note to users, these docs were produced by hand, so they may be out of date, or not exactly match the behavior of the api. I did my best to accurately represet the api, but feel free to dig in to the `client_src` folder if you want to make sure.

### Game

The game class handles the main game loop, moving between the title screen and the game itself. It also manages highscores for local play.

#### Properties
**score : number**
The current games score. Update this to update the score display in the corner. The value of this property is used to calculate and display highscores when the game ends.

**ticks : number**
The number of frames that have elapsed since the game started for the first time. This is useful for spawning objects on a timer.

**currentState : string"
a string which is either "game" or "title" depending on the current game state. Modifying this string externally (rather than via the `endGame()` function) will cause problems.

**gameOver : boolean**
helper property for the above function. Is true if currently on the title screen.

#### Functions
**endGame() : void**
Call this function to end the current game, and return to the title screen. It is possible to override this function, just make sure to call the base function to get proper state transitions and score saving.

**onBeginGame() : void**
Override this function to get a call when the game enters the play state. Useful for initializing your player instance.

**onEndGame() : void**
Override this function to get a call when the game ends, and returns to the title screen. Use this to clean up any actors that are still in the game.

**update() : void**
Override this function to get a callback every frame. This function is called during both the title state and the game state, so make sure to check which state you are in.

**updateTitle() : void**
Override this function to get an update during the title loop. Make sure to call the base function, since this handles displaying the leaderboard and managing input to return to the game state.


```
// An example game class
class MyGame extends Game
{
    onBeginGame()
    {
        // you can create a new player just by initializing it,
        // it is automatically added to an actor group and tracked by the system
        new Player();
    }
    update()
    {
        // if the player is playing, every second, spawn a new enemy
        if(!gameOver && ticks % 60 == 0)
        {
            new Enemy();
        }
    }
    onEndGame()
    {
        // kill all the enemies that are still alive
        Actor.getGroup(Enemy).forEach((e:any)=>{
            e.destroy();
        });
    }
}
```

### Actor
This is the basic building block of your game. You are going to make a bunch of these, and have them react to input and interact with each other via collisions.

#### Properties
**drawing : Drawing**
The main drawing for this actor. Modify this to have the actor automatically drawn on screen. This drawing is also used for detecting collisions.

**position : Vector**
The position of the actor on screen. Represented by values between 0-1, from left to right, and top to bottom.

**velocity : Vector**
How fast the actor is moving. This vector is added to the position after teh update function is called.

**rotation : number**
A number in degrees between 0-360. Updates the rotation of the drawing.

**scale : Vector**
Defaults to 1,1. Modify this to change the size of the drawing.

**age : number**
How many frames this actor has existed.

**isDestroying : boolean**
Will this actor be removed from the game at the end of the current update loop.

**group : ActorGroup**
A reference to the group that the actor belongs to.

**static totalCount : number**
A total count of actors in the game. Useful for debugging leaking actors that didn't get destroyed.

#### Functions
**begin(...) : void**
Override this function to do initial setup for an actor. Normally used for setting intial position and setting up the drawing. Parameters that are passed to the constructor are passed through here.

**initialize() : void**
called only on the first actor of this type which is added to the game. Useful for initializing any static properties of the actor (like sound effects)

**update() : void**
Override this function to get a per frame callback. Where you want to handle inputs, update positions, and check for collision.

**destroy() : void**
Call this function to mark the Actor to be removed from the game. A common pattern is to override this function to handle visual effects when the Actor dies.

**setPosition(Vector) : void**
Helper function to set the position of an actor.
**setVelocity(Vector) : void**
Helper function to set the velocity of an actor.

**checkOverlap(targetClass, callback(Actor)?) : boolean**
Checks for overlap between this actor and a class of actors. Returns true if this actor overlaps with a member of the targetClass. You can provide an optional callback to this class that is called with every member of the taget class that overlap occurs with.

for example, if you want a bullet to destroy any enemy it is touching, and also be destroyed if it is touching an enemy:
```
let touchingEnemy : boolean = this.checkOverlay(Enemy, (e:Enemy)=>{
    e.destroy();
});
if(touchingEnemy)
{
    this.destroy();
}
```

**setDisplayPriority(number) : void**
Sets the display priority for this entire actor group. Generally actor groups display in the order their first member is added to the game, if you need to have something draw in front of other things, use this to accomplish that.
All actors are by default display priority 1, with the exception of TextActors, which are display priority 2. You can use negative numbers. Higher numbers draw on top of lower numbers.

**static scroll(targetClasses[], Vector) : void**
Helper function which adds an offset to the position of all actors in the groups provided. Can be used to simulate camera movement.
Should be called from the `Game.update()` function.

```
// game update override function
update()
{
    // starfield scrolling effect
    Actor.scroll([Star], new Vector(0, 1/60));
}
``` 

**static getGroup(targetClass) : Actor[]**
returns an array containing all members of a target class.
```
// game update override function
update()
{
    // kill all enemies in game
    Actor.getGroup(Enemy).forEach((e:any)=>{
        e.destroy();
    });
}
```

### Drawing
How you get visuals on the screen. There are functions to add rectangles to a drawing in a variety of ways. Drawings are also used for collision detection between actors.

Generally you interact with a drawing by calling a number of functions on it to define the rectangles that compose it. These functions maintain internal state on the drawing, and many functions take into account what state the prior function set.

#### Properties
The drawing class has a few properties, but you shouldn't use them. Future versions may add safe ways to access the internal properties, but it isn't a good idea right now.

#### Functions
Most of the functions within the drawing class return the instance that the function is being called on, for easy chaining. 

**setColor(Color) : Drawing**
sets the color that rectangles added to the drawing will be. All rectangles added to the drawing will be this color until this function is called again.

**addRect(width : number, height : number, offsetX : number, offsetY : number) : Drawing**
All parameters except for the first are optional, and default to zero. If zero is provided for height (or not provided at all), the height will be set equal to the width.

the numbers are provided is screen size, where the screen is 1 unit wide.

```
// create a red square which is 1/10 of the screen size
// to the right of th e center of the attached actor
this.drawing
    .setColor(Color.red)
    .addRect(0.1, 0, 0.1);
```

**mirrorX() : Drawing**
Mirrors the last rect added around the x axis.

**mirrorY() : Drawing**
Mirrors the last rect added around the y axis.

**addArc(angle : number, count : number = 1)**
Adds _count_ number of copies of the last rectangle added, rotated around the center of the drawing by _angle_ degrees. Useful for creating circular drawings.
```
//to add a drawing which is a circle made of 6 squares
this.drawing
    .addRect(0.1, 0, 0.1) // move the offset to the right
    .addArc(360/6, 5); // only need to add 5 because the first rect was added on the above line
```

**addSegmentedRect(width : number, height : number = 0, offsetX : number = 0, offsetY : number = 0, angle : number = 0**
Add a rectangle made up of a bunch of smaller rectangles. Has the same parameters as the addRect function, except for an extra _angle_ parameter which defines the initial rotation of the box in degrees. 

Because all drawings in the game are axis aligned rectangles, if you want to visually show a box rotating, it must be made of smaller boxes. The boxes that make up this larger box are set to no less that 0.01 size.

### Mouse
Get input data from the mouse or touchscreen. The touchscreen emulates mouse behavior, so you just need to use this single class. All properties are static. The mouse only supports a single button, and the touch only supports a single touch.

#### Properties
**position : Vector**
The mouses position in the game, clamped to 0-1. If it is a touch, it is the last position that the touch was down in.

**isPressed : boolean**
is the mouse button currently being held down.

**pressedThisFrame : boolean**
did the mouse button go down on this frame (a click event)

#### Functions
while there are functions available, you should not use them. I forgot to mark them private, whoops.

A basic example that moves an actor to the left or right each time the mouse is clicked.

```
update()
{
    if(Mouse.pressedThisFrame)
    {
        if(Mouse.position.x < 0.5)
        {
            this.position.x -= 0.1;
        }
        else
        {
            this.position.x += 0.1;
        }
    }
}
```

### Keyboard
basic class for accessing information about keys the player is holding down.
#### Properties

**static keyDown : boolean[]**
An array containing true if any key is being held down. Indexed by keycode.

**static LEFT : number**
**static RIGHT : number**
**static UP : number**
**static DOWN : number**
read only helper values containing the keycodes for the arrow keys.

#### Functions
Like the mouse class, there are functions here, but only because I forgot to mark them private. Don't use.

### Vector 
A basic 2d vector class.

#### Properties
**x : number**
the x component of the vector.
**y : number**
the y component of the vector.

#### Functions

**constructor(x:number, y:number)**
creates a new Vector

**set(x:number, y:number)**
sets the values in an existing vector.

**set(v:Vector)**
copies the components from _v_ to this vector.

**copy() : Vector**
returns a copy of this vector. Many functions mutate the internal values of a vector, so make sure to copy vectors if you don't want them to be mutated before performing operations on them.

**add(other:Vector):Vector**
**subtract(other:Vector):Vector**
**multiply(scalar:number):Vector**
**divide(scalar:number):Vector**
perform the operation, modifing the instance this function is called on. Returns the instance to be used for chaining.

**length() : number**
returns the length of this vector.

**normalize() : Vector**
normalizes this vector and returns it.

**rotate(angle : number) : Vector**
rotates this vector by _angle_ degrees, and returns it.

**rotation() : number**
returns the angle that this vector is pointing, in degrees.

**addDirection(angle:number, amount:number)**
adds a vector which points _angle_ degrees, that is _amount_ long, to the current vector. For example `(new Vector(0,0)).addDirection(90,0.1);` would result in a vector(0, 0.1) because 90 degrees is pointing downwards.

**onScreen() : boolean**
returns true if the point represented by this vector is between 0-1 in both components.

### Color
Used for setting drawing states. Currently the following colors are available via a static property like `Color.red`

        black   		: "#000000",
        white			: "#FFFFFF",
        grey			: "#9d9d9d",
        darkgrey		: "#697175",
        lightgrey		: "#cccccc",
        gray			: "#9d9d9d",
        darkgray		: "#697175",
        lightgray		: "#cccccc",
        red				: "#be2633",
        darkred			: "#732930",
        lightred		: "#e06f8b",
        brown			: "#a46422",
        darkbrown		: "#493c2b",
        lightbrown		: "#eeb62f",
        orange			: "#eb8931",
        yellow 			: "#f7e26b",
        green			: "#44891a",
        darkgreen		: "#2f484e",
        lightgreen		: "#a3ce27",
        blue			: "#1d57f7",
        lightblue		: "#B2DCEF",
        darkblue		: "#1B2632",
        purple			: "#342a97",
        pink			: "#de65e2"
 


