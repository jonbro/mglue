## mGlue is an engine for making small arcade games
It is written in typescript, and based on concepts from [MGL.coffee](https://github.com/abagames/mgl.coffee)

It is currently in prerelease, meaning that the api has not stabilized. However, it is totally possible to make games with it. Below are a few of the games that have been made using it so far.

- [Worm Drive](http://jonbro.itch.io/worm-drive/)
- [Juggle Ship](http://jonbro.itch.io/juggle-ship/)


### Features

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


### API Overview

There are a few main classes that you will interact with when making an mGlue game. Below are the major ones that you will deal with, though there are a few addition ones that you can use if you want to dig into the source cod.

#### Game

The game class handles the main game loop, moving between the title screen and the game itself. It also manages highscores for local play.

##### Properties
**score : number**
The current games score. Update this to update the score display in the corner. The value of this property is used to calculate and display highscores when the game ends.

**ticks : number**
The number of frames that have elapsed since the game started for the first time. This is useful for spawning objects on a timer.

**currentState : string"
a string which is either "game" or "title" depending on the current game state. Modifying this string externally (rather than via the `endGame()` function) will cause problems.

**gameOver : boolean**
helper property for the above function. Is true if currently on the title screen.

##### Functions
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

#### Actor
This is the basic building block of your game. You are going to make a bunch of these, and have them react to input and interact with each other via collisions.

##### Properties
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

##### Functions
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

#### Drawing
How you get visuals on the screen. There are functions to add rectangles to a drawing in a variety of ways. Drawings are also used for collision detection between actors.

Generally you interact with a drawing by calling a number of functions on it to define the rectangles that compose it. These functions maintain internal state on the drawing, and many functions take into account what state the prior function set.

##### Properties
The drawing class has a few properties, but you shouldn't use them. Future versions may add safe ways to access the internal properties, but it isn't a good idea right now.

##### Functions
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

#### Mouse
Get input data from the mouse or touchscreen. The touchscreen emulates mouse behavior, so you just need to use this single class. All properties are static. The mouse only supports a single button, and the touch only supports a single touch.

##### Properties
**position : Vector**
The mouses position in the game, clamped to 0-1. If it is a touch, it is the last position that the touch was down in.

**isPressed : boolean**
is the mouse button currently being held down.

**pressedThisFrame : boolean**
did the mouse button go down on this frame (a click event)

##### Functions
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

#### Vector 
##### Properties
##### Functions





