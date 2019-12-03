
import * as m from "mglue";
import { Vector, Color, Keyboard, Random, TextDrawer, Sound } from "mglue";

// trying to do a little every extend style thing
// ? scroll the playing field
// ? bubbles come in from the top, and the field scrolls
class Bubble extends m.Actor
{
	facing: number;
	speed: number = 0.001;
	sinOffset: number;
	killTimer: number = -1;
	chainTime: number = 11;
	chainCount: number = 0;
	bonusIncrease: number = 2;
	circleSize: number;
	static clickSound : Sound;
	static popSound : Sound;
    initialize()
    {
        Bubble.clickSound = (new Sound()).setFromParams(Sound.generateDrumParams(2150));
        Bubble.popSound = (new Sound()).setFromParams(Sound.generateDrumParams(2159));
    }

	begin()
	{
		this.circleSize = Random.range(0.05, 0.1);
		this.setupDrawing();
		this.speed = Random.range(0.003, 0.008);
		this.facing = Random.value() * 360;
		this.sinOffset = Random.value() * 20;
		this.position.set(Random.value(), 0);
	}
	setupDrawing()
	{
		this.drawing
			.setColor(Color.green)
			.addRect(0.01, 0.01, this.circleSize)
			.addArc(30, 12);
	}
	update()
	{
		if (this.killTimer > 0)
		{
			this.killTimer--;
			if (this.killTimer == 0)
			{
				this.kill();
			}
		}
		this.rotation += 0.1;
		let tVel = new Vector(0, 0);
		this.facing = Math.sin(g.ticks * 1.0 / 120 + this.sinOffset)
		tVel.addDirection(this.facing * 360, this.speed);
		this.velocity = tVel;
		// stay on screen, x/y
		this.position.x = this.position.x.clamp();
		// when the player taps on a bubble, explode it
		if (m.Mouse.pressedThisFrame)
		{
			let d = Vector.distance(this.position, m.Mouse.position);
			if (d < this.circleSize)
			{
				m.Mouse.pressedThisFrame = false;
				this.gotTap();
			}
		}
		// end the game if we got to the bottom of the screen
		if(this.position.y > 1 && g.currentState == "game")
		{
			g.endGame();
			this.kill();
		}
	}
	gotTap()
	{
		Bubble.clickSound.playNow();
		this.kill();
	}
	kill()
	{
		this.updateScoreAndChains();
		Bubble.popSound.playNow();
	}
	updateScoreAndChains()
	{
		let scoreIncrease = this.chainCount * this.bonusIncrease;
		g.score += this.chainCount;
		// pop a score +whatever
		let scoreText = new m.TextActor("+" + this.chainCount);
		scoreText.position.set(this.position);
		scoreText.velocity.set(0, -0.001);
		scoreText.setDuration(20);
		this.destroy();
		m.Actor.getGroup(Bubble).concat(m.Actor.getGroup(DangerBubble)).forEach((a: any) =>
		{
			if (a.isDestroying || a.killTimer > 0)
			{
				return;
			}
			if (a != this && Vector.distance(a.position, this.position) < this.circleSize + a.circleSize)
			{
				a.killTimer = this.chainTime;
				a.chainCount = this.chainCount + 1;
			}
		});
	}
	destroy()
	{
		super.destroy();
		this.displayDeathParticles();
	}
	displayDeathParticles()
	{
		let p = new m.ParticleSystem();
		p.position.set(this.position);
		p.count = 10;
	}
}
class SubDangerBubble extends m.Actor
{
	begin()
	{
		this.drawing
			.setColor(Color.red)
			.addRect(0.02);
	}
}
class DangerBubble extends Bubble
{
	subBubbs : SubDangerBubble[];
	subCount : number;
	setupDrawing()
	{
		this.subCount = 6 + Math.floor(g.difficulty*0.25);
		this.subBubbs = [];
		for(let i=0;i<this.subCount;i++)
		{
			this.subBubbs.push(new SubDangerBubble());
		}
		console.log(this.subBubbs.length);
		this.drawing
			.setColor(Color.red)
			.addRect(0.01, 0.01, this.circleSize)
			.addArc(30, 12);
	}
	update()
	{
		super.update();
		if(this.subBubbs.length > 0)
		{
			for (let i = 0; i < this.subBubbs.length; i++) {
				const e = this.subBubbs[i];
				e.position.set(this.position);
				e.position.addDirection(360/this.subBubbs.length * i + g.ticks, 0.02);
			}	
		}
	}
	gotTap()
	{
		console.log(this.subBubbs.length);
		if(this.subBubbs.length > 0)
		{
			this.subBubbs.pop().destroy();
		}
		else
		{
			this.kill();
		}
	}
	displayDeathParticles()
	{
		let p = new m.ParticleSystem();
		p.position.set(this.position);
		p.color = Color.red;
		p.count = 10;
	}
	kill()
	{
		this.subBubbs.forEach(sb => {
			sb.destroy();
		});
		this.updateScoreAndChains();
	}
}

class LoadTend extends m.Game
{
	difficulty: number = 0;
	onBeginGame()
	{
		this.difficulty = 0;
	}
	spawnOnDifficulty()
	{
		if(m.Actor.getGroup(DangerBubble).length < this.difficulty)
		{
			new DangerBubble();
		}
		else
		{
			new Bubble();
		}
	}
	update()
	{
		if(!this.gameOver && m.Mouse.pressedThisFrame)
		{
			this.difficulty += 0.25;
		}
		let max = 0;
		m.Actor.getGroup(DangerBubble).concat(m.Actor.getGroup(Bubble)).forEach(m =>{
			max = Math.max(m.position.y, max);
		});
		
		m.Actor.scroll([Bubble, DangerBubble], new Vector(0,max < 0.5?0.0024:0.0018));
		// do we need any new spawn
		if (!this.gameOver && this.ticks % 10 == 0)
		{
			this.spawnOnDifficulty();
		}
		Sound.update();
	}
}

var g: LoadTend;

m.Config.title = "LODE TEND";
m.Config.saveName = "newGame";
m.Game.runOnReady(() =>
{
	Sound.initialize();
	Sound.setSeed(2248);
	
	for(let i=0;i<4;i++)
    {
        let s = new Sound();
        s.setFromParams(Sound.generateDrumParams()).setPattern(Sound.generateDrumPattern(0), 0.25*(i+1)).playPattern();    
    }

	g = new LoadTend();
	g.enableLeaderboard("https://lodeboard.glitch.me");
});