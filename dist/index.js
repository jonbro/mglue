(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mglue"] = factory();
	else
		root["mglue"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dummy class
 */
var Dummy = /** @class */ (function () {
    function Dummy() {
    }
    /**
     * Gets a person.
     * @param  {string} name
     * @returns An object with a name.
     */
    Dummy.prototype.getPerson = function (name) {
        return { name: name };
    };
    return Dummy;
}());
exports.Dummy = Dummy;
var Vector = /** @class */ (function () {
    function Vector(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector.prototype.set = function (x, y) {
        if (x instanceof Vector) {
            this.x = x.x;
            this.y = x.y;
        }
        else {
            this.x = x;
            this.y = y;
        }
    };
    Vector.distance = function (a, b) {
        return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    };
    Vector.prototype.directionTo = function (other) {
        return Math.atan2(other.x - this.x, -(other.y - this.y)) * 180.0 / Math.PI;
    };
    Vector.prototype.rotation = function () {
        return Math.atan2(this.x, -this.y) * 180 / Math.PI;
    };
    Vector.prototype.addDirection = function (degrees, amount) {
        var radians = degrees * Math.PI / 180.0;
        this.x += Math.sin(radians) * amount;
        this.y -= Math.cos(radians) * amount;
        return this;
    };
    Vector.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    };
    Vector.prototype.subtract = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    };
    Vector.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    Vector.prototype.normalize = function () {
        return this.divide(this.length());
    };
    Vector.prototype.divide = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    };
    Vector.prototype.multiply = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    Vector.prototype.rotate = function (angleDegrees) {
        if (angleDegrees == 0) {
            return this;
        }
        var radians = angleDegrees * Math.PI / 180;
        var tx = this.x;
        this.x = this.x * Math.cos(radians) - this.y * Math.sin(radians);
        this.y = tx * Math.sin(radians) + this.y * Math.cos(radians);
        return this;
    };
    return Vector;
}());
exports.Vector = Vector;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*
Color Definitions from Puzzlescript, which is provided under the following license
----------------------------------------------------------------------------------
The MIT License (MIT)

Copyright (c) 2013 Stephen Lavelle

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var Color = /** @class */ (function () {
    function Color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    Object.defineProperty(Color, "black", {
        // color accessors
        get: function () { return Color.hexToRgb(Color.currentPalette.black); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "white", {
        get: function () { return Color.hexToRgb(Color.currentPalette.white); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "grey", {
        get: function () { return Color.hexToRgb(Color.currentPalette.grey); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "darkgrey", {
        get: function () { return Color.hexToRgb(Color.currentPalette.darkgrey); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "lightgrey", {
        get: function () { return Color.hexToRgb(Color.currentPalette.lightgrey); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "gray", {
        get: function () { return Color.hexToRgb(Color.currentPalette.grey); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "darkgray", {
        get: function () { return Color.hexToRgb(Color.currentPalette.darkgrey); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "lightgray", {
        get: function () { return Color.hexToRgb(Color.currentPalette.lightgrey); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "red", {
        get: function () { return Color.hexToRgb(Color.currentPalette.red); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "darkred", {
        get: function () { return Color.hexToRgb(Color.currentPalette.darkred); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "lightred", {
        get: function () { return Color.hexToRgb(Color.currentPalette.lightred); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "brown", {
        get: function () { return Color.hexToRgb(Color.currentPalette.brown); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "darkbrown", {
        get: function () { return Color.hexToRgb(Color.currentPalette.darkbrown); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "lightbrown", {
        get: function () { return Color.hexToRgb(Color.currentPalette.lightbrown); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "green", {
        get: function () { return Color.hexToRgb(Color.currentPalette.green); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "darkgreen", {
        get: function () { return Color.hexToRgb(Color.currentPalette.darkgreen); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "lightgreen", {
        get: function () { return Color.hexToRgb(Color.currentPalette.lightgreen); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "blue", {
        get: function () { return Color.hexToRgb(Color.currentPalette.blue); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "darkblue", {
        get: function () { return Color.hexToRgb(Color.currentPalette.darkblue); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "lightblue", {
        get: function () { return Color.hexToRgb(Color.currentPalette.lightblue); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "orange", {
        get: function () { return Color.hexToRgb(Color.currentPalette.orange); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "yellow", {
        get: function () { return Color.hexToRgb(Color.currentPalette.yellow); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "purple", {
        get: function () { return Color.hexToRgb(Color.currentPalette.purple); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color, "pink", {
        get: function () { return Color.hexToRgb(Color.currentPalette.pink); },
        enumerable: true,
        configurable: true
    });
    Color.hexToRgb = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new Color(parseInt(result[1], 16) / 255.0, parseInt(result[2], 16) / 255.0, parseInt(result[3], 16) / 255.0) : null;
    };
    Color.prototype.toString = function () {
        var rval = this.r * 255.0;
        var gval = this.g * 255.0;
        var bval = this.b * 255.0;
        return "rgb(" + rval + ", " + gval + ", " + bval + ")";
    };
    Color.arnecolors = {
        black: "#000000",
        white: "#FFFFFF",
        grey: "#9d9d9d",
        darkgrey: "#697175",
        lightgrey: "#cccccc",
        gray: "#9d9d9d",
        darkgray: "#697175",
        lightgray: "#cccccc",
        red: "#be2633",
        darkred: "#732930",
        lightred: "#e06f8b",
        brown: "#a46422",
        darkbrown: "#493c2b",
        lightbrown: "#eeb62f",
        orange: "#eb8931",
        yellow: "#f7e26b",
        green: "#44891a",
        darkgreen: "#2f484e",
        lightgreen: "#a3ce27",
        blue: "#1d57f7",
        lightblue: "#B2DCEF",
        darkblue: "#1B2632",
        purple: "#342a97",
        pink: "#de65e2"
    };
    Color.currentPalette = Color.arnecolors;
    return Color;
}());
exports.Color = Color;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Config_1 = __webpack_require__(5);
var Drawing_1 = __webpack_require__(6);
var Display = /** @class */ (function () {
    function Display() {
        this.textDrawer = new Drawing_1.TextDrawer();
        this.buildDisplay();
        this.setSize();
    }
    Display.prototype.buildDisplay = function () {
        var _this = this;
        var displayElement = document.getElementById("display");
        Display.element = displayElement;
        this.context = Display.element.getContext("2d");
        window.onresize = function () {
            if (_this.resizeTimer) {
                clearTimeout(_this.resizeTimer);
            }
            _this.resizeTimer = setTimeout(_this.setSize, 200);
        };
    };
    Display.prototype.setSize = function () {
        var displayParent = document.getElementById("displayDiv");
        var shortEdge = Math.min(displayParent.clientWidth, displayParent.clientHeight);
        Display.element.width = Display.element.height = shortEdge;
        Display.size.set(shortEdge, shortEdge);
    };
    Display.prototype.preUpdate = function () {
        this.clear();
    };
    Display.prototype.clear = function () {
        this.context.fillStyle = Config_1.Config.backgroundColor.toString();
        this.context.fillRect(0, 0, Display.size.x, Display.size.y);
    };
    Display.prototype.fillRect = function (x, y, width, height, color) {
        if (color === void 0) { color = Color_1.Color.white; }
        this.fillRectDirect((x - width / 2) * Display.size.x, (y - height / 2) * Display.size.y, width * Display.size.x, height * Display.size.y, color);
    };
    Display.prototype.fillRectDirect = function (x, y, width, height, color) {
        if (color === void 0) { color = Color_1.Color.white; }
        this.context.fillStyle = color ? color.toString() : Color_1.Color.white.toString();
        this.context.fillRect(x, y, width, height);
    };
    Display.prototype.drawText = function (text, x, y, alignX, alignY, color, scale) {
        if (alignX === void 0) { alignX = -1; }
        if (alignY === void 0) { alignY = -1; }
        if (color === void 0) { color = Color_1.Color.white; }
        if (scale === void 0) { scale = 1; }
        this.textDrawer.setSize(Display.size);
        this.textDrawer.drawString(text, x, y, alignX, alignY, color, scale);
    };
    Display.element = null;
    Display.size = new Vector_1.Vector(0, 0);
    return Display;
}());
exports.Display = Display;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Display_1 = __webpack_require__(2);
var Actor_1 = __webpack_require__(4);
var Config_1 = __webpack_require__(5);
var Mouse_1 = __webpack_require__(8);
var Vector_1 = __webpack_require__(0);
var Keyboard_1 = __webpack_require__(9);
var Leaderboard_1 = __webpack_require__(10);
var GameState_1 = __webpack_require__(15);
__webpack_require__(11);
/**
 * Handles the core game loop. Subclass this to kick off your game.
 * Runs updating all the actors, refreshing the display, transitioning between
 * the title and the game, and tracking scores.
 *
 * ```
 * class MyGame extends Game
 * {
 *     // when the game starts, spawn a new player
 *     onBeginGame()
 *     {
 *         p = new Player();
 *     }
 *     // every 20 frames, while the game is playing, spawn an enemy
 *     update()
 *     {
 *         if(this.currentState == "game" && this.ticks%20 == 0)
 *         {
 *             let e = new Enemy();
 *         }
 *     }
 * }
 * ```
 */
var Game = /** @class */ (function () {
    function Game(display) {
        if (display === void 0) { display = new Display_1.Display(); }
        var _this = this;
        this.currentTime = 0;
        this.previousTime = 0;
        this.delta = 0;
        this.score = 0;
        this.lastScore = -1;
        this.highScore = -1;
        this._ticks = 0;
        this.currentState = GameState_1.GameState.title;
        // if there was a game running prior we need to make sure we clean up its animation loop
        // lets us spawn off a bunch of games in a row without timing issues
        window.cancelAnimationFrame(Game.animationFrameIdentifier);
        // clean up any straggling actors
        Actor_1.Actor.clear();
        if (window.localStorage.getItem(Config_1.Config.saveName)) {
            this.highScore = Number(window.localStorage.getItem(Config_1.Config.saveName));
        }
        Game.INTERVAL = 1000 / Config_1.Config.fps;
        Game.display = display;
        Display_1.Display.element.focus();
        Keyboard_1.Keyboard.initialize();
        Mouse_1.Mouse.initialize();
        this.transitionToTitle();
        Game.animationFrameIdentifier = Game.requestAnimationFrame(function (time) { _this.updateFrame(time); });
    }
    Object.defineProperty(Game.prototype, "ticks", {
        /** number of frames that has elapsed since the game started */
        get: function () {
            return this._ticks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "gameOver", {
        get: function () { return this.currentState != GameState_1.GameState.game; },
        enumerable: true,
        configurable: true
    });
    Game.prototype.endGame = function () {
        this.lastScore = this.score;
        if (this.lastScore > 0 && this.lastScore > this.highScore) {
            this.highScore = this.lastScore;
            window.localStorage.setItem(Config_1.Config.saveName, this.highScore.toString());
        }
        this.transitionToTitle();
        this.currentState = GameState_1.GameState.title;
        this.onEndGame();
    };
    Game.prototype.onBeginGame = function () { };
    Game.prototype.onEndGame = function () { };
    Game.prototype.update = function () { };
    Game.prototype.updateTitle = function () {
        if (Keyboard_1.Keyboard.keyDown[Keyboard_1.Keyboard.SPACE]) {
            this.transitionToGame();
        }
    };
    Game.prototype.transitionToTitle = function () {
        var ty = (Config_1.Config.title.length == 1) ? .2 : .15;
        new Actor_1.TextActor(Config_1.Config.title).setPosition(new Vector_1.Vector(.5, ty)).setDurationForever().scale = new Vector_1.Vector(2, 2);
        new Actor_1.TextActor('[ SPACE ] TO START').setPosition(new Vector_1.Vector(.5, .7)).setDurationForever();
        if (this.lastScore >= 0) {
            new Actor_1.TextActor("LAST SCORE: " + this.lastScore).setPosition(new Vector_1.Vector(.5, .8)).setDurationForever();
            Leaderboard_1.Leaderboard.set(this.score);
        }
        if (this.highScore >= 0) {
            if (this.lastScore != this.highScore) {
                new Actor_1.TextActor("YOUR HIGH SCORE: " + this.highScore).setPosition(new Vector_1.Vector(.5, .85)).setDurationForever();
            }
            else {
                new Actor_1.TextActor("NEW HIGH SCORE!!!").setPosition(new Vector_1.Vector(.5, .85)).setDurationForever();
            }
        }
    };
    Game.prototype.transitionToGame = function () {
        this.currentState = GameState_1.GameState.game;
        this.score = 0;
        Actor_1.Actor.clear();
        this.onBeginGame();
    };
    Game.prototype.preUpdateFrame = function (time) {
        var _this = this;
        if (time) {
            this.currentTime = time;
        }
        else {
            this.currentTime = new Date().getTime();
        }
        this.delta += (this.currentTime - this.previousTime) / Game.INTERVAL;
        this.previousTime = this.currentTime;
        if (this.delta >= 0.75) {
            return true;
        }
        Game.animationFrameIdentifier = Game.requestAnimationFrame(function (time) { _this.updateFrame(time); });
        return false;
    };
    Game.prototype.updateFrame = function (time) {
        if (!this.preUpdateFrame(time)) {
            return;
        }
        Game.display.preUpdate();
        this._ticks++;
        this.update();
        Actor_1.Actor.update();
        if (this.currentState == GameState_1.GameState.title) {
            this.updateTitle();
        }
        Game.display.drawText("SCORE: " + this.score, 1, 0, 1);
        this.postUpdateFrame();
    };
    Game.prototype.postUpdateFrame = function () {
        var _this = this;
        this.delta = 0;
        Game.animationFrameIdentifier = Game.requestAnimationFrame(function (time) { _this.updateFrame(time); });
    };
    Game.requestAnimationFrameWrapper = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
            return window.setTimeout(callback, Game.INTERVAL / 2);
        };
    Game.requestAnimationFrame = function (callback) {
        return Game.requestAnimationFrameWrapper(callback);
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(1);
var Game_1 = __webpack_require__(3);
var Drawing_1 = __webpack_require__(6);
var Vector_1 = __webpack_require__(0);
/**
 * You are going to make your game out of a pile of these.
 * Contains very basic movement, updating, and drawing.
 * Also where you handle overlap detection and removing things from groups.
 *
 * ```
 * class Enemy extends Actor
 * {
 *      begin()
 *      {
 *
 *          // this actor will move down the screen 1/100 of the distance per frame
 *          // velocity is automatically integrated after the update call
 *          this.velocity.set(0, 0.01);
 *
 *          // setup the drawing that will be used for this actor
 *          // drawn to the screen after every update
 *          this.drawing
 *              .setColor(Color.red)
 *              .addRect(0.01);
 *      }
 *      update()
 *      {
 *          // check if this object is overlapping an actor of type Player
 *          this.checkOverlap(Player, (p:player)=>{
 *              // destroy the player that is overlapped
 *              p.destroy();
 *          });
 *      }
 * }
 * ```
 *
 * The drawing property is also what is used for overlap checks between actors, so if you want differently sized hitboxes,
 * make sure to add additional drawings to your actor.
 *
 */
var Actor = /** @class */ (function () {
    function Actor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.velocity = new Vector_1.Vector(0, 0);
        this.rotation = 0;
        this.isDestroying = false;
        /** Number of frames the actor has been alive for. */
        this.age = 0;
        this.drawing = new Drawing_1.Drawing();
        this.position = new Vector_1.Vector(0, 0);
        this.scale = new Vector_1.Vector(1, 1);
        var className = this.constructor['name'];
        var group;
        for (var i = 0; i < Actor.groups.length; i++) {
            var g = Actor.groups[i];
            if (g.name == className) {
                group = g;
                break;
            }
        }
        if (!group) {
            group = new ActorGroup(className);
            Actor.groups.push(group);
            // Actor.sortGroups();
            // this.initialize()
        }
        group.members.push(this);
        this.group = group;
        this.begin.apply(this, args);
        // after begin, force an update of the drawing state, so we don't get bad collisions on the first frame
        this.drawing.position.set(this.position.x, this.position.y);
        this.drawing.updateState();
    }
    Actor.prototype.initialize = function () {
    };
    /** Mark this actor to be removed from the game at the end of the current update loop. */
    Actor.prototype.destroy = function () {
        this.isDestroying = true;
    };
    Actor.prototype.begin = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    Actor.prototype.update = function () {
    };
    Actor.prototype.setPosition = function (p) {
        this.position.set(p.x, p.y);
        return this;
    };
    Actor.prototype.setVelocity = function (velocity) {
        this.velocity.set(velocity.x, velocity.y);
        return this;
    };
    Actor.prototype.lateUpdate = function () {
        this.position.add(this.velocity);
        this.drawing.rotation = this.rotation;
        this.drawing.position.set(this.position.x, this.position.y);
        this.drawing.draw();
        this.age++;
    };
    Actor.prototype.checkOverlap = function (targetClass, handler) {
        var _this = this;
        var res = false;
        var checkActors = Actor.getGroup(targetClass);
        checkActors.forEach(function (a) {
            if (a.drawing.isOverlapping(_this.drawing)) {
                res = true;
                if (handler) {
                    handler(a);
                }
            }
        });
        return res;
    };
    Actor.update = function () {
        Actor.totalCount = 0;
        Actor.groups.forEach(function (group) {
            Actor.totalCount += group.members.length;
            group.update();
        });
    };
    Actor.clear = function () {
        Actor.groups.forEach(function (group) {
            group.clear();
        });
    };
    Actor.getGroup = function (targetClass) {
        var classname = targetClass["name"];
        for (var i = 0; i < Actor.groups.length; i++) {
            var g = Actor.groups[i];
            if (g.name == classname) {
                return g.members;
            }
        }
        return [];
    };
    Actor.prototype.setDisplayPriority = function (displayPriority) {
        this.group.displayPriority = displayPriority;
        Actor.sortGroups();
        return this;
    };
    Actor.sortGroups = function () {
        Actor.groups.sort(function (a, b) {
            return a.displayPriority - b.displayPriority;
        });
    };
    Actor.groups = [];
    /** Number of actors in the game. */
    Actor.totalCount = 0;
    return Actor;
}());
exports.Actor = Actor;
var TextActor = /** @class */ (function (_super) {
    __extends(TextActor, _super);
    function TextActor(s) {
        var _this = _super.call(this) || this;
        _this.displayString = "";
        _this.displayString = s;
        return _this;
    }
    TextActor.prototype.begin = function () {
        this.setDisplayPriority(2);
        this.duration = 1;
        this.scale.set(1, 1);
        this.xAlign = 0;
        this.color = Color_1.Color.white;
    };
    TextActor.prototype.setDurationForever = function () {
        this.duration = 999999;
        return this;
    };
    TextActor.prototype.update = function () {
        Game_1.Game.display.drawText(this.displayString, this.position.x, this.position.y, 0, this.xAlign, this.color, this.scale.x);
        this.position.add(this.velocity);
        if (this.age > this.duration) {
            this.destroy();
        }
    };
    TextActor.prototype.setDuration = function (duration) {
        this.duration = duration;
        return this;
    };
    TextActor.prototype.setVelocity = function (velocity) {
        _super.prototype.setVelocity.call(this, velocity);
        return this;
    };
    TextActor.prototype.setPosition = function (p) {
        _super.prototype.setPosition.call(this, p);
        return this;
    };
    return TextActor;
}(Actor));
exports.TextActor = TextActor;
/**
 * Collection of Actors. Each new actor subclass generates a group, though you can create further ones if necessary.
 * Actors are automatically added to their class group on creation.
 * The main actor groups are tracked by `Game` to handle updating, so don't mess with them too much.
 *
 * Most accessing of this class happens through the actor class.
 *
 * ```
 * class Player extents Actor {}
 * let p = new Player();
 * if(Actor.getGroup(Player).members[0] == p)
 * {
 *      console.log("you found the player!");
 * }
 * ```
 */
var ActorGroup = /** @class */ (function () {
    function ActorGroup(name) {
        this.displayPriority = 1;
        this.name = name;
        this.clear();
    }
    ActorGroup.prototype.clear = function () {
        this.members = [];
    };
    ActorGroup.prototype.update = function () {
        var i = 0;
        while (true) {
            if (i >= this.members.length) {
                break;
            }
            var a = this.members[i];
            if (!a.isDestroying) {
                a.update();
                a.lateUpdate();
                i++;
            }
            else {
                this.members.splice(i, 1);
            }
        }
    };
    return ActorGroup;
}());
exports.ActorGroup = ActorGroup;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(1);
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.fps = 60;
    Config.backgroundColor = Color_1.Color.black;
    Config.soundTempo = 120;
    Config.soundVolume = 0.02;
    Config.debugMode = true;
    Config.title = "GAME TITLE";
    Config.saveName = "Wormdrive3hs";
    Config.isDebuggingMode = false;
    return Config;
}());
exports.Config = Config;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(3);
var Vector_1 = __webpack_require__(0);
var Display_1 = __webpack_require__(2);
var TextDrawer = /** @class */ (function () {
    function TextDrawer() {
        this.dotPatterns = [];
        this.charToIndex = [];
        this.baseDotSize = 1;
        var p = 0;
        var d = 32;
        var pIndex = 0;
        for (var i = 1; i <= TextDrawer.COUNT; i++) {
            var dots = [];
            for (var j = 1; j <= 5; j++) {
                for (var k = 1; k <= 4; k++) {
                    d++;
                    if (d >= 32) {
                        p = TextDrawer.patterns[pIndex++];
                        d = 0;
                    }
                    if ((p & 1) > 0) {
                        dots.push(new Vector_1.Vector(k, j));
                    }
                    p >>= 1;
                }
            }
            this.dotPatterns.push(dots);
        }
        var charStr = "()[]<>=+-*/%&_!?,.:|'\"$@#\\urdl";
        for (var c = 0; c <= 127; c++) {
            var li = void 0;
            if (c == 32) {
                li = -1;
            }
            else if (48 <= c && c < 58) {
                li = c - 48;
            }
            else if (65 <= c && c < 90) {
                li = c - 65 + 10;
            }
            else {
                var ci = charStr.indexOf(String.fromCharCode(c));
                if (ci >= 0) {
                    li = ci + 36;
                }
                else {
                    li = -2;
                }
            }
            this.charToIndex.push(li);
        }
    }
    TextDrawer.prototype.drawString = function (text, x, y, xAlign, yAlign, color, scale) {
        var tx = Math.floor(x * Display_1.Display.size.x);
        var ty = Math.floor(y * Display_1.Display.size.y);
        var size = this.baseDotSize * scale;
        var lw = size * 5;
        if (xAlign == 0) {
            tx -= Math.floor(text.length * lw / 2);
        }
        else if (xAlign == 1) {
            tx -= Math.floor(text.length * lw);
        }
        if (yAlign == 0) {
            ty -= Math.floor(size * 3.5);
        }
        for (var i = 0; i < text.length; i++) {
            var c = text[i];
            var li = this.charToIndex[c.charCodeAt(0)];
            if (li >= 0) {
                this.drawDots(li, tx, ty, color, size);
            }
            else if (li == -2) {
                throw "invalid char: " + c;
            }
            tx += lw;
        }
        return;
    };
    TextDrawer.prototype.drawDots = function (li, x, y, color, size) {
        for (var i = 0; i < this.dotPatterns[li].length; i++) {
            var p = this.dotPatterns[li][i];
            Game_1.Game.display.fillRectDirect(x + p.x * size, y + p.y * size, size, size, color);
        }
    };
    TextDrawer.prototype.setSize = function (size) {
        this.baseDotSize = Math.floor((Math.min(size.x, size.y)) / 250 + 1).clamp(1, 20);
    };
    TextDrawer.COUNT = 66;
    TextDrawer.patterns = [
        0x4644AAA4, 0x6F2496E4, 0xF5646949, 0x167871F4, 0x2489F697,
        0xE9669696, 0x79F99668, 0x91967979, 0x1F799976, 0x1171FF17,
        0xF99ED196, 0xEE444E99, 0x53592544, 0xF9F11119, 0x9DDB9999,
        0x79769996, 0x7ED99611, 0x861E9979, 0x994444E7, 0x46699699,
        0x6996FD99, 0xF4469999, 0x2224F248, 0x26244424, 0x64446622,
        0x84284248, 0x40F0F024, 0x0F0044E4, 0x480A4E40, 0x9A459124,
        0x000A5A16, 0x640444F0, 0x80004049, 0x40400004, 0x44444040,
        0x0AA00044, 0x6476E400, 0xFAFA61D9, 0xE44E4EAA, 0x24F42445,
        0xF244E544, 0x00000042
    ];
    return TextDrawer;
}());
exports.TextDrawer = TextDrawer;
var DrawingRect = /** @class */ (function () {
    function DrawingRect(color, width, height, offsetX, offsetY, hasCollision) {
        this.color = color;
        this.width = width;
        this.height = height;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.hasCollision = hasCollision;
        this.currentPosition = new Vector_1.Vector(0, 0);
        this.currentSize = new Vector_1.Vector(0, 0);
    }
    DrawingRect.prototype.updateState = function (drawing) {
        this.currentPosition.set(this.offsetX, this.offsetY);
        this.currentPosition.rotate(drawing.rotation);
        this.currentPosition.add(drawing.position);
        this.currentSize.set(this.width * drawing.scale.x, this.height * drawing.scale.y);
    };
    DrawingRect.prototype.draw = function (drawing) {
        this.updateState(drawing);
        Game_1.Game.display.fillRect(this.currentPosition.x, this.currentPosition.y, this.currentSize.x, this.currentSize.y, this.color);
    };
    DrawingRect.prototype.isOverlapping = function (other) {
        if (!this.hasCollision || !other.hasCollision) {
            return false;
        }
        return Math.abs(this.currentPosition.x - other.currentPosition.x) < (this.currentSize.x + other.currentSize.x) / 2 && Math.abs(this.currentPosition.y - other.currentPosition.y) < (this.currentSize.y + other.currentSize.y) / 2;
    };
    return DrawingRect;
}());
var Drawing = /** @class */ (function () {
    function Drawing() {
        this.position = new Vector_1.Vector(0, 0);
        this.rotation = 0;
        this.scale = new Vector_1.Vector(1, 1);
        this.rects = [];
        this.hasCollision = true;
    }
    Drawing.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    Drawing.prototype.addRect = function (width, height, offsetX, offsetY) {
        if (height === void 0) { height = 0; }
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        this.rects.push(new DrawingRect(this.color, width, height == 0 ? width : height, offsetX, offsetY, this.hasCollision));
        this.lastAdded = new Drawing.RectParam('rect', width, height == 0 ? width : height, offsetX, offsetY);
        return this;
    };
    Drawing.prototype.addSegementedRect = function (width, height, offsetX, offsetY, angle) {
        if (height === void 0) { height = 0; }
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        if (angle === void 0) { angle = 0; }
        this.lastAdded = new Drawing.RectParam('segmentedRect', width, height == 0 ? width : height, offsetX, offsetY, angle);
        var radians = angle * Math.PI / 180;
        if (width > height) {
            radians += Math.PI / 2;
            var twidth = width;
            width = height;
            height = twidth;
        }
        if (width < 0.01) {
            return this;
        }
        var n = Math.floor(height / width);
        var o = -width * (n - 1) / 2;
        var vo = width;
        width *= 1.05;
        for (var i = 0; i < n; i++) {
            this.rects.push(new DrawingRect(this.color, width, width, Math.sin(radians) * o + offsetX, Math.cos(radians) * o + offsetY, this.hasCollision));
            o += vo;
        }
        return this;
    };
    Drawing.prototype.addArc = function (angle, count) {
        if (count === void 0) { count = 1; }
        var offset = new Vector_1.Vector(this.lastAdded.offsetX, this.lastAdded.offsetY);
        var currentAngle = this.lastAdded.angle;
        for (var i = 0; i < count; i++) {
            offset.rotate(angle);
            if (this.lastAdded.type == 'rect') {
                this.addRect(this.lastAdded.width, this.lastAdded.height, offset.x, offset.y);
            }
            else {
                currentAngle -= angle;
                this.addSegementedRect(this.lastAdded.width, this.lastAdded.height, offset.x, offset.y, currentAngle);
            }
        }
        return this;
    };
    Drawing.prototype.mirrorX = function () {
        if (this.lastAdded.type == 'rect') {
            this.addRect(this.lastAdded.width, this.lastAdded.height, -this.lastAdded.offsetX, this.lastAdded.offsetY);
        }
        else {
        }
        return this;
    };
    Drawing.prototype.mirrorY = function () {
        if (this.lastAdded.type == 'rect') {
            this.addRect(this.lastAdded.width, this.lastAdded.height, this.lastAdded.offsetX, -this.lastAdded.offsetY);
        }
        else {
        }
        return this;
    };
    Drawing.prototype.updateState = function () {
        var _this = this;
        this.rects.forEach(function (rect) {
            rect.updateState(_this);
        });
    };
    Drawing.prototype.setPosition = function (v) {
        this.position.set(v);
        return this;
    };
    Drawing.prototype.setRotation = function (r) {
        this.rotation = r;
        return this;
    };
    Drawing.prototype.draw = function () {
        var _this = this;
        this.rects.forEach(function (rect) {
            rect.draw(_this);
        });
    };
    Drawing.prototype.isOverlapping = function (other) {
        this.updateState();
        for (var i = 0; i < this.rects.length; i++) {
            var rect = this.rects[i];
            for (var j = 0; j < other.rects.length; j++) {
                var otherRect = other.rects[j];
                if (rect.isOverlapping(otherRect)) {
                    return true;
                }
            }
        }
        return false;
    };
    Drawing.RectParam = /** @class */ (function () {
        function class_1(type, width, height, offsetX, offsetY, angle) {
            if (angle === void 0) { angle = 0; }
            this.type = type;
            this.width = width;
            this.height = height;
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.angle = angle;
        }
        return class_1;
    }());
    return Drawing;
}());
exports.Drawing = Drawing;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Random = /** @class */ (function () {
    function Random() {
    }
    Random.range = function (low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = 1; }
        return Math.random() * (high - low) + low;
    };
    Random.rangeInt = function (low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = 1; }
        return Math.floor(Random.range(low, high + 1));
    };
    return Random;
}());
exports.Random = Random;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(0);
var Display_1 = __webpack_require__(2);
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.initialize = function () {
        Mouse.position = new Vector_1.Vector(0.5, 0.5);
        Display_1.Display.element.addEventListener('mousedown', Mouse.onMouseDown);
        Display_1.Display.element.addEventListener('mouseup', Mouse.onMouseUp);
        Display_1.Display.element.addEventListener('mousemove', Mouse.onMouseMove);
    };
    Mouse.onMouseUp = function (e) {
        Mouse.isPressed = false;
    };
    Mouse.onMouseDown = function (e) {
        Display_1.Display.element.focus();
        Mouse.isPressed = true;
        Mouse.onMouseMove(e);
    };
    Mouse.onMouseMove = function (e) {
        e.preventDefault();
        //@wasMoving = true
        var rect = e.target.getBoundingClientRect();
        Mouse.position.x = ((e.pageX - rect.left) / Display_1.Display.size.x);
        Mouse.position.y = ((e.pageY - rect.top) / Display_1.Display.size.y);
    };
    return Mouse;
}());
exports.Mouse = Mouse;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Display_1 = __webpack_require__(2);
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.initialize = function () {
        Keyboard.keyDown = [];
        for (var i = 0; i < 255; i++) {
            Keyboard.keyDown[i] = false;
            Display_1.Display.element.onkeydown = function (e) {
                Keyboard.keyDown[e.keyCode] = true;
                if (e.keyCode >= 37 && e.keyCode <= 40) {
                    e.preventDefault();
                }
                if (e.keyCode == 32) {
                    e.preventDefault();
                }
            };
            Display_1.Display.element.onkeyup = function (e) {
                Keyboard.keyDown[e.keyCode] = false;
            };
        }
    };
    Keyboard.LEFT = 37;
    Keyboard.UP = 38;
    Keyboard.RIGHT = 39;
    Keyboard.DOWN = 40;
    Keyboard.SPACE = 32;
    return Keyboard;
}());
exports.Keyboard = Keyboard;
//Keyboard.initialize(); 


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LZString = __webpack_require__(13);
var Leaderboard = /** @class */ (function () {
    function Leaderboard() {
    }
    Leaderboard.init = function () {
        var playerIdStorage = localStorage.getItem(Leaderboard.playerIdKey);
        if (playerIdStorage == null) {
            window.fetch('https://worm-drive.glitch.me/api/nextPlayerId').
                then(function (result) { return result.json(); }).
                then(function (json) {
                Leaderboard.playerId = json.id;
                localStorage.setItem(Leaderboard.playerIdKey, String(Leaderboard.playerId));
            });
        }
        else {
            Leaderboard.playerId = Number(playerIdStorage);
        }
    };
    Leaderboard.get = function (isGettingLast, isGettingBest) {
        if (isGettingLast === void 0) { isGettingLast = false; }
        if (isGettingBest === void 0) { isGettingBest = false; }
        if (Leaderboard.playerId == null) {
            Leaderboard.scores = null;
            return;
        }
        var uri = 'https://worm-drive.glitch.me/api/score';
        if (isGettingLast) {
            uri += "?score=" + Leaderboard.lastScore + "&count=9";
        }
        else if (isGettingBest) {
            uri += "?playerId=" + Leaderboard.playerId;
        }
        window.fetch(uri).
            then(function (result) { return result.json(); }).
            then(function (json) {
            Leaderboard.scores = json;
            if (isGettingLast) {
                Leaderboard.scores.push({ score: Leaderboard.lastScore, playerId: Leaderboard.playerId });
                Leaderboard.scores = Leaderboard.scores.sort(function (a, b) {
                    if (a.score < b.score) {
                        return -1;
                    }
                    else if (a.score > b.score) {
                        return 1;
                    }
                    return 0;
                });
            }
        });
    };
    Leaderboard.set = function (score) {
        Leaderboard.lastScore = score;
        window.fetch("https://worm-drive.glitch.me/api/key?playerId=" + Leaderboard.playerId).
            then(function (result) { return result.json(); }).
            then(function (json) {
            var key = json.key;
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
            var encDataStr = LZString.compressToEncodedURIComponent(JSON.stringify({
                key: key,
                score: {
                    playerId: Leaderboard.playerId,
                    score: score
                }
            }));
            window.fetch('https://worm-drive.glitch.me/api/score', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    data: encDataStr
                })
            });
        });
    };
    Leaderboard.playerIdKey = "worm-drive";
    Leaderboard.lastScore = 0;
    return Leaderboard;
}());
exports.Leaderboard = Leaderboard;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

Number.prototype.clamp = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    if (this < min) {
        return min;
    }
    else if (this > max) {
        return max;
    }
    return this;
};
Number.prototype.loopRange = function (min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    var delta = max - min;
    var t = this;
    t -= min;
    if (t >= 0) {
        return t % delta + min;
    }
    return delta + t % delta + min;
};
Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(0);
exports.Vector = Vector_1.Vector;
var Random_1 = __webpack_require__(7);
exports.Random = Random_1.Random;
var Actor_1 = __webpack_require__(4);
exports.Actor = Actor_1.Actor;
exports.TextActor = Actor_1.TextActor;
var Color_1 = __webpack_require__(1);
exports.Color = Color_1.Color;
var Display_1 = __webpack_require__(2);
exports.Display = Display_1.Display;
var Config_1 = __webpack_require__(5);
exports.Config = Config_1.Config;
var Mouse_1 = __webpack_require__(8);
exports.Mouse = Mouse_1.Mouse;
var ParticleSystem_1 = __webpack_require__(14);
exports.ParticleSystem = ParticleSystem_1.ParticleSystem;
var Keyboard_1 = __webpack_require__(9);
exports.Keyboard = Keyboard_1.Keyboard;
var Drawing_1 = __webpack_require__(6);
exports.Drawing = Drawing_1.Drawing;
var Leaderboard_1 = __webpack_require__(10);
exports.Leaderboard = Leaderboard_1.Leaderboard;
var Game_1 = __webpack_require__(3);
exports.Game = Game_1.Game;
__webpack_require__(11);
/**/ 


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = (function() {

// private property
var f = String.fromCharCode;
var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
var baseReverseDic = {};

function getBaseValue(alphabet, character) {
  if (!baseReverseDic[alphabet]) {
    baseReverseDic[alphabet] = {};
    for (var i=0 ; i<alphabet.length ; i++) {
      baseReverseDic[alphabet][alphabet.charAt(i)] = i;
    }
  }
  return baseReverseDic[alphabet][character];
}

var LZString = {
  compressToBase64 : function (input) {
    if (input == null) return "";
    var res = LZString._compress(input, 6, function(a){return keyStrBase64.charAt(a);});
    switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0 : return res;
    case 1 : return res+"===";
    case 2 : return res+"==";
    case 3 : return res+"=";
    }
  },

  decompressFromBase64 : function (input) {
    if (input == null) return "";
    if (input == "") return null;
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrBase64, input.charAt(index)); });
  },

  compressToUTF16 : function (input) {
    if (input == null) return "";
    return LZString._compress(input, 15, function(a){return f(a+32);}) + " ";
  },

  decompressFromUTF16: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 16384, function(index) { return compressed.charCodeAt(index) - 32; });
  },

  //compress into uint8array (UCS-2 big endian format)
  compressToUint8Array: function (uncompressed) {
    var compressed = LZString.compress(uncompressed);
    var buf=new Uint8Array(compressed.length*2); // 2 bytes per character

    for (var i=0, TotalLen=compressed.length; i<TotalLen; i++) {
      var current_value = compressed.charCodeAt(i);
      buf[i*2] = current_value >>> 8;
      buf[i*2+1] = current_value % 256;
    }
    return buf;
  },

  //decompress from uint8array (UCS-2 big endian format)
  decompressFromUint8Array:function (compressed) {
    if (compressed===null || compressed===undefined){
        return LZString.decompress(compressed);
    } else {
        var buf=new Array(compressed.length/2); // 2 bytes per character
        for (var i=0, TotalLen=buf.length; i<TotalLen; i++) {
          buf[i]=compressed[i*2]*256+compressed[i*2+1];
        }

        var result = [];
        buf.forEach(function (c) {
          result.push(f(c));
        });
        return LZString.decompress(result.join(''));

    }

  },


  //compress into a string that is already URI encoded
  compressToEncodedURIComponent: function (input) {
    if (input == null) return "";
    return LZString._compress(input, 6, function(a){return keyStrUriSafe.charAt(a);});
  },

  //decompress from an output of compressToEncodedURIComponent
  decompressFromEncodedURIComponent:function (input) {
    if (input == null) return "";
    if (input == "") return null;
    input = input.replace(/ /g, "+");
    return LZString._decompress(input.length, 32, function(index) { return getBaseValue(keyStrUriSafe, input.charAt(index)); });
  },

  compress: function (uncompressed) {
    return LZString._compress(uncompressed, 16, function(a){return f(a);});
  },
  _compress: function (uncompressed, bitsPerChar, getCharFromInt) {
    if (uncompressed == null) return "";
    var i, value,
        context_dictionary= {},
        context_dictionaryToCreate= {},
        context_c="",
        context_wc="",
        context_w="",
        context_enlargeIn= 2, // Compensate for the first entry which should not count
        context_dictSize= 3,
        context_numBits= 2,
        context_data=[],
        context_data_val=0,
        context_data_position=0,
        ii;

    for (ii = 0; ii < uncompressed.length; ii += 1) {
      context_c = uncompressed.charAt(ii);
      if (!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)) {
        context_dictionary[context_c] = context_dictSize++;
        context_dictionaryToCreate[context_c] = true;
      }

      context_wc = context_w + context_c;
      if (Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)) {
        context_w = context_wc;
      } else {
        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
          if (context_w.charCodeAt(0)<256) {
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<8 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          } else {
            value = 1;
            for (i=0 ; i<context_numBits ; i++) {
              context_data_val = (context_data_val << 1) | value;
              if (context_data_position ==bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = 0;
            }
            value = context_w.charCodeAt(0);
            for (i=0 ; i<16 ; i++) {
              context_data_val = (context_data_val << 1) | (value&1);
              if (context_data_position == bitsPerChar-1) {
                context_data_position = 0;
                context_data.push(getCharFromInt(context_data_val));
                context_data_val = 0;
              } else {
                context_data_position++;
              }
              value = value >> 1;
            }
          }
          context_enlargeIn--;
          if (context_enlargeIn == 0) {
            context_enlargeIn = Math.pow(2, context_numBits);
            context_numBits++;
          }
          delete context_dictionaryToCreate[context_w];
        } else {
          value = context_dictionary[context_w];
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }


        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        // Add wc to the dictionary.
        context_dictionary[context_wc] = context_dictSize++;
        context_w = String(context_c);
      }
    }

    // Output the code for w.
    if (context_w !== "") {
      if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)) {
        if (context_w.charCodeAt(0)<256) {
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<8 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        } else {
          value = 1;
          for (i=0 ; i<context_numBits ; i++) {
            context_data_val = (context_data_val << 1) | value;
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = 0;
          }
          value = context_w.charCodeAt(0);
          for (i=0 ; i<16 ; i++) {
            context_data_val = (context_data_val << 1) | (value&1);
            if (context_data_position == bitsPerChar-1) {
              context_data_position = 0;
              context_data.push(getCharFromInt(context_data_val));
              context_data_val = 0;
            } else {
              context_data_position++;
            }
            value = value >> 1;
          }
        }
        context_enlargeIn--;
        if (context_enlargeIn == 0) {
          context_enlargeIn = Math.pow(2, context_numBits);
          context_numBits++;
        }
        delete context_dictionaryToCreate[context_w];
      } else {
        value = context_dictionary[context_w];
        for (i=0 ; i<context_numBits ; i++) {
          context_data_val = (context_data_val << 1) | (value&1);
          if (context_data_position == bitsPerChar-1) {
            context_data_position = 0;
            context_data.push(getCharFromInt(context_data_val));
            context_data_val = 0;
          } else {
            context_data_position++;
          }
          value = value >> 1;
        }


      }
      context_enlargeIn--;
      if (context_enlargeIn == 0) {
        context_enlargeIn = Math.pow(2, context_numBits);
        context_numBits++;
      }
    }

    // Mark the end of the stream
    value = 2;
    for (i=0 ; i<context_numBits ; i++) {
      context_data_val = (context_data_val << 1) | (value&1);
      if (context_data_position == bitsPerChar-1) {
        context_data_position = 0;
        context_data.push(getCharFromInt(context_data_val));
        context_data_val = 0;
      } else {
        context_data_position++;
      }
      value = value >> 1;
    }

    // Flush the last char
    while (true) {
      context_data_val = (context_data_val << 1);
      if (context_data_position == bitsPerChar-1) {
        context_data.push(getCharFromInt(context_data_val));
        break;
      }
      else context_data_position++;
    }
    return context_data.join('');
  },

  decompress: function (compressed) {
    if (compressed == null) return "";
    if (compressed == "") return null;
    return LZString._decompress(compressed.length, 32768, function(index) { return compressed.charCodeAt(index); });
  },

  _decompress: function (length, resetValue, getNextValue) {
    var dictionary = [],
        next,
        enlargeIn = 4,
        dictSize = 4,
        numBits = 3,
        entry = "",
        result = [],
        i,
        w,
        bits, resb, maxpower, power,
        c,
        data = {val:getNextValue(0), position:resetValue, index:1};

    for (i = 0; i < 3; i += 1) {
      dictionary[i] = i;
    }

    bits = 0;
    maxpower = Math.pow(2,2);
    power=1;
    while (power!=maxpower) {
      resb = data.val & data.position;
      data.position >>= 1;
      if (data.position == 0) {
        data.position = resetValue;
        data.val = getNextValue(data.index++);
      }
      bits |= (resb>0 ? 1 : 0) * power;
      power <<= 1;
    }

    switch (next = bits) {
      case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
        c = f(bits);
        break;
      case 2:
        return "";
    }
    dictionary[3] = c;
    w = c;
    result.push(c);
    while (true) {
      if (data.index > length) {
        return "";
      }

      bits = 0;
      maxpower = Math.pow(2,numBits);
      power=1;
      while (power!=maxpower) {
        resb = data.val & data.position;
        data.position >>= 1;
        if (data.position == 0) {
          data.position = resetValue;
          data.val = getNextValue(data.index++);
        }
        bits |= (resb>0 ? 1 : 0) * power;
        power <<= 1;
      }

      switch (c = bits) {
        case 0:
          bits = 0;
          maxpower = Math.pow(2,8);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }

          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 1:
          bits = 0;
          maxpower = Math.pow(2,16);
          power=1;
          while (power!=maxpower) {
            resb = data.val & data.position;
            data.position >>= 1;
            if (data.position == 0) {
              data.position = resetValue;
              data.val = getNextValue(data.index++);
            }
            bits |= (resb>0 ? 1 : 0) * power;
            power <<= 1;
          }
          dictionary[dictSize++] = f(bits);
          c = dictSize-1;
          enlargeIn--;
          break;
        case 2:
          return result.join('');
      }

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

      if (dictionary[c]) {
        entry = dictionary[c];
      } else {
        if (c === dictSize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }
      result.push(entry);

      // Add w+entry[0] to the dictionary.
      dictionary[dictSize++] = w + entry.charAt(0);
      enlargeIn--;

      w = entry;

      if (enlargeIn == 0) {
        enlargeIn = Math.pow(2, numBits);
        numBits++;
      }

    }
  }
};
  return LZString;
})();

if (true) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return LZString; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
} else if( typeof module !== 'undefined' && module != null ) {
  module.exports = LZString
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(3);
var Color_1 = __webpack_require__(1);
var Actor_1 = __webpack_require__(4);
var Vector_1 = __webpack_require__(0);
var Random_1 = __webpack_require__(7);
var ParticleSystem = /** @class */ (function () {
    function ParticleSystem() {
        this.count = 1;
        this.position = new Vector_1.Vector(0, 0);
        this.angleWidth = 360;
        this.speed = 0.01;
        this.color = Color_1.Color.white;
        this.size = 0.02;
        this.duration = 30;
        var actor = new ParticleActor();
        actor.particleSystem = this;
    }
    return ParticleSystem;
}());
exports.ParticleSystem = ParticleSystem;
var ParticleActor = /** @class */ (function (_super) {
    __extends(ParticleActor, _super);
    function ParticleActor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParticleActor.prototype.update = function () {
        if (this.particleSystem) {
            // if we are generating particles, spawn them and bail
            this.destroy();
            var s = this.particleSystem;
            if (s.count < 1) {
                return;
            }
            for (var i = 0; i < s.count; i++) {
                var p = new ParticleActor();
                p.position.set(s.position.x, s.position.y);
                p.velocity.addDirection(Random_1.Random.range(-s.angleWidth / 2, s.angleWidth / 2), s.speed * Random_1.Random.range(0.5, 1.5));
                p.color = s.color;
                p.size = s.size;
                p.duration = s.duration;
            }
            return;
        }
        // otherwise just do a draw loop on ourself
        Game_1.Game.display.fillRect(this.position.x, this.position.y, this.size, this.size, this.color);
        if (this.age > this.duration) {
            this.destroy();
        }
    };
    return ParticleActor;
}(Actor_1.Actor));


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// NOTE: this is really not great, should just replace it with some kind of simpler state lookup,
// either functions that resolve to numbers or just strings
// https://stackoverflow.com/questions/46025487/create-extendable-enums-for-use-in-extendable-interfaces
Object.defineProperty(exports, "__esModule", { value: true });
// create an enum from given values
function makeEnum() {
    var vals = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        vals[_i] = arguments[_i];
    }
    var ret = {};
    vals.forEach(function (k) { return ret[k] = k; });
    return ret;
}
// take an existing enum and extend it with more values
function extendEnum(firstEnum) {
    var vals = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        vals[_i - 1] = arguments[_i];
    }
    return Object.assign(makeEnum.apply(void 0, vals), firstEnum);
}
var GameState = makeEnum("title", "game");
exports.GameState = GameState;


/***/ })
/******/ ]);
});