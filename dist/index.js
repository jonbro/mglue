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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
    /** Returns a copy of this vector */
    Vector.prototype.copy = function () {
        return new Vector(this.x, this.y);
    };
    Vector.prototype.onScreen = function () {
        return this.x >= 0 && this.x <= 1 && this.y >= 0 && this.y <= 1;
    };
    Vector.prototype.equal = function (other) {
        return this.x == other.x && this.y == other.y;
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
var Display_1 = __webpack_require__(3);
var Actor_1 = __webpack_require__(6);
var Config_1 = __webpack_require__(4);
var Mouse_1 = __webpack_require__(8);
var Vector_1 = __webpack_require__(0);
var Keyboard_1 = __webpack_require__(9);
var Leaderboard_1 = __webpack_require__(10);
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
var INTERVAL;
var Game = /** @class */ (function () {
    function Game(display) {
        if (display === void 0) { display = new Display_1.Display(); }
        var _this = this;
        this.currentTime = 0;
        this.previousTime = 0;
        this.delta = 0;
        this.score = 0;
        this.leaderboardEnabled = false;
        this.lastScore = -1;
        this.highScore = -1;
        this._ticks = 0;
        this.saveSupported = false;
        /** actor used to display the leaderboard */
        this.leaderboardText = new Actor_1.TextActor("");
        /** helper strings for ordinals */
        this.rankStrings = ['ST', 'ND', 'RD'];
        this.currentState = "title";
        // if there was a game running prior we need to make sure we clean up its animation loop
        // lets us spawn off a bunch of games in a row without timing issues
        window.cancelAnimationFrame(Game.animationFrameIdentifier);
        // clean up any straggling actors
        Actor_1.Actor.clear();
        if (Config_1.Config.saveName != "changeMe") {
            this.saveSupported = true;
        }
        else {
            console.warn("Change Config.saveName to add support for score saving");
        }
        if (this.saveSupported) {
            try {
                if (window.localStorage.getItem(Config_1.Config.saveName)) {
                    this.highScore = Number(window.localStorage.getItem(Config_1.Config.saveName));
                }
            }
            catch (error) {
                this.saveSupported = false;
                console.log(error);
            }
        }
        Game._INTERVAL = 1000 / Config_1.Config.fps;
        INTERVAL = Game._INTERVAL;
        Game.display = display;
        Display_1.Display.element.focus();
        Keyboard_1.Keyboard.initialize();
        Mouse_1.Mouse.initialize();
        this.transitionToTitle();
        Game.animationFrameIdentifier = Game.requestAnimationFrame(function (time) { _this.updateFrame(time); });
    }
    Object.defineProperty(Game, "INTERVAL", {
        //** ms per frame */
        get: function () { return Game._INTERVAL; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "ticks", {
        /** number of frames that has elapsed since the game started */
        get: function () {
            return this._ticks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "gameOver", {
        get: function () { return this.currentState != "game"; },
        enumerable: true,
        configurable: true
    });
    /** Helper function to run the game after the window loads, or if the window is ready, immediately */
    Game.runOnReady = function (fn) {
        if (document.readyState == "complete") {
            fn();
        }
        else {
            window.addEventListener('load', function () {
                fn();
            }, true);
        }
    };
    Game.prototype.endGame = function () {
        // clear the touch down so it doesn't automatically jump past the main screen
        Mouse_1.Mouse.pressedThisFrame = false;
        this.lastScore = this.score;
        if (this.lastScore > 0 && this.lastScore > this.highScore) {
            this.highScore = this.lastScore;
            if (this.saveSupported) {
                try {
                    window.localStorage.setItem(Config_1.Config.saveName, this.highScore.toString());
                }
                catch (_a) {
                    console.log("failed to write local storage");
                }
            }
        }
        this.transitionToTitle();
        this.currentState = "title";
        this.onEndGame();
    };
    Game.prototype.onBeginGame = function () { };
    Game.prototype.onEndGame = function () { };
    Game.prototype.update = function () { };
    Game.prototype.updateTitle = function () {
        if (Keyboard_1.Keyboard.keyDown[Keyboard_1.Keyboard.SPACE] || Mouse_1.Mouse.pressedThisFrame) {
            this.transitionToGame();
        }
        if (this.leaderboardEnabled) {
            this.updateLeaderboard();
        }
    };
    Game.prototype.updateLeaderboard = function () {
        var _this = this;
        var leaderboardType = Math.floor(this.ticks / 180) % 4;
        if (this.ticks % 180 == 0) {
            switch (leaderboardType) {
                case 0:
                    break;
                case 1:
                    Leaderboard_1.Leaderboard.get(true);
                    break;
                case 2:
                    Leaderboard_1.Leaderboard.get(false, true);
                    break;
                case 3:
                    Leaderboard_1.Leaderboard.get();
                    break;
            }
            Leaderboard_1.Leaderboard.get();
        }
        if (Leaderboard_1.Leaderboard.scores == null || leaderboardType == 0) {
            return;
        }
        var count = 0;
        var startPosition = 0.2;
        this.leaderboardText.color = Color_1.Color.white;
        var leaderboardTypes = ['LAST', 'BEST', 'TOP'];
        this.leaderboardText.displayString = leaderboardTypes[leaderboardType - 1];
        this.leaderboardText.setPosition(new Vector_1.Vector(0.5, startPosition));
        this.leaderboardText.update();
        startPosition += 0.035;
        Leaderboard_1.Leaderboard.scores.forEach(function (score) {
            if (Leaderboard_1.Leaderboard.playerId == score.playerId) {
                _this.leaderboardText.color = Color_1.Color.lightgreen;
                _this.leaderboardText.xAlign = 1;
                _this.leaderboardText.setPosition(new Vector_1.Vector(0.2, count * 0.03 + startPosition));
                _this.leaderboardText.displayString = "YOU";
                _this.leaderboardText.update();
            }
            else {
                _this.leaderboardText.color = Color_1.Color.white;
            }
            _this.leaderboardText.xAlign = 1;
            _this.leaderboardText.setPosition(new Vector_1.Vector(0.4, count * 0.03 + startPosition));
            if (score.rank != null) {
                var rs = "" + (score.rank + 1) + ((score.rank < 3) ? _this.rankStrings[score.rank] : 'TH');
                _this.leaderboardText.displayString = rs;
                _this.leaderboardText.update();
            }
            _this.leaderboardText.xAlign = -1;
            _this.leaderboardText.setPosition(new Vector_1.Vector(0.6, count * 0.03 + startPosition));
            _this.leaderboardText.displayString = score.score.toString();
            _this.leaderboardText.update();
            count++;
        });
    };
    Game.prototype.transitionToTitle = function () {
        var ty = (Config_1.Config.title.length == 1) ? .2 : .15;
        new Actor_1.TextActor(Config_1.Config.title).setPosition(new Vector_1.Vector(.5, ty)).setDurationForever().scale = new Vector_1.Vector(2, 2);
        new Actor_1.TextActor('[ SPACE / TAP ] TO START').setPosition(new Vector_1.Vector(.5, .7)).setDurationForever();
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
    Game.prototype.enableLeaderboard = function (leaderboardUrl) {
        if (leaderboardUrl === void 0) { leaderboardUrl = ""; }
        Leaderboard_1.Leaderboard.init(leaderboardUrl);
        this.leaderboardEnabled = true;
    };
    Game.prototype.transitionToGame = function () {
        this.currentState = "game";
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
        this.delta += (this.currentTime - this.previousTime) / Game._INTERVAL;
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
        Mouse_1.Mouse.Update();
        this._ticks++;
        this.update();
        Actor_1.Actor.update();
        if (this.currentState == "title") {
            this.updateTitle();
        }
        Game.display.drawText("SCORE: " + this.score, 1, 0, 1);
        // if the player has pressed c, then kick off capturing
        if (Keyboard_1.Keyboard.keyDown[67]) {
            Game.display.beginCapture(Config_1.Config.captureConfig.duration, Config_1.Config.captureConfig.interval, Config_1.Config.captureConfig.scale);
        }
        if (Game.display.isCapturing) {
            if (Game.display.capture()) {
                Game.display.endCapture();
            }
        }
        this.postUpdateFrame();
    };
    Game.prototype.postUpdateFrame = function () {
        var _this = this;
        this.delta = 0;
        Game.animationFrameIdentifier = Game.requestAnimationFrame(function (time) { _this.updateFrame(time); });
    };
    Game.requestAnimationFrame = function (callback) {
        return requestAnimationFrameWrapper(callback);
    };
    return Game;
}());
exports.Game = Game;
var requestAnimationFrameWrapper = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
        return window.setTimeout(callback, INTERVAL / 2);
    };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Config_1 = __webpack_require__(4);
var Drawing_1 = __webpack_require__(7);
var Game_1 = __webpack_require__(2);
// gif encoding stuff. Its raw js, so we are just doing it raw
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(16);
__webpack_require__(17);
var Display = /** @class */ (function () {
    function Display() {
        this.textDrawer = new Drawing_1.TextDrawer();
        this.captureIndex = 0;
        this.captureDuration = 0;
        this.captureInterval = 0.016;
        this._isCapturing = false;
        this.buildDisplay();
        this.setSize();
    }
    Object.defineProperty(Display.prototype, "isCapturing", {
        get: function () { return this._isCapturing; },
        enumerable: true,
        configurable: true
    });
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
        this.setSize();
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
    /**
     * start capturing the game
     * @param duration length of the capture in seconds
     * @param interval frame timing in seconds (0.01667 for 60fps etc)
     * @param scale the scale of the capture compared to the render size
     */
    Display.prototype.beginCapture = function (duration, interval, scale) {
        if (duration === void 0) { duration = 1; }
        if (interval === void 0) { interval = 0.016; }
        if (scale === void 0) { scale = 0.65; }
        // generate a series of canvases that will hold the captured images
        this.captureDuration = Math.floor(duration / interval);
        this.captureInterval = Math.floor(interval * 1000); // interval in ms
        var captureTick = Math.floor(Game_1.Game.INTERVAL * interval); // number of game frames to step between captures
        this.captureContexts = [];
        this.captureIndex = 0;
        for (var i = 0; i < this.captureDuration; i++) {
            var canvas = document.createElement('canvas');
            canvas.width = Display.size.x * scale;
            canvas.height = Display.size.y * scale;
            var context = canvas.getContext("2d");
            context.scale(scale, scale);
            this.captureContexts.push(context);
        }
        this._isCapturing = true;
    };
    /** internal method called per frame while capturing is true. Returns true if capture should end. */
    Display.prototype.capture = function () {
        // copy the current canvas into the capture context
        this.captureContexts[this.captureIndex].drawImage(Display.element, 0, 0);
        this.captureIndex++;
        return this.captureIndex >= this.captureDuration;
    };
    /** call to finalize capture and return the gif */
    Display.prototype.endCapture = function () {
        this._isCapturing = false;
        // encode the gif and return it to the user
        var encoder = new GIFEncoder();
        encoder.setRepeat(0);
        encoder.setDelay(this.captureInterval);
        encoder.start();
        for (var i = 0; i < this.captureDuration; i++) {
            if (!encoder.addFrame(this.captureContexts[i])) {
                console.log("adding frame failed");
            }
        }
        encoder.finish();
        var binaryGif = encoder.stream().getData();
        return window.location.href = 'data:image/gif;base64,' + (encode64(binaryGif));
    };
    Display.element = null;
    Display.size = new Vector_1.Vector(0, 0);
    return Display;
}());
exports.Display = Display;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(1);
var CaptureConfig = /** @class */ (function () {
    function CaptureConfig(scale, duration, interval) {
        if (scale === void 0) { scale = 0.5; }
        if (duration === void 0) { duration = 3; }
        if (interval === void 0) { interval = 0.05; }
        this.scale = scale;
        this.duration = duration;
        this.interval = interval;
    }
    return CaptureConfig;
}());
exports.CaptureConfig = CaptureConfig;
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.fps = 60;
    Config.backgroundColor = Color_1.Color.black;
    Config.soundTempo = 120;
    Config.soundVolume = 0.02;
    Config.debugMode = true;
    Config.title = "GAME TITLE";
    Config.saveName = "changeMe";
    Config.isDebuggingMode = false;
    Config.captureConfig = new CaptureConfig();
    return Config;
}());
exports.Config = Config;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Random = /** @class */ (function () {
    function Random(seed) {
        if (seed === void 0) { seed = -0x7fffffff; }
        this.seed(seed);
    }
    Random.prototype.seed = function (seedValue) {
        if (seedValue === void 0) { seedValue = -0x7fffffff; }
        if (seedValue == -0x7fffffff) {
            seedValue = Math.floor(Math.random() * 0x7fffffff);
        }
        this.sv = seedValue;
        this.x = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30));
        this.y = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30)) + 1;
        this.z = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30)) + 2;
        this.w = seedValue = 1812433253 * (seedValue ^ (seedValue >> 30)) + 3;
        return this;
    };
    Random.range = function (low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = 1; }
        return this.instance.range(low, high);
    };
    Random.rangeInt = function (low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = 1; }
        return this.instance.rangeInt(low, high);
    };
    Random.value = function () {
        return this.instance.value();
    };
    Random.prototype.range = function (low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = 1; }
        return this.value() * (high - low) + low;
    };
    Random.prototype.rangeInt = function (low, high) {
        if (low === void 0) { low = 0; }
        if (high === void 0) { high = 1; }
        return Math.floor(this.range(low, high + 1));
    };
    Random.prototype.value = function () {
        var t = this.x ^ (this.x << 11);
        this.x = this.y;
        this.y = this.z;
        this.z = this.w;
        this.w = (this.w ^ (this.w >> 19)) ^ (t ^ (t >> 8));
        return this.w / 0x7fffffff;
    };
    Random.instance = new Random();
    return Random;
}());
exports.Random = Random;


/***/ }),
/* 6 */
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
var Game_1 = __webpack_require__(2);
var Drawing_1 = __webpack_require__(7);
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
        /** Current position of the actor. Used for both drawing and overlap checks. */
        this.position = new Vector_1.Vector(0, 0);
        /** How fast the actor is moving. This value is added to the actors position every update loop. */
        this.velocity = new Vector_1.Vector(0, 0);
        /** Rotation of the actor in degrees. */
        this.rotation = 0;
        this.scale = new Vector_1.Vector(1, 1);
        /** Default drawing for the actor. This drawing is automatically added to the game during update. */
        this.drawing = new Drawing_1.Drawing();
        this.isDestroying = false;
        /** Number of frames the actor has been alive for. */
        this.age = 0;
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
            this.initialize();
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
    /** Override this function, it will be called every frame while the actor is in the game. */
    Actor.prototype.update = function () {
    };
    /**
     * Adds a vector value to all actors within a class, or a group of classes. Can be used to simulate camera type effects.
     *
     * @param targetClass an array of actor classes, or a single actor class
     */
    Actor.scroll = function (targetClass, offset) {
        var t = targetClass;
        t.forEach(function (c) {
            Actor.getGroup(c).forEach(function (a) {
                a.position.add(offset);
            });
        });
    };
    Actor.prototype.setPosition = function (p) {
        this.position.set(p.x, p.y);
        this.updateDrawing();
        return this;
    };
    Actor.prototype.setVelocity = function (velocity) {
        this.velocity.set(velocity.x, velocity.y);
        return this;
    };
    Actor.prototype.lateUpdate = function () {
        this.position.add(this.velocity);
        this.updateDrawing();
        this.drawing.draw();
        this.age++;
    };
    Actor.prototype.updateDrawing = function () {
        this.drawing.rotation = this.rotation;
        this.drawing.position.set(this.position.x, this.position.y);
        this.drawing.scale.set(this.scale.x, this.scale.y);
    };
    /**
     * Collision handling method.
     *
     * Returns true if an overlap is found.
     * Uses the .drawing property on the actor to check for overlaps between quads.
     * Call during the Actors update function.
     * ```
     * update()
     * {
     *      this.checkOverlap(Enemy, (e : Enemy)=>{
     *           console.log("overlapping enemy!");
     *           e.kill();
     *      });
     * }
     * ```
     * @param targetClass The class of actors to check this actor against.
     * @param handler callback function if an overlap is found.
     */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(2);
var Vector_1 = __webpack_require__(0);
var Display_1 = __webpack_require__(3);
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
        this.currentPosition.set(this.offsetX * drawing.scale.x, this.offsetY * drawing.scale.y);
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
exports.DrawingRect = DrawingRect;
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
    /**
     * Internal class for tracking the last type of rectangle which was added to a drawing
     */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(0);
var Display_1 = __webpack_require__(3);
var Mouse = /** @class */ (function () {
    function Mouse() {
    }
    Mouse.initialize = function () {
        Mouse.position = new Vector_1.Vector(0.5, 0.5);
        Display_1.Display.element.addEventListener('mousedown', Mouse.onMouseDown);
        Display_1.Display.element.addEventListener('mouseup', Mouse.onMouseUp);
        Display_1.Display.element.addEventListener('mousemove', Mouse.onMouseMove);
        Display_1.Display.element.addEventListener('touchstart', this.onTouchStart);
        Display_1.Display.element.addEventListener('touchmove', this.onTouchMove);
        Display_1.Display.element.addEventListener('touchend', this.onTouchEnd);
    };
    Mouse.onMouseUp = function (e) {
        Mouse.isPressed = false;
    };
    Mouse.onMouseDown = function (e) {
        Display_1.Display.element.focus();
        console.log("focusing?", document.activeElement, Display_1.Display.element);
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
    Mouse.onTouchMove = function (e) {
        e.preventDefault();
        var rect = e.target.getBoundingClientRect();
        var touch = e.touches[0];
        Mouse.position.x = ((touch.pageX - rect.left) / Display_1.Display.size.x).clamp(0, 1);
        Mouse.position.y = ((touch.pageY - rect.top) / Display_1.Display.size.y).clamp(0, 1);
    };
    Mouse.onTouchStart = function (e) {
        Mouse.isPressed = true;
        Mouse.onTouchMove(e);
    };
    Mouse.onTouchEnd = function (e) {
        Mouse.isPressed = false;
    };
    Mouse.Update = function () {
        Mouse.pressedThisFrame = Mouse.isPressed && !Mouse.wasPressed;
        Mouse.wasPressed = Mouse.isPressed;
    };
    Mouse.pressedThisFrame = false;
    Mouse.wasPressed = false;
    return Mouse;
}());
exports.Mouse = Mouse;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Display_1 = __webpack_require__(3);
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.initialize = function () {
        Keyboard.keyDown = [];
        for (var i = 0; i < 255; i++) {
            Keyboard.keyDown[i] = false;
            Display_1.Display.element.onkeydown = function (e) {
                Keyboard.keyDown[e.keyCode] = true;
                if (e.keyCode == 67) {
                    e.preventDefault();
                }
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
var LZString = __webpack_require__(18);
var Leaderboard = /** @class */ (function () {
    function Leaderboard() {
    }
    Leaderboard.init = function (url) {
        Leaderboard.urlRoot = url;
        var playerIdStorage = localStorage.getItem(Leaderboard.playerIdKey);
        if (playerIdStorage == null) {
            window.fetch(Leaderboard.urlRoot + '/api/nextPlayerId').
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
        var uri = Leaderboard.urlRoot + '/api/score';
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
        window.fetch(Leaderboard.urlRoot + "/api/key?playerId=" + Leaderboard.playerId).
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
            window.fetch(Leaderboard.urlRoot + '/api/score', {
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
    Leaderboard.urlRoot = "";
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

// NOTE!!! THIS IS A MODIFIED VERSION OF JSFX... YOU CAN'T JUST DROP IN REPLACE IT.

(function(root, factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory();
	} else {
		root.jsfx = factory();
	}
}(this, function() {
	"use strict";
	var jsfx = {};
    var audio = __webpack_require__(21);
	(function () {
		this.Parameters = []; // will be constructed in the end

		this.Generators = {
			square : audio.generators.square,
			saw    : audio.generators.saw,
			triangle : audio.generators.triangle,
			sine   : audio.generators.sine,
			noise  : audio.generators.noise,
			synth  : audio.generators.synth
		};

		this.getGeneratorNames = function(){
			var names = [];
			for(var e in this.Generators)
				names.push(e);
			return names;
		}

		var nameToParam = function(name){
			return name.replace(/ /g, "");
		}

		this.getParameters = function () {
			var params = [];

			var grp = 0;

			// add param
			var ap = function (name, min, max, def, step) {
				if (step === undefined)
					step = (max - min) / 1000;
				var param = { name: name, id: nameToParam(name),
							min: min, max: max, step:step, def: def,
							type: "range", group: grp};
				params.push(param);
			};

			// add option
			var ao = function(name, options, def){
				var param = {name: name, id: nameToParam(name),
							options: options, def: def,
							type: "option", group: grp };
				params.push(param);
			}

			var gens = this.getGeneratorNames();
			ao("Generator", gens, gens[0]);
			ap("Super Sampling Quality", 0, 16, 0, 1);
			ap("Master Volume",  0, 1, 0.4);
			grp++;

			ap("Attack Time",    0, 1, 0.1); // seconds
			ap("Sustain Time",   0, 2, 0.3); // seconds
			ap("Sustain Punch",  0, 3, 2);
			ap("Decay Time",     0, 2, 1); // seconds
			grp++;

			ap("Min Frequency",   20, 2400, 0, 1);
			ap("Start Frequency", 20, 2400, 440, 1);
			ap("Max Frequency",   20, 2400, 2000, 1);
			ap("Slide",           -1, 1, 0);
			ap("Delta Slide",     -1, 1, 0);

			grp++;
			ap("Vibrato Depth",     0, 1, 0);
			ap("Vibrato Frequency", 0.01, 48, 8);
			ap("Vibrato Depth Slide",   -0.3, 1, 0);
			ap("Vibrato Frequency Slide", -1, 1, 0);

			grp++;
			ap("Change Amount", -1, 1, 0);
			ap("Change Speed",  0, 1, 0.1);

			grp++;
			ap("Square Duty", 0, 0.5, 0);
			ap("Square Duty Sweep", -1, 1, 0);

			grp++;
			ap("Repeat Speed", 0, 0.8, 0);

			grp++;
			ap("Phaser Offset", -1, 1, 0);
			ap("Phaser Sweep", -1, 1, 0);

			grp++;
			ap("LP Filter Cutoff", 0, 1, 1);
			ap("LP Filter Cutoff Sweep", -1, 1, 0);
			ap("LP Filter Resonance",    0, 1, 0);
			ap("HP Filter Cutoff",       0, 1, 0);
			ap("HP Filter Cutoff Sweep", -1, 1, 0);

			return params;
		};


		/**
		 * Input params object has the same parameters as described above
		 * except all the spaces have been removed
		 *
		 * This returns an array of float values of the generated audio.
		 *
		 * To make it into a wave use:
		 *    data = jsfx.generate(params)
		 *    audio.make(data)
		 */
		this.generate = function(params){
			// useful consts/functions
			var TAU = 2 * Math.PI,
				sin = Math.sin,
				cos = Math.cos,
				pow = Math.pow,
				abs = Math.abs;
			var SampleRate = audio.SampleRate;

			// super sampling
			var super_sampling_quality = params.SuperSamplingQuality | 0;
			if(super_sampling_quality < 1) super_sampling_quality = 1;
			SampleRate = SampleRate * super_sampling_quality;

			// enveloping initialization
			var _ss = 1.0 + params.SustainPunch;
			var envelopes = [ {from: 0.0, to: 1.0, time: params.AttackTime},
							{from: _ss, to: 1.0, time: params.SustainTime},
							{from: 1.0, to: 0.0, time: params.DecayTime}];
			var envelopes_len = envelopes.length;

			// envelope sample calculation
			for(var i = 0; i < envelopes_len; i++){
				envelopes[i].samples = 1 + ((envelopes[i].time * SampleRate) | 0);
			}
			// envelope loop variables
			var envelope = undefined;
			var envelope_cur = 0.0;
			var envelope_idx = -1;
			var envelope_increment = 0.0;
			var envelope_last = -1;

			// count total samples
			var totalSamples = 0;
			for(var i = 0; i < envelopes_len; i++){
				totalSamples += envelopes[i].samples;
			}

			// fix totalSample limit
			if( totalSamples < SampleRate / 2){
				totalSamples = SampleRate / 2;
			}

			var outSamples = (totalSamples / super_sampling_quality)|0;

			// out data samples
			var out = new Array(outSamples);
			var sample = 0;
			var sample_accumulator = 0;

			// main generator
			var generator = jsfx.Generators[params.Generator];
			if (generator === undefined)
				generator = this.Generators.square;
			var generator_A = 0;
			var generator_B = 0;

			// square generator
			generator_A = params.SquareDuty;
			var square_slide = params.SquareDutySweep / SampleRate;

			// phase calculation
			var phase = 0;
			var phase_speed = params.StartFrequency * TAU / SampleRate;

			// phase slide calculation
			var phase_slide = 1.0 + pow(params.Slide, 3.0) * 64.0 / SampleRate;
			var phase_delta_slide = pow(params.DeltaSlide, 3.0) / (SampleRate * 1000);
			if (super_sampling_quality !== undefined)
				phase_delta_slide /= super_sampling_quality; // correction

			// frequency limiter
			if(params.MinFrequency > params.StartFrequency)
				params.MinFrequency = params.StartFrequency;

			if(params.MaxFrequency < params.StartFrequency)
				params.MaxFrequency = params.StartFrequency;

			var phase_min_speed = params.MinFrequency * TAU / SampleRate;
			var phase_max_speed = params.MaxFrequency * TAU / SampleRate;

			// frequency vibrato
			var vibrato_phase = 0;
			var vibrato_phase_speed = params.VibratoFrequency * TAU / SampleRate;
			var vibrato_amplitude = params.VibratoDepth;

			// frequency vibrato slide
			var vibrato_phase_slide = 1.0 + pow(params.VibratoFrequencySlide, 3.0) * 3.0 / SampleRate;
			var vibrato_amplitude_slide = params.VibratoDepthSlide / SampleRate;

			// arpeggiator
			var arpeggiator_time = 0;
			var arpeggiator_limit = params.ChangeSpeed * SampleRate;
			var arpeggiator_mod   = pow(params.ChangeAmount, 2);
			if (params.ChangeAmount > 0)
				arpeggiator_mod = 1 + arpeggiator_mod * 10;
			else
				arpeggiator_mod = 1 - arpeggiator_mod * 0.9;

			// phaser
			var phaser_max = 1024;
			var phaser_mask = 1023;
			var phaser_buffer = new Array(phaser_max);
			for(var _i = 0; _i < phaser_max; _i++)
				phaser_buffer[_i] = 0;
			var phaser_pos = 0;
			var phaser_offset = pow(params.PhaserOffset, 2.0) * (phaser_max - 4);
			var phaser_offset_slide = pow(params.PhaserSweep, 3.0) * 4000 / SampleRate;
			var phaser_enabled = (abs(phaser_offset_slide) > 0.00001) ||
								(abs(phaser_offset) > 0.00001);

			// lowpass filter
			var filters_enabled = (params.HPFilterCutoff > 0.001) || (params.LPFilterCutoff < 0.999);

			var lowpass_pos = 0;
			var lowpass_pos_slide = 0;
			var lowpass_cutoff = pow(params.LPFilterCutoff, 3.0) / 10;
			var lowpass_cutoff_slide = 1.0 + params.HPFilterCutoffSweep / 10000;
			var lowpass_damping = 5.0 / (1.0 + pow(params.LPFilterResonance, 2) * 20 ) *
										(0.01 + params.LPFilterCutoff);
			if ( lowpass_damping > 0.8)
				lowpass_damping = 0.8;
			lowpass_damping = 1.0 - lowpass_damping;
			var lowpass_enabled = params.LPFilterCutoff < 0.999;

			// highpass filter
			var highpass_accumulator = 0;
			var highpass_cutoff = pow(params.HPFilterCutoff, 2.0) / 10;
			var highpass_cutoff_slide = 1.0 + params.HPFilterCutoffSweep / 10000;

			// repeat
			var repeat_time  = 0;
			var repeat_limit = totalSamples;
			if (params.RepeatSpeed > 0){
				repeat_limit = pow(1 - params.RepeatSpeed, 2.0) * SampleRate + 32;
			}

			// master volume controller
			var master_volume = params.MasterVolume;

			var k = 0;
			for(var i = 0; i < totalSamples; i++){
				// main generator
				sample = generator(phase, generator_A, generator_B);

				// square generator
				generator_A += square_slide;
				if(generator_A < 0.0){
					generator_A = 0.0;
				} else if (generator_A > 0.5){
					generator_A = 0.5;
				}

				if( repeat_time > repeat_limit ){
					// phase reset
					phase = 0;
					phase_speed = params.StartFrequency * TAU / SampleRate;
					// phase slide reset
					phase_slide = 1.0 + pow(params.Slide, 3.0) * 3.0 / SampleRate;
					phase_delta_slide = pow(params.DeltaSlide, 3.0) / (SampleRate * 1000);
					if (super_sampling_quality !== undefined)
						phase_delta_slide /= super_sampling_quality; // correction
					// arpeggiator reset
					arpeggiator_time = 0;
					arpeggiator_limit = params.ChangeSpeed * SampleRate;
					arpeggiator_mod   = 1 + (params.ChangeAmount | 0) / 12.0;
					// repeat reset
					repeat_time = 0;
				}
				repeat_time += 1;

				// phase calculation
				phase += phase_speed;

				// phase slide calculation
				phase_slide += phase_delta_slide;
				phase_speed *= phase_slide;

				// arpeggiator
				if ( arpeggiator_time > arpeggiator_limit ){
					phase_speed *= arpeggiator_mod;
					arpeggiator_limit = totalSamples;
				}
				arpeggiator_time += 1;

				// frequency limiter
				if (phase_speed > phase_max_speed){
					phase_speed = phase_max_speed;
				} else if(phase_speed < phase_min_speed){
					phase_speed = phase_min_speed;
				}

				// frequency vibrato
				vibrato_phase += vibrato_phase_speed;
				var _vibrato_phase_mod = phase_speed * sin(vibrato_phase) * vibrato_amplitude;
				phase += _vibrato_phase_mod;

				// frequency vibrato slide
				vibrato_phase_speed *= vibrato_phase_slide;
				if(vibrato_amplitude_slide){
					vibrato_amplitude += vibrato_amplitude_slide;
					if(vibrato_amplitude < 0){
						vibrato_amplitude = 0;
						vibrato_amplitude_slide = 0;
					} else if (vibrato_amplitude > 1){
						vibrato_amplitude = 1;
						vibrato_amplitude_slide = 0;
					}
				}

				// filters
				if( filters_enabled ){

					if( abs(highpass_cutoff) > 0.001){
						highpass_cutoff *= highpass_cutoff_slide;
						if(highpass_cutoff < 0.00001){
							highpass_cutoff = 0.00001;
						} else if(highpass_cutoff > 0.1){
							highpass_cutoff = 0.1;
						}
					}

					var _lowpass_pos_old = lowpass_pos;
					lowpass_cutoff *= lowpass_cutoff_slide;
					if(lowpass_cutoff < 0.0){
						lowpass_cutoff = 0.0;
					} else if ( lowpass_cutoff > 0.1 ){
						lowpass_cutoff = 0.1;
					}
					if(lowpass_enabled){
						lowpass_pos_slide += (sample - lowpass_pos) * lowpass_cutoff;
						lowpass_pos_slide *= lowpass_damping;
					} else {
						lowpass_pos = sample;
						lowpass_pos_slide = 0;
					}
					lowpass_pos += lowpass_pos_slide;

					highpass_accumulator += lowpass_pos - _lowpass_pos_old;
					highpass_accumulator *= 1.0 - highpass_cutoff;
					sample = highpass_accumulator;
				}

				// phaser
				if (phaser_enabled) {
					phaser_offset += phaser_offset_slide;
					if( phaser_offset < 0){
						phaser_offset = -phaser_offset;
						phaser_offset_slide = -phaser_offset_slide;
					}
					if( phaser_offset > phaser_mask){
						phaser_offset = phaser_mask;
						phaser_offset_slide = 0;
					}

					phaser_buffer[phaser_pos] = sample;
					// phaser sample modification
					var _p = (phaser_pos - (phaser_offset|0) + phaser_max) & phaser_mask;
					sample += phaser_buffer[_p];
					phaser_pos = (phaser_pos + 1) & phaser_mask;
				}

				// envelope processing
				if( i > envelope_last ){
					envelope_idx += 1;
					if(envelope_idx < envelopes_len) // fault protection
						envelope = envelopes[envelope_idx];
					else // the trailing envelope is silence
						envelope = {from: 0, to: 0, samples: totalSamples};
					envelope_cur = envelope.from;
					envelope_increment = (envelope.to - envelope.from) / (envelope.samples + 1);
					envelope_last += envelope.samples;
				}
				sample *= envelope_cur;
				envelope_cur += envelope_increment;

				// master volume controller
				sample *= master_volume;

				// prepare for next sample
				if(super_sampling_quality > 1){
					sample_accumulator += sample;
					if( (i + 1) % super_sampling_quality === 0){
						out[k] = sample_accumulator / super_sampling_quality;
						k += 1;
						sample_accumulator = 0;
					}
				} else {
					out[i] = sample;
				}
			}

			// return out;

			// add padding 10ms
			var len = (SampleRate / 100)|0;
			var padding = new Array(len);
			for(var i = 0; i < len; i++)
				padding[i] = 0;
			return padding.concat(out).concat(padding);
		}

		this.Parameters = this.getParameters();

	}).apply(jsfx);
	return jsfx;
}));

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector_1 = __webpack_require__(0);
exports.Vector = Vector_1.Vector;
var Random_1 = __webpack_require__(5);
exports.Random = Random_1.Random;
var Actor_1 = __webpack_require__(6);
exports.Actor = Actor_1.Actor;
exports.TextActor = Actor_1.TextActor;
var Color_1 = __webpack_require__(1);
exports.Color = Color_1.Color;
var Display_1 = __webpack_require__(3);
exports.Display = Display_1.Display;
var Config_1 = __webpack_require__(4);
exports.Config = Config_1.Config;
exports.CaptureConfig = Config_1.CaptureConfig;
var Mouse_1 = __webpack_require__(8);
exports.Mouse = Mouse_1.Mouse;
var ParticleSystem_1 = __webpack_require__(19);
exports.ParticleSystem = ParticleSystem_1.ParticleSystem;
var Keyboard_1 = __webpack_require__(9);
exports.Keyboard = Keyboard_1.Keyboard;
var Drawing_1 = __webpack_require__(7);
exports.Drawing = Drawing_1.Drawing;
exports.TextDrawer = Drawing_1.TextDrawer;
var Leaderboard_1 = __webpack_require__(10);
exports.Leaderboard = Leaderboard_1.Leaderboard;
var Game_1 = __webpack_require__(2);
exports.Game = Game_1.Game;
var Sound_1 = __webpack_require__(20);
exports.Sound = Sound_1.Sound;
__webpack_require__(11);
/**/ 


/***/ }),
/* 14 */
/***/ (function(module, exports) {

/**
 * This class lets you encode animated GIF files
 * Base class :  http://www.java2s.com/Code/Java/2D-Graphics-GUI/AnimatedGifEncoder.htm
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 */

GIFEncoder = function() {

	for (var i = 0, chr = {}; i < 256; i++)
		chr[i] = String.fromCharCode(i);

	function ByteArray() {
		this.bin = [];
	}

	ByteArray.prototype.getData = function() {
		for (var v = '', l = this.bin.length, i = 0; i < l; i++)
			v += chr[this.bin[i]];
		return v;
	};

	ByteArray.prototype.writeByte = function(val) {
		this.bin.push(val);
	};

	ByteArray.prototype.writeUTFBytes = function(string) {
		for (var l = string.length, i = 0; i < l; i++)
			this.writeByte(string.charCodeAt(i));
	};

	ByteArray.prototype.writeBytes = function(array, offset, length) {
		for (var l = length || array.length, i = offset || 0; i < l; i++)
			this.writeByte(array[i]);
	};

	var exports = {};
	var width; // image size
	var height;
	var transparent = null; // transparent color if given
	var transIndex; // transparent index in color table
	var repeat = -1; // no repeat
	var delay = 0; // frame delay (hundredths)
	var started = false; // ready to output frames
	var out;
	var image; // current frame
	var pixels; // BGR byte array from frame
	var indexedPixels; // converted frame indexed to palette
	var colorDepth; // number of bit planes
	var colorTab; // RGB palette
	var usedEntry = []; // active palette entries
	var palSize = 7; // color table size (bits-1)
	var dispose = -1; // disposal code (-1 = use default)
	var closeStream = false; // close stream when finished
	var firstFrame = true;
	var sizeSet = false; // if false, get size from first frame
	var sample = 10; // default sample interval for quantizer
	var comment = "Generated by jsgif (https://github.com/antimatter15/jsgif/)"; // default comment for generated gif

	/**
	 * Sets the delay time between each frame, or changes it for subsequent frames
	 * (applies to last frame added)
	 * int delay time in milliseconds
	 * @param ms
	 */

	var setDelay = exports.setDelay = function setDelay(ms) {
		delay = Math.round(ms / 10);
	};

	/**
	 * Sets the GIF frame disposal code for the last added frame and any
	 *
	 * subsequent frames. Default is 0 if no transparent color has been set,
	 * otherwise 2.
	 * @param code
	 * int disposal code.
	 */

	var setDispose = exports.setDispose = function setDispose(code) {
		if (code >= 0) dispose = code;
	};

	/**
	 * Sets the number of times the set of GIF frames should be played. Default is
	 * 1; 0 means play indefinitely. Must be invoked before the first image is
	 * added.
	 *
	 * @param iter
	 * int number of iterations.
	 * @return
	 */

	var setRepeat = exports.setRepeat = function setRepeat(iter) {
		if (iter >= 0) repeat = iter;
	};

	/**
	 * Sets the transparent color for the last added frame and any subsequent
	 * frames. Since all colors are subject to modification in the quantization
	 * process, the color in the final palette for each frame closest to the given
	 * color becomes the transparent color for that frame. May be set to null to
	 * indicate no transparent color.
	 * @param
	 * Color to be treated as transparent on display.
	 */

	var setTransparent = exports.setTransparent = function setTransparent(c) {
		transparent = c;
	};


	/**
	 * Sets the comment for the block comment
	 * @param
	 * string to be insterted as comment
	 */

	var setComment = exports.setComment = function setComment(c) {
		comment = c;
	};



	/**
	 * The addFrame method takes an incoming BitmapData object to create each frames
	 * @param
	 * BitmapData object to be treated as a GIF's frame
	 */

	var addFrame = exports.addFrame = function addFrame(im, is_imageData) {

		if ((im === null) || !started || out === null) {
			throw new Error("Please call start method before calling addFrame");
		}

		var ok = true;

		try {
			if (!is_imageData) {
				image = im.getImageData(0, 0, im.canvas.width, im.canvas.height).data;
				if (!sizeSet) setSize(im.canvas.width, im.canvas.height);
			} else {
				if(im instanceof ImageData) {
					image = im.data;
					if(!sizeset || width!=im.width || height!=im.height) {
						setSize(im.width,im.height);
					} else {
						
					}
				} else if(im instanceof Uint8ClampedArray) {
					if(im.length==(width*height*4)) {
						image=im;
					} else {
						console.log("Please set the correct size: ImageData length mismatch");
						ok=false;
					}
				} else {
					console.log("Please provide correct input");
					ok=false;
				}
			}
			getImagePixels(); // convert to correct format if necessary
			analyzePixels(); // build color table & map pixels

			if (firstFrame) {
				writeLSD(); // logical screen descriptior
				writePalette(); // global color table
				if (repeat >= 0) {
					// use NS app extension to indicate reps
					writeNetscapeExt();
				}
			}

			writeGraphicCtrlExt(); // write graphic control extension
			if (comment !== '') {
				writeCommentExt(); // write comment extension
			}
			writeImageDesc(); // image descriptor
			if (!firstFrame) writePalette(); // local color table
			writePixels(); // encode and write pixel data
			firstFrame = false;
		} catch (e) {
			console.log(e);
			ok = false;
		}

		return ok;
	};
	
	/**
	* @description: Downloads the encoded gif with the given name
	* No need of any conversion from the stream data (out) to base64
	* Solves the issue of large file sizes when there are more frames
	* and does not involve in creation of any temporary data in the process
	* so no wastage of memory, and speeds up the process of downloading
	* to just calling this function.
	* @parameter {String} filename filename used for downloading the gif
	*/
	
	var download = exports.download = function download(filename) {
		if(out===null || closeStream==false) {
			console.log("Please call start method and add frames and call finish method before calling download"); 
		} else {
			filename= filename !== undefined ? ( filename.endsWith(".gif")? filename: filename+".gif" ): "download.gif";
			var templink = document.createElement("a");
			templink.download=filename;
			templink.href= URL.createObjectURL(new Blob([new Uint8Array(out.bin)], {type : "image/gif" } ));
			templink.click();
		}
	}

	/**
	 * Adds final trailer to the GIF stream, if you don't call the finish method
	 * the GIF stream will not be valid.
	 */

	var finish = exports.finish = function finish() {

		if (!started) return false;

		var ok = true;
		started = false;

		try {
			out.writeByte(0x3b); // gif trailer
			closeStream=true;
		} catch (e) {
			ok = false;
		}

		return ok;
	};

	/**
	 * Resets some members so that a new stream can be started.
	 * This method is actually called by the start method
	 */

	var reset = function reset() {

		// reset for subsequent use
		transIndex = 0;
		image = null;
		pixels = null;
		indexedPixels = null;
		colorTab = null;
		closeStream = false;
		firstFrame = true;
	};

	/**
	 * * Sets frame rate in frames per second. Equivalent to
	 * <code>setDelay(1000/fps)</code>.
	 * @param fps
	 * float frame rate (frames per second)
	 */

	var setFrameRate = exports.setFrameRate = function setFrameRate(fps) {
		if (fps != 0xf) delay = Math.round(100 / fps);
	};

	/**
	 * Sets quality of color quantization (conversion of images to the maximum 256
	 * colors allowed by the GIF specification). Lower values (minimum = 1)
	 * produce better colors, but slow processing significantly. 10 is the
	 * default, and produces good color mapping at reasonable speeds. Values
	 * greater than 20 do not yield significant improvements in speed.
	 * @param quality
	 * int greater than 0.
	 * @return
	 */

	var setQuality = exports.setQuality = function setQuality(quality) {
		if (quality < 1) quality = 1;
		sample = quality;
	};

	/**
	 * Sets the GIF frame size. The default size is the size of the first frame
	 * added if this method is not invoked.
	 * @param w
	 * int frame width.
	 * @param h
	 * int frame width.
	 */

	var setSize = exports.setSize = function setSize(w, h) {

		if (started && !firstFrame) return;
		width = w;
		height = h;
		if (width < 1) width = 320;
		if (height < 1) height = 240;
		sizeSet = true;
	};

	/**
	 * Initiates GIF file creation on the given stream.
	 * @param os
	 * OutputStream on which GIF images are written.
	 * @return false if initial write failed.
	 */

	var start = exports.start = function start() {

		reset();
		var ok = true;
		closeStream = false;
		out = new ByteArray();
		try {
			out.writeUTFBytes("GIF89a"); // header
		} catch (e) {
			ok = false;
		}

		return started = ok;
	};

	var cont = exports.cont = function cont() {

		reset();
		var ok = true;
		closeStream = false;
		out = new ByteArray();

		return started = ok;
	};

	/**
	 * Analyzes image colors and creates color map.
	 */

	var analyzePixels = function analyzePixels() {

		var len = pixels.length;
		var nPix = len / 3;
		indexedPixels = [];
		var nq = new NeuQuant(pixels, len, sample);

		// initialize quantizer
		colorTab = nq.process(); // create reduced palette

		// map image pixels to new palette
		var k = 0;
		for (var j = 0; j < nPix; j++) {
			var index = nq.map(pixels[k++] & 0xff, pixels[k++] & 0xff, pixels[k++] & 0xff);
			usedEntry[index] = true;
			indexedPixels[j] = index;
		}

		pixels = null;
		colorDepth = 8;
		palSize = 7;

		// get closest match to transparent color if specified
		if (transparent !== null) {
			transIndex = findClosest(transparent);
		}
	};

	/**
	 * Returns index of palette color closest to c
	 */

	var findClosest = function findClosest(c) {

		if (colorTab === null) return -1;
		var r = (c & 0xFF0000) >> 16;
		var g = (c & 0x00FF00) >> 8;
		var b = (c & 0x0000FF);
		var minpos = 0;
		var dmin = 256 * 256 * 256;
		var len = colorTab.length;

		for (var i = 0; i < len;) {
			var dr = r - (colorTab[i++] & 0xff);
			var dg = g - (colorTab[i++] & 0xff);
			var db = b - (colorTab[i] & 0xff);
			var d = dr * dr + dg * dg + db * db;
			var index = i / 3;
			if (usedEntry[index] && (d < dmin)) {
				dmin = d;
				minpos = index;
			}
			i++;
		}
		return minpos;
	};

	/**
	 * Extracts image pixels into byte array "pixels
	 */

	var getImagePixels = function getImagePixels() {
		var w = width;
		var h = height;
		pixels = [];
		var data = image;
		var count = 0;

		for (var i = 0; i < h; i++) {

			for (var j = 0; j < w; j++) {

				var b = (i * w * 4) + j * 4;
				pixels[count++] = data[b];
				pixels[count++] = data[b + 1];
				pixels[count++] = data[b + 2];

			}

		}
	};

	/**
	 * Writes Graphic Control Extension
	 */

	var writeGraphicCtrlExt = function writeGraphicCtrlExt() {
		out.writeByte(0x21); // extension introducer
		out.writeByte(0xf9); // GCE label
		out.writeByte(4); // data block size
		var transp;
		var disp;
		if (transparent === null) {
			transp = 0;
			disp = 0; // dispose = no action
		} else {
			transp = 1;
			disp = 2; // force clear if using transparent color
		}
		if (dispose >= 0) {
			disp = dispose & 7; // user override
		}
		disp <<= 2;
		// packed fields
		out.writeByte(0 | // 1:3 reserved
			disp | // 4:6 disposal
			0 | // 7 user input - 0 = none
			transp); // 8 transparency flag

		WriteShort(delay); // delay x 1/100 sec
		out.writeByte(transIndex); // transparent color index
		out.writeByte(0); // block terminator
	};

	/**
	 * Writes Comment Extention
	 */

	var writeCommentExt = function writeCommentExt() {
		out.writeByte(0x21); // extension introducer
		out.writeByte(0xfe); // comment label
		out.writeByte(comment.length); // Block Size (s)
		out.writeUTFBytes(comment);
		out.writeByte(0); // block terminator
	};


	/**
	 * Writes Image Descriptor
	 */

	var writeImageDesc = function writeImageDesc() {

		out.writeByte(0x2c); // image separator
		WriteShort(0); // image position x,y = 0,0
		WriteShort(0);
		WriteShort(width); // image size
		WriteShort(height);

		// packed fields
		if (firstFrame) {
			// no LCT - GCT is used for first (or only) frame
			out.writeByte(0);
		} else {
			// specify normal LCT
			out.writeByte(0x80 | // 1 local color table 1=yes
				0 | // 2 interlace - 0=no
				0 | // 3 sorted - 0=no
				0 | // 4-5 reserved
				palSize); // 6-8 size of color table
		}
	};

	/**
	 * Writes Logical Screen Descriptor
	 */

	var writeLSD = function writeLSD() {

		// logical screen size
		WriteShort(width);
		WriteShort(height);
		// packed fields
		out.writeByte((0x80 | // 1 : global color table flag = 1 (gct used)
			0x70 | // 2-4 : color resolution = 7
			0x00 | // 5 : gct sort flag = 0
			palSize)); // 6-8 : gct size

		out.writeByte(0); // background color index
		out.writeByte(0); // pixel aspect ratio - assume 1:1
	};

	/**
	 * Writes Netscape application extension to define repeat count.
	 */

	var writeNetscapeExt = function writeNetscapeExt() {
		out.writeByte(0x21); // extension introducer
		out.writeByte(0xff); // app extension label
		out.writeByte(11); // block size
		out.writeUTFBytes("NETSCAPE" + "2.0"); // app id + auth code
		out.writeByte(3); // sub-block size
		out.writeByte(1); // loop sub-block id
		WriteShort(repeat); // loop count (extra iterations, 0=repeat forever)
		out.writeByte(0); // block terminator
	};

	/**
	 * Writes color table
	 */

	var writePalette = function writePalette() {
		out.writeBytes(colorTab);
		var n = (3 * 256) - colorTab.length;
		for (var i = 0; i < n; i++) out.writeByte(0);
	};

	var WriteShort = function WriteShort(pValue) {
		out.writeByte(pValue & 0xFF);
		out.writeByte((pValue >> 8) & 0xFF);
	};

	/**
	 * Encodes and writes pixel data
	 */

	var writePixels = function writePixels() {
		var myencoder = new LZWEncoder(width, height, indexedPixels, colorDepth);
		myencoder.encode(out);
	};

	/**
	 * Retrieves the GIF stream
	 */

	var stream = exports.stream = function stream() {
		return out;
	};

	var setProperties = exports.setProperties = function setProperties(has_start, is_first) {
		started = has_start;
		firstFrame = is_first;
	};

	return exports;

};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/*
 * NeuQuant Neural-Net Quantization Algorithm
 * ------------------------------------------
 *
 * Copyright (c) 1994 Anthony Dekker
 *
 * NEUQUANT Neural-Net quantization algorithm by Anthony Dekker, 1994. See
 * "Kohonen neural networks for optimal colour quantization" in "Network:
 * Computation in Neural Systems" Vol. 5 (1994) pp 351-367. for a discussion of
 * the algorithm.
 *
 * Any party obtaining a copy of these files from the author, directly or
 * indirectly, is granted, free of charge, a full and unrestricted irrevocable,
 * world-wide, paid up, royalty-free, nonexclusive right and license to deal in
 * this software and documentation files (the "Software"), including without
 * limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons who
 * receive copies from any such party to do so, with the only requirement being
 * that this copyright notice remain intact.
 */

/*
 * This class handles Neural-Net quantization algorithm
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 */

NeuQuant = function() {

	var exports = {};
	var netsize = 256; /* number of colours used */

	/* four primes near 500 - assume no image has a length so large */
	/* that it is divisible by all four primes */

	var prime1 = 499;
	var prime2 = 491;
	var prime3 = 487;
	var prime4 = 503;
	var minpicturebytes = (3 * prime4); /* minimum size for input image */

	/*
	 * Program Skeleton ---------------- [select samplefac in range 1..30] [read
	 * image from input file] pic = (unsigned char*) malloc(3*width*height);
	 * initnet(pic,3*width*height,samplefac); learn(); unbiasnet(); [write output
	 * image header, using writecolourmap(f)] inxbuild(); write output image using
	 * inxsearch(b,g,r)
	 */

	/*
	 * Network Definitions -------------------
	 */

	var maxnetpos = (netsize - 1);
	var netbiasshift = 4; /* bias for colour values */
	var ncycles = 100; /* no. of learning cycles */

	/* defs for freq and bias */
	var intbiasshift = 16; /* bias for fractions */
	var intbias = (1 << intbiasshift);
	var gammashift = 10; /* gamma = 1024 */
	var gamma = (1 << gammashift);
	var betashift = 10;
	var beta = (intbias >> betashift); /* beta = 1/1024 */
	var betagamma = (intbias << (gammashift - betashift));

	/* defs for decreasing radius factor */
	var initrad = (netsize >> 3); /* for 256 cols, radius starts */
	var radiusbiasshift = 6; /* at 32.0 biased by 6 bits */
	var radiusbias = (1 << radiusbiasshift);
	var initradius = (initrad * radiusbias); /* and decreases by a */
	var radiusdec = 30; /* factor of 1/30 each cycle */

	/* defs for decreasing alpha factor */
	var alphabiasshift = 10; /* alpha starts at 1.0 */
	var initalpha = (1 << alphabiasshift);
	var alphadec; /* biased by 10 bits */

	/* radbias and alpharadbias used for radpower calculation */
	var radbiasshift = 8;
	var radbias = (1 << radbiasshift);
	var alpharadbshift = (alphabiasshift + radbiasshift);
	var alpharadbias = (1 << alpharadbshift);

	/*
	 * Types and Global Variables --------------------------
	 */

	var thepicture; /* the input image itself */
	var lengthcount; /* lengthcount = H*W*3 */
	var samplefac; /* sampling factor 1..30 */

	// typedef int pixel[4]; /* BGRc */
	var network; /* the network itself - [netsize][4] */
	var netindex = [];

	/* for network lookup - really 256 */
	var bias = [];

	/* bias and freq arrays for learning */
	var freq = [];
	var radpower = [];

	var NeuQuant = exports.NeuQuant = function NeuQuant(thepic, len, sample) {

		var i;
		var p;

		thepicture = thepic;
		lengthcount = len;
		samplefac = sample;

		network = new Array(netsize);

		for (i = 0; i < netsize; i++) {

			network[i] = new Array(4);
			p = network[i];
			p[0] = p[1] = p[2] = (i << (netbiasshift + 8)) / netsize;
			freq[i] = intbias / netsize; /* 1/netsize */
			bias[i] = 0;
		}
	};

	var colorMap = function colorMap() {

		var map = [];
		var index = new Array(netsize);

		for (var i = 0; i < netsize; i++)
			index[network[i][3]] = i;

		var k = 0;
		for (var l = 0; l < netsize; l++) {
			var j = index[l];
			map[k++] = (network[j][0]);
			map[k++] = (network[j][1]);
			map[k++] = (network[j][2]);
		}

		return map;
	};

	/*
	 * Insertion sort of network and building of netindex[0..255] (to do after
	 * unbias)
	 * -------------------------------------------------------------------------------
	 */

	var inxbuild = function inxbuild() {

		var i;
		var j;
		var smallpos;
		var smallval;
		var p;
		var q;
		var previouscol;
		var startpos;

		previouscol = 0;
		startpos = 0;
		for (i = 0; i < netsize; i++) {

			p = network[i];
			smallpos = i;
			smallval = p[1]; /* index on g */

			/* find smallest in i..netsize-1 */
			for (j = i + 1; j < netsize; j++) {

				q = network[j];
				if (q[1] < smallval) { /* index on g */
					smallpos = j;
					smallval = q[1]; /* index on g */
				}
			}
			q = network[smallpos];

			/* swap p (i) and q (smallpos) entries */
			if (i != smallpos) {
				j = q[0];
				q[0] = p[0];
				p[0] = j;
				j = q[1];
				q[1] = p[1];
				p[1] = j;
				j = q[2];
				q[2] = p[2];
				p[2] = j;
				j = q[3];
				q[3] = p[3];
				p[3] = j;
			}

			/* smallval entry is now in position i */

			if (smallval != previouscol) {

				netindex[previouscol] = (startpos + i) >> 1;

				for (j = previouscol + 1; j < smallval; j++) netindex[j] = i;

				previouscol = smallval;
				startpos = i;
			}
		}

		netindex[previouscol] = (startpos + maxnetpos) >> 1;
		for (j = previouscol + 1; j < 256; j++) netindex[j] = maxnetpos; /* really 256 */
	};

	/*
	 * Main Learning Loop ------------------
	 */

	var learn = function learn() {

		var i;
		var j;
		var b;
		var g;
		var r;
		var radius;
		var rad;
		var alpha;
		var step;
		var delta;
		var samplepixels;
		var p;
		var pix;
		var lim;

		if (lengthcount < minpicturebytes) samplefac = 1;

		alphadec = 30 + ((samplefac - 1) / 3);
		p = thepicture;
		pix = 0;
		lim = lengthcount;
		samplepixels = lengthcount / (3 * samplefac);
		delta = (samplepixels / ncycles) | 0;
		alpha = initalpha;
		radius = initradius;

		rad = radius >> radiusbiasshift;
		if (rad <= 1) rad = 0;

		for (i = 0; i < rad; i++) radpower[i] = alpha * (((rad * rad - i * i) * radbias) / (rad * rad));

		if (lengthcount < minpicturebytes) step = 3;

		else if ((lengthcount % prime1) !== 0) step = 3 * prime1;

		else {

			if ((lengthcount % prime2) !== 0) step = 3 * prime2;
			else {
				if ((lengthcount % prime3) !== 0) step = 3 * prime3;
				else step = 3 * prime4;
			}
		}

		i = 0;
		while (i < samplepixels) {

			b = (p[pix + 0] & 0xff) << netbiasshift;
			g = (p[pix + 1] & 0xff) << netbiasshift;
			r = (p[pix + 2] & 0xff) << netbiasshift;
			j = contest(b, g, r);

			altersingle(alpha, j, b, g, r);
			if (rad !== 0) alterneigh(rad, j, b, g, r); /* alter neighbours */

			pix += step;
			if (pix >= lim) pix -= lengthcount;

			i++;

			if (delta === 0) delta = 1;

			if (i % delta === 0) {
				alpha -= alpha / alphadec;
				radius -= radius / radiusdec;
				rad = radius >> radiusbiasshift;

				if (rad <= 1) rad = 0;

				for (j = 0; j < rad; j++) radpower[j] = alpha * (((rad * rad - j * j) * radbias) / (rad * rad));
			}
		}
	};

	/*
	 ** Search for BGR values 0..255 (after net is unbiased) and return colour
	 * index
	 * ----------------------------------------------------------------------------
	 */

	var map = exports.map = function map(b, g, r) {

		var i;
		var j;
		var dist;
		var a;
		var bestd;
		var p;
		var best;

		bestd = 1000; /* biggest possible dist is 256*3 */
		best = -1;
		i = netindex[g]; /* index on g */
		j = i - 1; /* start at netindex[g] and work outwards */

		while ((i < netsize) || (j >= 0)) {

			if (i < netsize) {
				p = network[i];
				dist = p[1] - g; /* inx key */

				if (dist >= bestd) i = netsize; /* stop iter */

				else {

					i++;
					if (dist < 0) dist = -dist;
					a = p[0] - b;
					if (a < 0) a = -a;
					dist += a;

					if (dist < bestd) {
						a = p[2] - r;
						if (a < 0) a = -a;
						dist += a;

						if (dist < bestd) {
							bestd = dist;
							best = p[3];
						}
					}
				}
			}

			if (j >= 0) {

				p = network[j];
				dist = g - p[1]; /* inx key - reverse dif */

				if (dist >= bestd) j = -1; /* stop iter */

				else {

					j--;
					if (dist < 0) dist = -dist;
					a = p[0] - b;
					if (a < 0) a = -a;
					dist += a;

					if (dist < bestd) {
						a = p[2] - r;
						if (a < 0) a = -a;
						dist += a;
						if (dist < bestd) {
							bestd = dist;
							best = p[3];
						}
					}
				}
			}
		}

		return (best);
	};

	var process = exports.process = function process() {
		learn();
		unbiasnet();
		inxbuild();
		return colorMap();
	};

	/*
	 * Unbias network to give byte values 0..255 and record position i to prepare
	 * for sort
	 * -----------------------------------------------------------------------------------
	 */

	var unbiasnet = function unbiasnet() {

		var i;
		var j;

		for (i = 0; i < netsize; i++) {
			network[i][0] >>= netbiasshift;
			network[i][1] >>= netbiasshift;
			network[i][2] >>= netbiasshift;
			network[i][3] = i; /* record colour no */
		}
	};

	/*
	 * Move adjacent neurons by precomputed alpha*(1-((i-j)^2/[r]^2)) in
	 * radpower[|i-j|]
	 * ---------------------------------------------------------------------------------
	 */

	var alterneigh = function alterneigh(rad, i, b, g, r) {

		var j;
		var k;
		var lo;
		var hi;
		var a;
		var m;
		var p;

		lo = i - rad;
		if (lo < -1) lo = -1;

		hi = i + rad;
		if (hi > netsize) hi = netsize;

		j = i + 1;
		k = i - 1;
		m = 1;

		while ((j < hi) || (k > lo)) {
			a = radpower[m++];

			if (j < hi) {
				p = network[j++];

				try {
					p[0] -= (a * (p[0] - b)) / alpharadbias;
					p[1] -= (a * (p[1] - g)) / alpharadbias;
					p[2] -= (a * (p[2] - r)) / alpharadbias;
				} catch (e) {} // prevents 1.3 miscompilation
			}

			if (k > lo) {
				p = network[k--];

				try {
					p[0] -= (a * (p[0] - b)) / alpharadbias;
					p[1] -= (a * (p[1] - g)) / alpharadbias;
					p[2] -= (a * (p[2] - r)) / alpharadbias;
				} catch (e) {}
			}
		}
	};

	/*
	 * Move neuron i towards biased (b,g,r) by factor alpha
	 * ----------------------------------------------------
	 */

	var altersingle = function altersingle(alpha, i, b, g, r) {

		/* alter hit neuron */
		var n = network[i];
		n[0] -= (alpha * (n[0] - b)) / initalpha;
		n[1] -= (alpha * (n[1] - g)) / initalpha;
		n[2] -= (alpha * (n[2] - r)) / initalpha;
	};

	/*
	 * Search for biased BGR values ----------------------------
	 */

	var contest = function contest(b, g, r) {

		/* finds closest neuron (min dist) and updates freq */
		/* finds best neuron (min dist-bias) and returns position */
		/* for frequently chosen neurons, freq[i] is high and bias[i] is negative */
		/* bias[i] = gamma*((1/netsize)-freq[i]) */

		var i;
		var dist;
		var a;
		var biasdist;
		var betafreq;
		var bestpos;
		var bestbiaspos;
		var bestd;
		var bestbiasd;
		var n;

		bestd = ~ (1 << 31);
		bestbiasd = bestd;
		bestpos = -1;
		bestbiaspos = bestpos;

		for (i = 0; i < netsize; i++) {
			n = network[i];
			dist = n[0] - b;
			if (dist < 0) dist = -dist;
			a = n[1] - g;
			if (a < 0) a = -a;
			dist += a;
			a = n[2] - r;
			if (a < 0) a = -a;
			dist += a;

			if (dist < bestd) {
				bestd = dist;
				bestpos = i;
			}

			biasdist = dist - ((bias[i]) >> (intbiasshift - netbiasshift));

			if (biasdist < bestbiasd) {
				bestbiasd = biasdist;
				bestbiaspos = i;
			}

			betafreq = (freq[i] >> betashift);
			freq[i] -= betafreq;
			bias[i] += (betafreq << gammashift);
		}

		freq[bestpos] += beta;
		bias[bestpos] -= betagamma;
		return (bestbiaspos);
	};

	NeuQuant.apply(this, arguments);
	return exports;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * This class handles LZW encoding
 * Adapted from Jef Poskanzer's Java port by way of J. M. G. Elliott.
 * @author Kevin Weiner (original Java version - kweiner@fmsware.com)
 * @author Thibault Imbert (AS3 version - bytearray.org)
 * @author Kevin Kwok (JavaScript version - https://github.com/antimatter15/jsgif)
 * @version 0.1 AS3 implementation
 */

LZWEncoder = function() {

	var exports = {};
	var EOF = -1;
	var imgW;
	var imgH;
	var pixAry;
	var initCodeSize;
	var remaining;
	var curPixel;

	// GIFCOMPR.C - GIF Image compression routines
	// Lempel-Ziv compression based on 'compress'. GIF modifications by
	// David Rowley (mgardi@watdcsu.waterloo.edu)
	// General DEFINEs

	var BITS = 12;
	var HSIZE = 5003; // 80% occupancy

	// GIF Image compression - modified 'compress'
	// Based on: compress.c - File compression ala IEEE Computer, June 1984.
	// By Authors: Spencer W. Thomas (decvax!harpo!utah-cs!utah-gr!thomas)
	// Jim McKie (decvax!mcvax!jim)
	// Steve Davies (decvax!vax135!petsd!peora!srd)
	// Ken Turkowski (decvax!decwrl!turtlevax!ken)
	// James A. Woods (decvax!ihnp4!ames!jaw)
	// Joe Orost (decvax!vax135!petsd!joe)

	var n_bits; // number of bits/code
	var maxbits = BITS; // user settable max # bits/code
	var maxcode; // maximum code, given n_bits
	var maxmaxcode = 1 << BITS; // should NEVER generate this code
	var htab = [];
	var codetab = [];
	var hsize = HSIZE; // for dynamic table sizing
	var free_ent = 0; // first unused entry

	// block compression parameters -- after all codes are used up,
	// and compression rate changes, start over.

	var clear_flg = false;

	// Algorithm: use open addressing double hashing (no chaining) on the
	// prefix code / next character combination. We do a variant of Knuth's
	// algorithm D (vol. 3, sec. 6.4) along with G. Knott's relatively-prime
	// secondary probe. Here, the modular division first probe is gives way
	// to a faster exclusive-or manipulation. Also do block compression with
	// an adaptive reset, whereby the code table is cleared when the compression
	// ratio decreases, but after the table fills. The variable-length output
	// codes are re-sized at this point, and a special CLEAR code is generated
	// for the decompressor. Late addition: construct the table according to
	// file size for noticeable speed improvement on small files. Please direct
	// questions about this implementation to ames!jaw.

	var g_init_bits;
	var ClearCode;
	var EOFCode;

	// output
	// Output the given code.
	// Inputs:
	// code: A n_bits-bit integer. If == -1, then EOF. This assumes
	// that n_bits =< wordsize - 1.
	// Outputs:
	// Outputs code to the file.
	// Assumptions:
	// Chars are 8 bits long.
	// Algorithm:
	// Maintain a BITS character long buffer (so that 8 codes will
	// fit in it exactly). Use the VAX insv instruction to insert each
	// code in turn. When the buffer fills up empty it and start over.

	var cur_accum = 0;
	var cur_bits = 0;
	var masks = [0x0000, 0x0001, 0x0003, 0x0007, 0x000F, 0x001F, 0x003F, 0x007F, 0x00FF, 0x01FF, 0x03FF, 0x07FF, 0x0FFF, 0x1FFF, 0x3FFF, 0x7FFF, 0xFFFF];

	// Number of characters so far in this 'packet'
	var a_count;

	// Define the storage for the packet accumulator
	var accum = [];

	var LZWEncoder = exports.LZWEncoder = function LZWEncoder(width, height, pixels, color_depth) {
		imgW = width;
		imgH = height;
		pixAry = pixels;
		initCodeSize = Math.max(2, color_depth);
	};

	// Add a character to the end of the current packet, and if it is 254
	// characters, flush the packet to disk.
	var char_out = function char_out(c, outs) {
		accum[a_count++] = c;
		if (a_count >= 254) flush_char(outs);
	};

	// Clear out the hash table
	// table clear for block compress

	var cl_block = function cl_block(outs) {
		cl_hash(hsize);
		free_ent = ClearCode + 2;
		clear_flg = true;
		output(ClearCode, outs);
	};

	// reset code table
	var cl_hash = function cl_hash(hsize) {
		for (var i = 0; i < hsize; ++i) htab[i] = -1;
	};

	var compress = exports.compress = function compress(init_bits, outs) {

		var fcode;
		var i; /* = 0 */
		var c;
		var ent;
		var disp;
		var hsize_reg;
		var hshift;

		// Set up the globals: g_init_bits - initial number of bits
		g_init_bits = init_bits;

		// Set up the necessary values
		clear_flg = false;
		n_bits = g_init_bits;
		maxcode = MAXCODE(n_bits);

		ClearCode = 1 << (init_bits - 1);
		EOFCode = ClearCode + 1;
		free_ent = ClearCode + 2;

		a_count = 0; // clear packet

		ent = nextPixel();

		hshift = 0;
		for (fcode = hsize; fcode < 65536; fcode *= 2)
			++hshift;
		hshift = 8 - hshift; // set hash code range bound

		hsize_reg = hsize;
		cl_hash(hsize_reg); // clear hash table

		output(ClearCode, outs);

		outer_loop: while ((c = nextPixel()) != EOF) {
			fcode = (c << maxbits) + ent;
			i = (c << hshift) ^ ent; // xor hashing

			if (htab[i] == fcode) {
				ent = codetab[i];
				continue;
			}

			else if (htab[i] >= 0) { // non-empty slot

				disp = hsize_reg - i; // secondary hash (after G. Knott)
				if (i === 0) disp = 1;

				do {
					if ((i -= disp) < 0)
						i += hsize_reg;

					if (htab[i] == fcode) {
						ent = codetab[i];
						continue outer_loop;
					}
				} while (htab[i] >= 0);
			}

			output(ent, outs);
			ent = c;
			if (free_ent < maxmaxcode) {
				codetab[i] = free_ent++; // code -> hashtable
				htab[i] = fcode;
			}
			else cl_block(outs);
		}

		// Put out the final code.
		output(ent, outs);
		output(EOFCode, outs);
	};

	// ----------------------------------------------------------------------------
	var encode = exports.encode = function encode(os) {
		os.writeByte(initCodeSize); // write "initial code size" byte
		remaining = imgW * imgH; // reset navigation variables
		curPixel = 0;
		compress(initCodeSize + 1, os); // compress and write the pixel data
		os.writeByte(0); // write block terminator
	};

	// Flush the packet to disk, and reset the accumulator
	var flush_char = function flush_char(outs) {
		if (a_count > 0) {
			outs.writeByte(a_count);
			outs.writeBytes(accum, 0, a_count);
			a_count = 0;
		}
	};

	var MAXCODE = function MAXCODE(n_bits) {
		return (1 << n_bits) - 1;
	};

	// ----------------------------------------------------------------------------
	// Return the next pixel from the image
	// ----------------------------------------------------------------------------

	var nextPixel = function nextPixel() {
		if (remaining === 0) return EOF;
		--remaining;
		var pix = pixAry[curPixel++];
		return pix & 0xff;
	};

	var output = function output(code, outs) {

		cur_accum &= masks[cur_bits];

		if (cur_bits > 0) cur_accum |= (code << cur_bits);
		else cur_accum = code;

		cur_bits += n_bits;

		while (cur_bits >= 8) {
			char_out((cur_accum & 0xff), outs);
			cur_accum >>= 8;
			cur_bits -= 8;
		}

		// If the next entry is going to be too big for the code size,
		// then increase it, if possible.

		if (free_ent > maxcode || clear_flg) {

			if (clear_flg) {

				maxcode = MAXCODE(n_bits = g_init_bits);
				clear_flg = false;

			} else {

				++n_bits;
				if (n_bits == maxbits) maxcode = maxmaxcode;
				else maxcode = MAXCODE(n_bits);
			}
		}

		if (code == EOFCode) {

			// At EOF, write the rest of the buffer.
			while (cur_bits > 0) {
				char_out((cur_accum & 0xff), outs);
				cur_accum >>= 8;
				cur_bits -= 8;
			}

			flush_char(outs);
		}
	};

	LZWEncoder.apply(this, arguments);
	return exports;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

encode64 = function(input) {
	var output = "", i = 0, l = input.length,
	key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", 
	chr1, chr2, chr3, enc1, enc2, enc3, enc4;
	while (i < l) {
		chr1 = input.charCodeAt(i++);
		chr2 = input.charCodeAt(i++);
		chr3 = input.charCodeAt(i++);
		enc1 = chr1 >> 2;
		enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		enc4 = chr3 & 63;
		if (isNaN(chr2)) enc3 = enc4 = 64;
		else if (isNaN(chr3)) enc4 = 64;
		output = output + key.charAt(enc1) + key.charAt(enc2) + key.charAt(enc3) + key.charAt(enc4);
	}
	return output;
}


/***/ }),
/* 18 */
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
/* 19 */
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
var Game_1 = __webpack_require__(2);
var Color_1 = __webpack_require__(1);
var Actor_1 = __webpack_require__(6);
var Vector_1 = __webpack_require__(0);
var Random_1 = __webpack_require__(5);
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This is a pretty direct port of the sound class in https://github.com/abagames/mgl.coffee
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Config_1 = __webpack_require__(4);
var Random_1 = __webpack_require__(5);
var jsfx = __webpack_require__(12);
var jsfxlib = __webpack_require__(22);
var getBufferFromJsfx = function (context, lib) {
    var params = jsfxlib.arrayToParams(lib);
    var data = jsfx.generate(params);
    var buffer = context.createBuffer(1, data.length, 44100);
    var fArray = buffer.getChannelData(0);
    for (var i = 0; i < fArray.length; i++) {
        fArray[i] = data[i];
    }
    return buffer;
};
var Sound = /** @class */ (function () {
    function Sound() {
        this.volume = 1;
        if (!Sound.sounds) {
            Sound.sounds = [];
        }
        Sound.sounds.push(this);
        this.volume = 1;
    }
    /** call to set up all static properties */
    Sound.initialize = function () {
        try {
            this.context = new AudioContext();
            this.gainNode = this.context.createGain();
            this.gainNode.gain.value = Config_1.Config.soundVolume;
            this.gainNode.connect(this.context.destination);
            this.enabled = true;
        }
        catch (error) {
            Sound.enabled = false;
        }
        this.playInterval = 60 / Config_1.Config.soundTempo;
        this.scheduleInterval = 1 / Config_1.Config.fps * 2;
        this.quantize = 0.5;
        this.clear();
        this.initDrumParams();
        this.initDrumPatterns();
        this.random = new Random_1.Random();
    };
    /**
     * Change the seed that is used by the Sound internal Random instance.
     * @param seed random seed value
     */
    Sound.setSeed = function (seed) {
        this.random.seed(seed);
    };
    /**
     * call once per frame to update all playing loops, and play sounds that are linked to quantization.
     */
    Sound.update = function () {
        if (!Sound.enabled) {
            return;
        }
        var currentTime = Sound.context.currentTime;
        var nextTime = currentTime + Sound.scheduleInterval;
        this.sounds.forEach(function (sound) {
            sound.update(currentTime, nextTime);
        });
    };
    /**
     * stop all playing sounds and loops.
     */
    Sound.clear = function () {
        this.sounds = [];
    };
    Sound.initDrumParams = function () {
        this.drumParameters = [
            ["sine", 0, 3, 0, 0.1740, 0.1500, 0.2780, 20, 528, 2400, -0.6680, 0, 0, 0.0100, 0.0003, 0, 0, 0, 0.5000, -0.2600, 0, 0.1000, 0.0900, 1, 0, 0, 0.1240, 0],
            ["square", 0, 2, 0, 0, 0, 0.1, 20, 400, 2000, -1, 0, 0, 0, 0.5, 0, 0, 0, 0.5, -0.5, 0, 0, 0.5, 1, 0, 0, 0.75, -1],
            ["noise", 0, 2, 0, 0, 0, 0.1, 1300, 500, 2400, 1, -1, 1, 40, 1, 0, 1, 0, 0, 0, 0, 0.75, 0.25, 1, -1, 1, 0.25, -1],
            ["noise", 0, 2, 0, 0, 0, 0.05, 2400, 2400, 2400, 0, -1, 0, 0, 0, -1, 0, 0, 0, 0, 0, -0.15, 0.1, 1, 1, 0, 1, 1],
            ["noise", 0, 2, 0, 0.0360, 0, 0.2860, 20, 986, 2400, -0.6440, 0, 0, 0.0100, 0.0003, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
            ["saw", 0, 1, 0, 0.1140, 0, 0.2640, 20, 880, 2400, -0.6000, 0, 0, 0.0100, 0.0003, 0, 0, 0, 0.5000, -0.3620, 0, 0, 0, 1, 0, 0, 0, 0],
            ["synth", 0, 2, 0, 0.2400, 0.0390, 0.1880, 328, 1269, 2400, -0.8880, 0, 0, 0.0100, 0.0003, 0, 0, 0, 0.4730, 0.1660, 0, 0.1700, 0.1880, 1, 0, 0, 0.1620, 0]
        ];
    };
    Sound.initDrumPatterns = function () {
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
    };
    Sound.generateParams = function (seed, params, mixRatio) {
        if (mixRatio === void 0) { mixRatio = 0.5; }
        var random = seed == 0 ? Sound.random : new Random_1.Random(seed);
        var psl = params.length;
        var i = random.rangeInt(0, psl - 1);
        var p = params[i].concat();
        var pl = p.length;
        while (random.value() < mixRatio) {
            var ci = random.rangeInt(0, psl - 1);
            var cp = params[ci];
            for (var i_1 = 1; i_1 < pl - 1; i_1++) {
                var rt = random.value();
                p[i_1] = p[i_1] * rt + cp[i_1] * (1 - rt);
            }
        }
        return p;
    };
    Sound.generateDrumParams = function (seed) {
        if (seed === void 0) { seed = 0; }
        return this.generateParams(seed, this.drumParameters);
    };
    Sound.generateDrumPattern = function (seed) {
        if (seed === void 0) { seed = 0; }
        var random = seed == 0 ? Sound.random : new Random_1.Random(seed);
        var dpsl = this.drumPatterns.length;
        var i = random.rangeInt(0, dpsl - 1);
        var dp = this.drumPatterns[i];
        var dpl = dp.length;
        var dpa = [];
        for (var i_2 = 0; i_2 < dpl - 1; i_2++) {
            var d = dp.charAt(i_2);
            dpa.push(d == '1');
        }
        while (random.value() < 0.5) {
            var ci = random.rangeInt(0, dpsl - 1);
            var cpd = this.drumPatterns[ci];
            for (var i_3 = 0; i_3 < dpl - 1; i_3++) {
                var cd = cpd.charAt(i_3);
                var c = cd == 1;
                dpa[i_3] = (!dpa[i_3]) != (!c);
            }
        }
        var gdp = "";
        dpa.forEach(function (d) {
            gdp += d ? '1' : '0';
        });
        return gdp;
    };
    //#region Private Methods
    Sound.prototype.calculateNextScheduledTime = function () {
        // this function steps forward in the pattern, until it finds a 1
        // and updates the scheduledtime with that number.
        // I have no idea why it uses 100
        var sti = Sound.playInterval * this.patternInterval;
        for (var i = 0; i < 100; i++) {
            this.scheduledTime += sti;
            var p = this.pattern.charAt(this.patternIndex);
            this.patternIndex = (this.patternIndex + 1) % this.pattern.length;
            if (p == '1') {
                break;
            }
        }
    };
    Sound.prototype.playAt = function (time) {
        var s = Sound.context.createBufferSource();
        s.buffer = this.buffer;
        s.connect(Sound.gainNode);
        s.start(time);
    };
    /**
     * internal method to play a quantized sound or play a looping sound
     * @param currentTime audio context time
     * @param nextTime next time this update function will be called
     */
    Sound.prototype.update = function (currentTime, nextTime) {
        if (this.oneShot) {
            this.oneShot = null;
            var pi = Sound.playInterval * Sound.quantize;
            var pt = Math.ceil(currentTime / pi) * pi;
            if (!this.playedTime || pt > this.playedTime) {
                this.playAt(pt);
                this.playedTime = pt;
            }
        }
        if (!this.isPlayingLoop) {
            return;
        }
        if (!this.scheduledTime) {
            this.scheduledTime = Math.ceil(currentTime / Sound.playInterval) * Sound.playInterval - Sound.playInterval * this.patternInterval;
            this.patternIndex = 0;
            this.calculateNextScheduledTime();
        }
        while (this.scheduledTime < currentTime) {
            this.calculateNextScheduledTime();
        }
        while (this.scheduledTime <= nextTime) {
            this.playAt(this.scheduledTime);
            this.calculateNextScheduledTime();
        }
    };
    //#endregion
    //#region Public Methods
    Sound.prototype.setFromParams = function (params) {
        if (!Sound.enabled) {
            return this;
        }
        params[2] *= this.volume;
        this.buffer = getBufferFromJsfx(Sound.context, params);
        return this;
    };
    Sound.prototype.setPattern = function (pattern, patternInterval) {
        if (patternInterval === void 0) { patternInterval = 0.25; }
        this.pattern = pattern;
        this.patternInterval = patternInterval;
        return this;
    };
    Sound.prototype.playNow = function () {
        this.playAt(0);
    };
    /**
     * schedules the sound to play at the next quantized time
     * */
    Sound.prototype.play = function () {
        this.oneShot = true;
        return this;
    };
    /**
     * Plays the sound as a looping pattern.
     * Will throw an error if the sound doesn't have a pattern defined.
     */
    Sound.prototype.playPattern = function () {
        this.isPlayingLoop = true;
        this.scheduledTime = null;
        return this;
    };
    /**
     * removes a playing sound from the scheduled sounds.
     */
    Sound.prototype.remove = function () {
        var i = Sound.sounds.indexOf(this);
        if (i > -1) {
            Sound.sounds.splice(i, 1);
        }
    };
    Sound.sounds = [];
    return Sound;
}());
exports.Sound = Sound;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// NOTE!!! THIS IS A MODIFIED VERSION OF JSFX... YOU CAN'T JUST DROP IN REPLACE IT.

(function(root, factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory();
	} else {
		root.audio = factory();
	}
}(this, function() {
    "use strict";

var audio = {};
(function(samplerate){
    this.SampleRate = samplerate || 44100;
    var SampleRate = this.SampleRate;
    
    // Do not modify parameters without changing code!
    var BitsPerSample = 16;
    var NumChannels = 1;
    var BlockAlign = NumChannels * BitsPerSample >> 3;
    var ByteRate = SampleRate * BlockAlign;
    
    // helper functions
    var chr = String.fromCharCode; // alias for getting converting int to char 
    
    //////////////////////
    // Wave            ///
    //////////////////////
    
    var waveTag="data:audio/wav;base64,";
    // constructs a wave from sample array
    var constructWave = function(data){
        var l;
        return pack( ["RIFF",36+(l=data.length),"WAVEfmt ",16,1,NumChannels,SampleRate,
                       ByteRate,BlockAlign,BitsPerSample,"data",l,data],"s4s4224422s4s");
    };
    
    // creates an audio object from sample data
    this.make = function(arr){
        return new Audio(waveTag + btoa(constructWave(arrayToData(arr))))
    };
    
    // creates a wave file for downloading
    this.makeWaveFile = function(arr){
        dataToFile(waveTag + btoa(constructWave(arrayToData(arr))))
    };
    
    //////////////////////
    // General stuff   ///
    //////////////////////
     
    // Converts an integer to String representation
    //   a - number
    //   i - number of bytes
    var istr = function(a,i){
        var m8 = 0xff; // 8 bit mask
        return i?chr(a&m8)+istr(a>>8,i-1):"";
    };
    
    // Packs array of data to a string
    //   data   - array
    //   format - s is for string, numbers denote bytes to store in
    var pack = function(data,format){
        var out="";
        for(i=0;i<data.length;i++)
            out+=format[i]=="s"?data[i]:istr(data[i],format.charCodeAt(i)-48);
        return out;
    }
    
    var dataToFile = function(data){
        document.location.href = data;
    }
    
    //////////////////////
    // Audio Processing ///
    //////////////////////
    
    // Utilities
    //////////////////////
    
    // often used variables (just for convenience)
    var count,out,i,sfreq;
    var sin = Math.sin;
    var TAU = 2*Math.PI;
    var Arr = function(c){return new Array(c|0)}; // alias for creating a new array
    
    var clamp8bit  = function(a){return a<0?0:255<a?255:a}
    var sample8bit = function(a){return clamp((a*127+127)|0)}
    
    this.toTime    = function(a){return a/SampleRate}
    this.toSamples = function(a){return a*SampleRate}
    
    var arrayToData16bit = function(arr){
        var out="";
        var len = arr.length;
        for( i=0 ; i < len ; i++){
            var a = (arr[i] * 32767) | 0;
            a = a < -32768 ? -32768 : 32767 < a ? 32767 : a; // clamp
            a += a < 0 ? 65536 : 0;                       // 2-s complement
            out += String.fromCharCode(a & 255, a >> 8);
        };
        return out;
    }
    
    var arrayToData8bit = function(arr){
        var out="";
        var len = arr.length;
        for( i=0 ; i < len ; i++){
            var a = (arr[i] * 127 + 128) | 0;
            a = a < 0 ? 0 : 255 < a ? 255 : a;
            out += String.fromCharCode(a);
        };
        return out;
    }
    
    var arrayToData = function(arr){
        if( BitsPerSample == 16 )
            return arrayToData16bit(arr);
        else
            return arrayToData8bit(arr);
    }
    
    //////////////////////
    // Processing
    //////////////////////
    
    // adjusts volume of a buffer
    this.adjustVolume = function(data, v){
        for(i=0;i<data.length;i++)
            data[i] *= v;
        return data;
    }
    
    // Filters
    //////////////////////
    
    this.filter = function(data,func,from,to,A,B,C,D,E,F){
        from = from ? from : 1;
        to = to ? to : data.length;
        out = data.slice(0);
        for(i=from;i<to;i++)
            out[i] = func(data, out, from,to,i,A,B,C,D,E,F)
        return out;
    };
    var filter = this.filter;
    
    this.filters = {
        lowpass  : 
            function(data, out, from, to, pos, A){
                return out[pos-1] + A * (data[pos] - out[pos-1]);
            },
        lowpassx : 
            function(data, out, from, to, pos, A){
                return out[pos-1] + A*(to - pos)/(to-from) * (data[pos] - out[pos-1]);
            },
        highpass :
            function(data, out, from, to, pos, A){
                return A * (out[pos-1] + data[pos] - data[pos-1])
            }
    };
    var filters = this.filters;
    
    this.f = {
        lowpass  : function(data, from, to, A){return filter(data, filters.lowpass, from, to, A);},
        lowpassx : function(data, from, to, A){return filter(data, filters.lowpassx, from, to, A);},
        highpass : function(data, from, to, A){return filter(data, filters.highpass, from, to, A);}
    }
    
    // Generators
    //////////////////////
    
    // general sound generation
    // example:
    // generate(3, 440, Math.sin);
    this.generate = function(count, freq, func, A, B, C, D, E, F){
        var sfreq=freq*TAU/SampleRate;
        var out = Arr(count);
        for(i=0; i < count;i++)
            out[i] = func(i*sfreq,A,B,C,D,E,F);
        return out;
    }
    
    var lastNoise = 0;
    
    var generate = this.generate;
    this.generators =  {
        noise  : function(phase){
                    if(phase % TAU < 4){
                        lastNoise = Math.random() * 2 - 1;
                    }
                    return lastNoise;
                },
        uninoise : Math.random,
        sine   : Math.sin,
        synth  : function(phase){return sin(phase) + .5*sin(phase/2) + .3*sin(phase/4)},
        saw    : function(phase){return 2*(phase/TAU - ((phase/TAU + 0.5)|0))},
        square : function(phase,A){return sin(phase) > A ? 1.0 : sin(phase) < A ? -1.0 : A}
    };
    var generators = this.generators;
    
    this.g = {
        noise  : function(count){ return generate(count,0, generators.noise) },
        sine   : function(count, freq){ return generate(count, freq, generators.sine) },
        synth  : function(count, freq){ return generate(count, freq, generators.synth) },
        saw    : function(count, freq){ return generate(count, freq, generators.saw) },
        square : function(count, freq, A){ return generate(count, freq, generators.square, A) }
    };
}).apply(audio);
return audio;
}));

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// NOTE!!! THIS IS A MODIFIED VERSION OF JSFX... YOU CAN'T JUST DROP IN REPLACE IT.

(function(root, factory) {
	if (typeof module === "object" && typeof module.exports === "object") {
		module.exports = factory();
	} else {
		root.jsfxlib = factory();
	}
}(this, function() {
    "use strict";
    var jsfx = __webpack_require__(12);
var jsfxlib = {};
(function () {
    // takes object with param arrays
    // audiolib = {
    //   Sound : ["sine", 1, 2, 4, 1...
    // }
    //
    // returns object with audio samples
    // p.Sound.play()
    this.createWaves = function(lib){
        var sounds = {};
        for (var e in lib) {
            var data = lib[e];
            sounds[e] = this.createWave(data);
        }
        return sounds;
    }

    /* Create a single sound:
       var p = jsfxlib.createWave(["sine", 1,2,3, etc.]);
       p.play();
   */
    this.createWave = function(lib) {
        var params = this.arrayToParams(lib),
            data = jsfx.generate(params),
            wave = audio.make(data);

        return wave;
    }

    this.paramsToArray = function(params){
        var pararr = [];
        var len = jsfx.Parameters.length;
        for(var i = 0; i < len; i++){
            pararr.push(params[jsfx.Parameters[i].id]);
        }
        return pararr;
    }

    this.arrayToParams = function(pararr){
        var params = {};
        var len = jsfx.Parameters.length;
        for(var i = 0; i < len; i++){
            params[jsfx.Parameters[i].id] = pararr[i];
        }
        return params;
    }
}).apply(jsfxlib);
return jsfxlib;
}));

/***/ })
/******/ ]);
});