/**
 * This is a pretty direct port of the sound class in https://github.com/abagames/mgl.coffee
 */


import {Config} from "./Config"
import {Random} from "./Random"

var jsfx = require("./jsfx.js")
var jsfxlib = require("./jsfxlib.js")
let getBufferFromJsfx = function(context, lib){
	var params	= jsfxlib.arrayToParams(lib);
	var data	= jsfx.generate(params);
	var buffer	= context.createBuffer(1, data.length, 44100);
	var fArray	= buffer.getChannelData(0);
	for(var i = 0; i < fArray.length; i++){
		fArray[i]	= data[i];
	}
	return buffer;
}


export class Sound
{
    private static context : AudioContext;
    private static gainNode : GainNode;
    private static enabled : boolean;
    private static sounds : Sound[] = [];
    private static scheduleInterval : number;
    private static playInterval : number;
    private static quantize : 0.5;
    private static drumParameters : any;
    private static drumPatterns : any;
    private static random : Random;
    private oneShot : boolean;
    private scheduledTime : number;
    private patternInterval : number;
    private patternIndex : number;
    private pattern : string;
    private buffer : AudioBuffer;
    private volume : number = 1;
    private playedTime : number;
    private isPlayingLoop : boolean;

    constructor()
    {
        if(!Sound.sounds)
        {
            Sound.sounds = [];
        }
        Sound.sounds.push(this);
        this.volume = 1;
    }
    /** call to set up all static properties */
    static initialize()
    {
        try
        {
            this.context = new AudioContext();
            this.gainNode = this.context.createGain();
            this.gainNode.gain.value = Config.soundVolume;
            this.gainNode.connect(this.context.destination);
            this.enabled = true;
        }
        catch(error)
        {
            Sound.enabled = false;
        }
        this.playInterval = 60 / Config.soundTempo
		this.scheduleInterval = 1 / Config.fps * 2
		this.quantize = 0.5
		this.clear()
		this.initDrumParams()
        this.initDrumPatterns()
        this.random = new Random();
    }
    /**
     * Change the seed that is used by the Sound internal Random instance.
     * @param seed random seed value
     */
    static setSeed(seed : number)
    {
        this.random.seed(seed);
    }
    /**
     * call once per frame to update all playing loops, and play sounds that are linked to quantization.
     */
    static update()
    {
        if(!Sound.enabled)
        {
            return;
        }
        let currentTime = Sound.context.currentTime;
        let nextTime = currentTime + Sound.scheduleInterval;
        this.sounds.forEach(sound => {
            sound.update(currentTime, nextTime);
        });
    }
    /**
     * stop all playing sounds and loops.
     */
    private static clear()
    {
        this.sounds = [];
    }
    private static initDrumParams()
    {
        this.drumParameters = [
            ["sine",0,3,0,0.1740,0.1500,0.2780,20,528,2400,-0.6680,0,0,0.0100,0.0003,0,0,0,0.5000,-0.2600,0,0.1000,0.0900,1,0,0,0.1240,0],
            ["square",0,2,0,0,0,0.1,20,400,2000,-1,0,0,0,0.5,0,0,0,0.5,-0.5,0,0,0.5,1,0,0,0.75,-1],
            ["noise",0,2,0,0,0,0.1,1300,500,2400,1,-1,1,40,1,0,1,0,0,0,0,0.75,0.25,1,-1,1,0.25,-1],
            ["noise",0,2,0,0,0,0.05,2400,2400,2400,0,-1,0,0,0,-1,0,0,0,0,0,-0.15,0.1,1,1,0,1,1],
            ["noise",0,2,0,0.0360,0,0.2860,20,986,2400,-0.6440,0,0,0.0100,0.0003,0,0,0,0,0,0,0,0,1,0,0,0,0],
            ["saw",0,1,0,0.1140,0,0.2640,20,880,2400,-0.6000,0,0,0.0100,0.0003,0,0,0,0.5000,-0.3620,0,0,0,1,0,0,0,0],
            ["synth",0,2,0,0.2400,0.0390,0.1880,328,1269,2400,-0.8880,0,0,0.0100,0.0003,0,0,0,0.4730,0.1660,0,0.1700,0.1880,1,0,0,0.1620,0]
        ];
    }
    private static initDrumPatterns()
    {
        this.drumPatterns = [
            '0000010000000001',
            '0000100000001000',
            '0000100100001000',
            '0000100001001000',
            '0000101111001000',
            '0000100100101000',
            '0000100000001010',
            '0001000001000101',
            '0010001000100010',
            '0010001000100010',
            '0100000010010000',			
            '1000100010001000',
            '1010010010100101',
            '1101000001110111',
            '1000100000100010',
            '1010101010101010',
            '1000100011001000',
            '1111000001110110',
            '1111101010111010'
        ];
    }
    static generateParams(seed, params, mixRatio = 0.5)
    {
        let random = seed==0?Sound.random:new Random(seed);
        let psl = params.length;
        let i = random.rangeInt(0, psl-1);
        let p = params[i].concat();
        let pl = p.length;
        while(random.value() < mixRatio)
        {
            let ci = random.rangeInt(0,psl-1);
            let cp = params[ci];
            for(let i=1;i<pl-1;i++)
            {
                let rt = random.value();
                p[i] = p[i] * rt + cp[i] * (1-rt);
            }
        }
        return p;    
    }
    static generateDrumParams(seed : number = 0)
    {
        return this.generateParams(seed, this.drumParameters);
    }
    static generateDrumPattern(seed : number = 0)
    {
        let random = seed==0?Sound.random:new Random(seed);
		let dpsl = this.drumPatterns.length
		let i = random.rangeInt(0, dpsl - 1)
		let dp = this.drumPatterns[i]
		let dpl = dp.length
        let dpa = []
        for(let i=0;i<dpl-1;i++)
        {
            let d = dp.charAt(i);
            dpa.push(d=='1');
        }
        while(random.value() < 0.5)
        {
            let ci = random.rangeInt(0, dpsl-1);
            let cpd = this.drumPatterns[ci]
            for(let i=0;i<dpl-1;i++)
            {
                let cd = cpd.charAt(i)
                let c=cd==1;
                dpa[i] = (!dpa[i]) != (!c)
            }
        }
        let gdp = ""
        dpa.forEach(d => {
            gdp += d?'1':'0';
        });
		return gdp;
    }
    //#region Private Methods
    private calculateNextScheduledTime()
    {
        // this function steps forward in the pattern, until it finds a 1
        // and updates the scheduledtime with that number.
        // I have no idea why it uses 100
        let sti = Sound.playInterval * this.patternInterval;
        for(let i = 0; i<100;i++)
        {
            this.scheduledTime += sti;
            let p = this.pattern.charAt(this.patternIndex);
            this.patternIndex = (this.patternIndex+1)%this.pattern.length;
            if(p == '1')
            {
                break;
            }
        }
    }
    private playAt(time : number)
    {
        let s = Sound.context.createBufferSource()
        s.buffer = this.buffer;
        s.connect(Sound.gainNode);
        s.start(time);
    }
    /**
     * internal method to play a quantized sound or play a looping sound
     * @param currentTime audio context time
     * @param nextTime next time this update function will be called
     */
    private update(currentTime : number, nextTime : number)
    {
        if(this.oneShot)
        {
            this.oneShot = null;
            let pi = Sound.playInterval * Sound.quantize;
            let pt = Math.ceil(currentTime/pi) * pi;
            if(!this.playedTime || pt > this.playedTime)
            {
                this.playAt(pt);
                this.playedTime = pt;
            }
        }
        if(!this.isPlayingLoop)
        {
            return;
        }
        if(!this.scheduledTime)
        {
            this.scheduledTime = Math.ceil(currentTime / Sound.playInterval) * Sound.playInterval - Sound.playInterval * this.patternInterval;
            this.patternIndex = 0;
            this.calculateNextScheduledTime();
        }
        while(this.scheduledTime < currentTime)
        {
            this.calculateNextScheduledTime();
        }
        while(this.scheduledTime <= nextTime)
        {
            this.playAt(this.scheduledTime);
            this.calculateNextScheduledTime();
        }
    }
    //#endregion

    //#region Public Methods
    setFromParams(params : any)
    {
        if(!Sound.enabled)
        {
            return this;
        }
        params[2] *= this.volume;
        this.buffer = getBufferFromJsfx(Sound.context, params);
        return this;
    }
    setPattern(pattern, patternInterval = 0.25)
    {
        this.pattern = pattern;
        this.patternInterval = patternInterval;
        return this;
    }
    playNow()
    {
        this.playAt(0);
    }
    /** 
     * schedules the sound to play at the next quantized time
     * */
    play()
    {
        this.oneShot = true;
        return this;
    }
    /**
     * Plays the sound as a looping pattern.
     * Will throw an error if the sound doesn't have a pattern defined.
     */
    playPattern()
    {
        this.isPlayingLoop = true;
        this.scheduledTime = null;
        return this;
    }
    /**
     * removes a playing sound from the scheduled sounds.
     */
    remove()
    {
        let i = Sound.sounds.indexOf(this);
        if(i > -1)
        {
            Sound.sounds.splice(i, 1);
        }
    }
    //#endregion
}