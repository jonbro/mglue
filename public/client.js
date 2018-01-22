/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
    Vector.prototype.divide = function (scalar) {
        this.x /= scalar;
        this.y /= scalar;
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
var Display_1 = __webpack_require__(3);
var Actor_1 = __webpack_require__(6);
var Config_1 = __webpack_require__(4);
var Mouse_1 = __webpack_require__(7);
var Vector_1 = __webpack_require__(0);
var Keyboard_1 = __webpack_require__(8);
var Leaderboard_1 = __webpack_require__(14);
__webpack_require__(9);
var requestAnimationFrameWrapper = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, Game.INTERVAL / 2);
    };
var requestAnimationFrame = function (callback) {
    requestAnimationFrameWrapper(callback);
};
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
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.currentTime = 0;
        this.previousTime = 0;
        this.delta = 0;
        this.score = 0;
        this.lastScore = -1;
        this.highScore = -1;
        this.ticks = 0;
        this.currentState = GameState.title;
        if (window.localStorage.getItem(Config_1.Config.saveName)) {
            this.highScore = Number(window.localStorage.getItem(Config_1.Config.saveName));
        }
        Game.INTERVAL = 1000 / Config_1.Config.fps;
        Game.display = new Display_1.Display();
        Mouse_1.Mouse.initialize();
        this.transitionToTitle();
        requestAnimationFrame(function (time) { _this.updateFrame(time); });
    }
    Object.defineProperty(Game.prototype, "gameOver", {
        get: function () { return this.currentState != GameState.game; },
        enumerable: true,
        configurable: true
    });
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
    Game.prototype.endGame = function () {
        this.lastScore = this.score;
        if (this.lastScore > 0 && this.lastScore > this.highScore) {
            this.highScore = this.lastScore;
            window.localStorage.setItem(Config_1.Config.saveName, this.highScore.toString());
        }
        this.transitionToTitle();
        this.currentState = GameState.title;
        this.onEndGame();
    };
    Game.prototype.transitionToGame = function () {
        this.currentState = GameState.game;
        this.score = 0;
        Actor_1.Actor.clear();
        this.onBeginGame();
    };
    // override
    Game.prototype.onBeginGame = function () { };
    Game.prototype.onEndGame = function () { };
    Game.prototype.update = function () { };
    Game.prototype.updateTitle = function () {
        if (Keyboard_1.Keyboard.keyDown[Keyboard_1.Keyboard.SPACE]) {
            this.transitionToGame();
        }
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
        requestAnimationFrame(function (time) { _this.updateFrame(time); });
        return false;
    };
    Game.prototype.updateFrame = function (time) {
        if (!this.preUpdateFrame(time)) {
            return;
        }
        Game.display.preUpdate();
        this.ticks++;
        this.update();
        Actor_1.Actor.update();
        if (this.currentState == GameState.title) {
            this.updateTitle();
        }
        Game.display.drawText("SCORE: " + this.score, 1, 0, 1);
        this.postUpdateFrame();
    };
    Game.prototype.postUpdateFrame = function () {
        var _this = this;
        this.delta = 0;
        requestAnimationFrame(function (time) { _this.updateFrame(time); });
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Config_1 = __webpack_require__(4);
var Drawing_1 = __webpack_require__(5);
var Display = /** @class */ (function () {
    function Display() {
        var _this = this;
        this.textDrawer = new Drawing_1.TextDrawer();
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
    }
    Display.prototype.setSize = function () {
        var clientWidth = Display.element.clientWidth;
        Display.element.width = Display.element.height = clientWidth;
        Display.size.set(clientWidth, clientWidth);
    };
    Display.prototype.clear = function () {
        this.context.fillStyle = Config_1.Config.backgroundColor.toString();
        this.context.fillRect(0, 0, Display.size.x, Display.size.y);
    };
    Display.prototype.preUpdate = function () {
        this.clear();
    };
    Display.prototype.fillRect = function (x, y, width, height, color) {
        if (color === void 0) { color = Color_1.Color.white; }
        this.context.fillStyle = color.toString();
        this.context.fillRect((x - width / 2) * Display.size.x, (y - height / 2) * Display.size.y, width * Display.size.x, height * Display.size.y);
    };
    Display.prototype.fillRectDirect = function (x, y, width, height, color) {
        if (color === void 0) { color = Color_1.Color.white; }
        this.context.fillStyle = color.toString();
        this.context.fillRect(x, y, width, height);
    };
    Display.prototype.drawText = function (text, x, y, alignX, alignY, color, scale) {
        if (alignX === void 0) { alignX = -1; }
        if (alignY === void 0) { alignY = -1; }
        if (color === void 0) { color = Color_1.Color.white; }
        if (scale === void 0) { scale = 1; }
        this.textDrawer.setSize(Display.size);
        try {
            this.textDrawer.drawString(text, x, y, alignX, alignY, color, scale);
        }
        catch (e) {
            console.log(e);
        }
    };
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
    return Config;
}());
exports.Config = Config;


/***/ }),
/* 5 */
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
var Drawing_1 = __webpack_require__(5);
var Vector_1 = __webpack_require__(0);
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
var Actor = /** @class */ (function () {
    function Actor() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.velocity = new Vector_1.Vector(0, 0);
        this.rotation = 0;
        this.isDestroying = false;
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
        Actor.groups.forEach(function (group) {
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
    return Actor;
}());
exports.Actor = Actor;
var TextActor = /** @class */ (function (_super) {
    __extends(TextActor, _super);
    function TextActor(s) {
        var _this = _super.call(this) || this;
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


/***/ }),
/* 7 */
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
    };
    Mouse.onMouseUp = function (e) {
        Mouse.isPressed = false;
    };
    Mouse.onMouseDown = function (e) {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard = /** @class */ (function () {
    function Keyboard() {
    }
    Keyboard.initialize = function () {
        Keyboard.keyDown = [];
        for (var i = 0; i < 255; i++) {
            Keyboard.keyDown[i] = false;
            window.onkeydown = function (e) {
                Keyboard.keyDown[e.keyCode] = true;
                if (e.keyCode >= 37 && e.keyCode <= 40) {
                    e.preventDefault();
                }
            };
            window.onkeyup = function (e) {
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
Keyboard.initialize();


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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
var Mglue_1 = __webpack_require__(12);
var Leaderboard_1 = __webpack_require__(14);
var g;
var WormDriveGame = /** @class */ (function (_super) {
    __extends(WormDriveGame, _super);
    function WormDriveGame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rankStrings = ['ST', 'ND', 'RD'];
        _this.leaderboardText = new Mglue_1.TextActor("");
        return _this;
    }
    WormDriveGame.prototype.onBeginGame = function () {
        var p = new Player();
        var a = new Apple();
        var i = new InstructionText("OVERLAP SAFE");
    };
    WormDriveGame.prototype.updateTitle = function () {
        var _this = this;
        if (Mglue_1.Keyboard.keyDown[Mglue_1.Keyboard.SPACE]) {
            this.transitionToGame();
        }
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
        this.leaderboardText.color = Mglue_1.Color.white;
        var leaderboardTypes = ['LAST', 'BEST', 'TOP'];
        this.leaderboardText.displayString = leaderboardTypes[leaderboardType - 1];
        this.leaderboardText.setPosition(new Mglue_1.Vector(0.5, startPosition));
        this.leaderboardText.update();
        startPosition += 0.035;
        Leaderboard_1.Leaderboard.scores.forEach(function (score) {
            if (Leaderboard_1.Leaderboard.playerId == score.playerId) {
                _this.leaderboardText.color = Mglue_1.Color.lightgreen;
                _this.leaderboardText.xAlign = 1;
                _this.leaderboardText.setPosition(new Mglue_1.Vector(0.2, count * 0.03 + startPosition));
                _this.leaderboardText.displayString = "YOU";
                _this.leaderboardText.update();
            }
            else {
                _this.leaderboardText.color = Mglue_1.Color.white;
            }
            _this.leaderboardText.xAlign = 1;
            _this.leaderboardText.setPosition(new Mglue_1.Vector(0.4, count * 0.03 + startPosition));
            if (score.rank != null) {
                var rs = "" + (score.rank + 1) + ((score.rank < 3) ? _this.rankStrings[score.rank] : 'TH');
                _this.leaderboardText.displayString = rs;
                _this.leaderboardText.update();
            }
            _this.leaderboardText.xAlign = -1;
            _this.leaderboardText.setPosition(new Mglue_1.Vector(0.6, count * 0.03 + startPosition));
            _this.leaderboardText.displayString = score.score.toString();
            _this.leaderboardText.update();
            count++;
        });
    };
    return WormDriveGame;
}(Mglue_1.Game));
var InstructionText = /** @class */ (function (_super) {
    __extends(InstructionText, _super);
    function InstructionText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionText.prototype.begin = function () {
        this.setDisplayPriority(-1);
        this.setDurationForever();
        this.xAlign = 0;
        this.setPosition(new Mglue_1.Vector(0.5, 0.5));
        this.scale.x = 2;
        this.color = Mglue_1.Color.darkgreen;
    };
    InstructionText.prototype.update = function () {
        if (g.gameOver) {
            this.destroy();
        }
        _super.prototype.update.call(this);
    };
    return InstructionText;
}(Mglue_1.TextActor));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.begin = function () {
        this.position.set(0.25, 0.25);
        this.drawing
            .setColor(Mglue_1.Color.red)
            .addRect(0.02, 0.02, 0.02)
            .addArc(60, 6);
    };
    Apple.prototype.chooseNewPosition = function () {
        this.position.set(Mglue_1.Random.range(0.1, 0.9), Mglue_1.Random.range(0.1, 0.9));
    };
    return Apple;
}(Mglue_1.Actor));
var BodySegment = /** @class */ (function (_super) {
    __extends(BodySegment, _super);
    function BodySegment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lastPosition = new Mglue_1.Vector(0, 0);
        _this.gameOverVelocitySet = false;
        return _this;
    }
    BodySegment.prototype.begin = function (dangerSeg) {
        var color = dangerSeg ? Mglue_1.Color.lightgreen : Mglue_1.Color.darkgreen;
        this.drawing.hasCollision = dangerSeg;
        this.drawing
            .setColor(color)
            .addRect(0.02, 0.02);
    };
    BodySegment.prototype.update = function () {
        if (g.gameOver) {
            if (!this.gameOverVelocitySet) {
                this.velocity.set(this.position);
                this.velocity.subtract(this.lastPosition);
                this.gameOverVelocitySet = true;
            }
        }
        else {
            this.lastPosition.set(this.position);
        }
    };
    return BodySegment;
}(Mglue_1.Actor));
// line intersection
function turn(p1, p2, p3) {
    var epsilon = Math.pow(2, -52);
    var a = p1.x;
    var b = p1.y;
    var c = p2.x;
    var d = p2.y;
    var e = p3.x;
    var f = p3.y;
    var A = (f - b) * (c - a);
    var B = (d - b) * (e - a);
    return (A > B + epsilon) ? 1 : (A + epsilon < B) ? -1 : 0;
}
function lineIntersecting(p1, p2, p3, p4) {
    return (turn(p1, p3, p4) != turn(p2, p3, p4)) && (turn(p1, p2, p3) != turn(p1, p2, p4));
}
var PositionBuffer = /** @class */ (function () {
    function PositionBuffer() {
        this.positions = [new Mglue_1.Vector(0, 0)];
        this.writeIndex = 0;
    }
    PositionBuffer.prototype.getPosition = function (index) {
        return this.positions[(this.writeIndex + index) % this.positions.length];
    };
    PositionBuffer.prototype.addPosition = function (newPosition) {
        this.writeIndex = (this.writeIndex - 1).mod(this.positions.length);
        this.positions[this.writeIndex] = newPosition;
    };
    PositionBuffer.prototype.growBuffer = function (growAmount, fillVector) {
        // generate a new fill buffer
        var c = 0;
        while (c < growAmount) {
            this.positions.splice(this.writeIndex, 0, new Mglue_1.Vector(fillVector.x, fillVector.y));
            c++;
            this.writeIndex++;
        }
    };
    return PositionBuffer;
}());
var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.turnSpeed = 4;
        _this.bodySegments = [];
        _this.spawnRemaining = 0;
        _this.moveSpeed = 0.005;
        _this.intersections = [];
        _this.priorPositions = new PositionBuffer();
        _this.segmentLength = 10;
        return _this;
    }
    Player.prototype.begin = function () {
        this.position.set(0.5, 0.5);
        this.drawing
            .setColor(Mglue_1.Color.lightblue)
            .addRect(0.02, 0.02, 0.01)
            .addArc(60, 6)
            .setColor(Mglue_1.Color.darkgray)
            .addRect(0.01, 0.01, 0.015, 0)
            .mirrorX();
        this.overlapDrawing = new Mglue_1.Drawing();
        this.overlapDrawing
            .setColor(Mglue_1.Color.red)
            .addRect(0.01, 0.01, 0.04)
            .addArc(20, 18);
    };
    Player.prototype.getSpawnPosition = function () {
        if (this.bodySegments.length == 0) {
            return this.position;
        }
        return this.bodySegments[this.bodySegments.length - 1].position;
    };
    Player.prototype.update = function () {
        this.priorPositions.addPosition(new Mglue_1.Vector(this.position.x, this.position.y));
        if (this.spawnRemaining > 0 && this.age % this.segmentLength == 0) {
            this.spawnRemaining--;
            var dangerSeg = Math.floor(this.bodySegments.length / 8) % 2 == 1;
            var newSeg = new BodySegment(dangerSeg);
            this.bodySegments.push(newSeg);
            this.priorPositions.growBuffer(this.segmentLength, this.spawnPosition);
        }
        // update all the body segment positions
        for (var i = this.bodySegments.length - 1; i >= 0; i--) {
            var cSeg = this.bodySegments[i];
            cSeg.setPosition(this.priorPositions.getPosition((i + 1) * this.segmentLength));
        }
        // see how many line segments overlap
        var overlapCount = 0;
        this.intersections = [];
        for (var i = 0; i < this.bodySegments.length - 1; i++) {
            var a = this.bodySegments[i].position;
            var b = this.bodySegments[i + 1].position;
            for (var j = i; j < this.bodySegments.length - 1; j++) {
                if (Math.abs(i - j) < 4) {
                    continue;
                }
                var c = this.bodySegments[j].position;
                var d = this.bodySegments[j + 1].position;
                if (lineIntersecting(a, b, c, d)) {
                    overlapCount++;
                    var intersection = new Mglue_1.Vector(a.x, a.y).add(b).add(c).add(d).divide(4);
                    this.intersections.push(intersection);
                    this.overlapDrawing
                        .setRotation(this.age)
                        .setPosition(intersection)
                        .draw();
                }
            }
        }
        if (Mglue_1.Keyboard.keyDown[Mglue_1.Keyboard.LEFT]) {
            this.rotation -= this.turnSpeed;
        }
        if (Mglue_1.Keyboard.keyDown[Mglue_1.Keyboard.RIGHT]) {
            this.rotation += this.turnSpeed;
        }
        var v = new Mglue_1.Vector(0, 0).addDirection(this.rotation, 1);
        if (this.position.x > 1 || this.position.x < 0) {
            v.x *= -1;
            this.position.x = this.position.x.clamp(0, 1);
        }
        if (this.position.y > 1 || this.position.y < 0) {
            v.y *= -1;
            this.position.y = this.position.y.clamp(0, 1);
        }
        this.rotation = v.rotation();
        this.position.addDirection(this.rotation, this.moveSpeed);
        // check to see if we are eating an apple
        if (this.checkOverlap(Apple, function (a) {
            a.chooseNewPosition();
        })) {
            // add score
            this.intersections.forEach(function (intersection) {
                new Mglue_1.TextActor("+1").setPosition(intersection).setDuration(30).setVelocity(new Mglue_1.Vector(0, -0.001));
                g.score += 1;
            });
            // start spawning body segments
            this.spawnRemaining = 8;
            this.spawnPosition = new Mglue_1.Vector(this.getSpawnPosition().x, this.getSpawnPosition().y);
        }
        if (!g.gameOver && this.checkOverlap(BodySegment)) {
            this.destroy();
            var ps = new Mglue_1.ParticleSystem();
            ps.position.set(this.position.x, this.position.y);
            ps.count = 10;
            ps.color = Mglue_1.Color.blue;
            g.endGame();
        }
    };
    return Player;
}(Mglue_1.Actor));
window.onload = function () {
    Mglue_1.Config.title = "WORM DRIVE";
    Leaderboard_1.Leaderboard.init();
    g = new WormDriveGame();
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = __webpack_require__(1);
exports.Color = Color_1.Color;
var Game_1 = __webpack_require__(2);
exports.Game = Game_1.Game;
var Display_1 = __webpack_require__(3);
exports.Display = Display_1.Display;
var Actor_1 = __webpack_require__(6);
exports.Actor = Actor_1.Actor;
exports.TextActor = Actor_1.TextActor;
var Config_1 = __webpack_require__(4);
exports.Config = Config_1.Config;
var Mouse_1 = __webpack_require__(7);
exports.Mouse = Mouse_1.Mouse;
var Vector_1 = __webpack_require__(0);
exports.Vector = Vector_1.Vector;
var ParticleSystem_1 = __webpack_require__(13);
exports.ParticleSystem = ParticleSystem_1.ParticleSystem;
var Keyboard_1 = __webpack_require__(8);
exports.Keyboard = Keyboard_1.Keyboard;
var Random_1 = __webpack_require__(10);
exports.Random = Random_1.Random;
var Drawing_1 = __webpack_require__(5);
exports.Drawing = Drawing_1.Drawing;
__webpack_require__(9);


/***/ }),
/* 13 */
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
var Actor_1 = __webpack_require__(6);
var Game_1 = __webpack_require__(2);
var Color_1 = __webpack_require__(1);
var Vector_1 = __webpack_require__(0);
var Random_1 = __webpack_require__(10);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LZString = __webpack_require__(15);
var Leaderboard = /** @class */ (function () {
    function Leaderboard() {
    }
    Leaderboard.init = function () {
        var playerIdStorage = localStorage.getItem(Leaderboard.playerIdKey);
        if (playerIdStorage == null) {
            window.fetch('/api/nextPlayerId').
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
        var uri = '/api/score';
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
        window.fetch("/api/key?playerId=" + Leaderboard.playerId).
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
            window.fetch('/api/score', {
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
/* 15 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmFlYWRiYzdmYjgyODliOTI1ZDMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3NyYy9WZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3NyYy9Db2xvci50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnRfc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3NyYy9EaXNwbGF5LnRzIiwid2VicGFjazovLy8uL2NsaWVudF9zcmMvQ29uZmlnLnRzIiwid2VicGFjazovLy8uL2NsaWVudF9zcmMvRHJhd2luZy50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnRfc3JjL0FjdG9yLnRzIiwid2VicGFjazovLy8uL2NsaWVudF9zcmMvTW91c2UudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3NyYy9LZXlib2FyZC50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnRfc3JjL0V4dGVuc2lvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3NyYy9SYW5kb20udHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3NyYy9Xb3JtRHJpdmUudHMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3NyYy9NZ2x1ZS50cyIsIndlYnBhY2s6Ly8vLi9jbGllbnRfc3JjL1BhcnRpY2xlU3lzdGVtLnRzIiwid2VicGFjazovLy8uL2NsaWVudF9zcmMvTGVhZGVyYm9hcmQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2x6LXN0cmluZy9saWJzL2x6LXN0cmluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esa0RBQXNCLGlCQUFpQixFQUFFO0FBQUE7QUFDekMsQ0FBQztBQUNEO0FBQ0EiLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJhZWFkYmM3ZmI4Mjg5YjkyNWQzIiwiY2xhc3MgVmVjdG9yXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4IDogbnVtYmVyLCBwdWJsaWMgeSA6IG51bWJlcikge31cclxuICAgIHNldCh4OiBudW1iZXIsIHk6bnVtYmVyKTogdm9pZDtcclxuICAgIHNldCh2OiBWZWN0b3IpOiB2b2lkO1xyXG4gICAgc2V0KHggOiBudW1iZXIgfCBWZWN0b3IsIHk/IDogbnVtYmVyKVxyXG4gICAgOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYoeCBpbnN0YW5jZW9mIFZlY3RvcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9ICg8VmVjdG9yPngpLng7XHJcbiAgICAgICAgICAgIHRoaXMueSA9ICAoPFZlY3Rvcj54KS55O1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnggPSA8bnVtYmVyPng7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IDxudW1iZXI+eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZGlzdGFuY2UoYSA6IFZlY3RvciwgYiA6IFZlY3RvcilcclxuICAgIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhhLnggLSBiLngsIDIpICsgTWF0aC5wb3coYS55IC0gYi55LCAyKSk7XHJcbiAgICB9XHJcbiAgICBkaXJlY3Rpb25UbyhvdGhlciA6IFZlY3RvcilcclxuICAgIDogbnVtYmVyXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIob3RoZXIueCAtIHRoaXMueCwgLShvdGhlci55LXRoaXMueSkpICogMTgwLjAgLyBNYXRoLlBJO1xyXG4gICAgfVxyXG4gICAgcm90YXRpb24oKVxyXG4gICAgOiBudW1iZXJcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLngsIC10aGlzLnkpICogMTgwIC8gTWF0aC5QSTtcclxuICAgIH1cclxuICAgIGFkZERpcmVjdGlvbihkZWdyZWVzIDogbnVtYmVyLCBhbW91bnQgOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJhZGlhbnMgPSBkZWdyZWVzICogTWF0aC5QSSAvIDE4MC4wO1xyXG4gICAgICAgIHRoaXMueCArPSBNYXRoLnNpbihyYWRpYW5zKSAqIGFtb3VudDtcclxuICAgICAgICB0aGlzLnkgLT0gTWF0aC5jb3MocmFkaWFucykgKiBhbW91bnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGQob3RoZXIgOiBWZWN0b3IpXHJcbiAgICA6IFZlY3RvclxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCArPSBvdGhlci54O1xyXG4gICAgICAgIHRoaXMueSArPSBvdGhlci55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3VidHJhY3Qob3RoZXIgOiBWZWN0b3IpXHJcbiAgICA6IFZlY3RvclxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCAtPSBvdGhlci54O1xyXG4gICAgICAgIHRoaXMueSAtPSBvdGhlci55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgZGl2aWRlKHNjYWxhciA6IG51bWJlcilcclxuICAgIDogVmVjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54IC89IHNjYWxhcjtcclxuICAgICAgICB0aGlzLnkgLz0gc2NhbGFyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgcm90YXRlKGFuZ2xlRGVncmVlcyA6IG51bWJlcilcclxuICAgIDogVmVjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgaWYoYW5nbGVEZWdyZWVzID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJhZGlhbnMgPSBhbmdsZURlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIGxldCB0eCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggKiBNYXRoLmNvcyhyYWRpYW5zKSAtIHRoaXMueSAqIE1hdGguc2luKHJhZGlhbnMpO1xyXG4gICAgICAgIHRoaXMueSA9IHR4ICogTWF0aC5zaW4ocmFkaWFucykgKyB0aGlzLnkgKiBNYXRoLmNvcyhyYWRpYW5zKTsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgVmVjdG9yIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50X3NyYy9WZWN0b3IudHMiLCIvKlxyXG5Db2xvciBEZWZpbml0aW9ucyBmcm9tIFB1enpsZXNjcmlwdCwgd2hpY2ggaXMgcHJvdmlkZWQgdW5kZXIgdGhlIGZvbGxvd2luZyBsaWNlbnNlXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblxyXG5Db3B5cmlnaHQgKGMpIDIwMTMgU3RlcGhlbiBMYXZlbGxlXHJcblxyXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cclxuKi9cclxuZXhwb3J0IGNsYXNzIENvbG9yXHJcbntcclxuICAgIHB1YmxpYyByIDogbnVtYmVyO1xyXG4gICAgcHVibGljIGcgOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYiA6IG51bWJlcjtcclxuICAgIC8vIGNvbG9yIGFjY2Vzc29yc1xyXG4gICAgc3RhdGljIGdldCBibGFjaygpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUuYmxhY2spIH1cclxuICAgIHN0YXRpYyBnZXQgd2hpdGUoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLndoaXRlKSB9XHJcbiAgICBzdGF0aWMgZ2V0IGdyZXkoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmdyZXkpIH1cclxuICAgIHN0YXRpYyBnZXQgZGFya2dyZXkoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmRhcmtncmV5KSB9XHJcbiAgICBzdGF0aWMgZ2V0IGxpZ2h0Z3JleSgpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUubGlnaHRncmV5KSB9XHJcbiAgICBzdGF0aWMgZ2V0IGdyYXkoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmdyZXkpIH1cclxuICAgIHN0YXRpYyBnZXQgZGFya2dyYXkoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmRhcmtncmV5KSB9XHJcbiAgICBzdGF0aWMgZ2V0IGxpZ2h0Z3JheSgpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUubGlnaHRncmV5KSB9XHJcbiAgICBzdGF0aWMgZ2V0IHJlZCgpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUucmVkKSB9XHJcbiAgICBzdGF0aWMgZ2V0IGRhcmtyZWQoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmRhcmtyZWQpIH1cclxuICAgIHN0YXRpYyBnZXQgbGlnaHRyZWQoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmxpZ2h0cmVkKSB9XHJcbiAgICBzdGF0aWMgZ2V0IGJyb3duKCkgOiBDb2xvciB7IHJldHVybiBDb2xvci5oZXhUb1JnYihDb2xvci5jdXJyZW50UGFsZXR0ZS5icm93bikgfVxyXG4gICAgc3RhdGljIGdldCBkYXJrYnJvd24oKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmRhcmticm93bikgfVxyXG4gICAgc3RhdGljIGdldCBsaWdodGJyb3duKCkgOiBDb2xvciB7IHJldHVybiBDb2xvci5oZXhUb1JnYihDb2xvci5jdXJyZW50UGFsZXR0ZS5saWdodGJyb3duKSB9XHJcbiAgICBzdGF0aWMgZ2V0IGdyZWVuKCkgOiBDb2xvciB7IHJldHVybiBDb2xvci5oZXhUb1JnYihDb2xvci5jdXJyZW50UGFsZXR0ZS5ncmVlbikgfVxyXG4gICAgc3RhdGljIGdldCBkYXJrZ3JlZW4oKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmRhcmtncmVlbikgfVxyXG4gICAgc3RhdGljIGdldCBsaWdodGdyZWVuKCkgOiBDb2xvciB7IHJldHVybiBDb2xvci5oZXhUb1JnYihDb2xvci5jdXJyZW50UGFsZXR0ZS5saWdodGdyZWVuKSB9XHJcbiAgICBzdGF0aWMgZ2V0IGJsdWUoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmJsdWUpIH1cclxuICAgIHN0YXRpYyBnZXQgZGFya2JsdWUoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLmRhcmtibHVlKSB9XHJcbiAgICBzdGF0aWMgZ2V0IGxpZ2h0Ymx1ZSgpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUubGlnaHRibHVlKSB9XHJcbiAgICBzdGF0aWMgZ2V0IG9yYW5nZSgpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUub3JhbmdlKSB9XHJcbiAgICBzdGF0aWMgZ2V0IHllbGxvdygpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUueWVsbG93KSB9XHJcbiAgICBzdGF0aWMgZ2V0IHB1cnBsZSgpIDogQ29sb3IgeyByZXR1cm4gQ29sb3IuaGV4VG9SZ2IoQ29sb3IuY3VycmVudFBhbGV0dGUucHVycGxlKSB9XHJcbiAgICBzdGF0aWMgZ2V0IHBpbmsoKSA6IENvbG9yIHsgcmV0dXJuIENvbG9yLmhleFRvUmdiKENvbG9yLmN1cnJlbnRQYWxldHRlLnBpbmspIH1cclxuICAgIHN0YXRpYyBhcm5lY29sb3JzIDphbnkgPSB7XHJcbiAgICAgICAgYmxhY2sgICBcdFx0OiBcIiMwMDAwMDBcIixcclxuICAgICAgICB3aGl0ZVx0XHRcdDogXCIjRkZGRkZGXCIsXHJcbiAgICAgICAgZ3JleVx0XHRcdDogXCIjOWQ5ZDlkXCIsXHJcbiAgICAgICAgZGFya2dyZXlcdFx0OiBcIiM2OTcxNzVcIixcclxuICAgICAgICBsaWdodGdyZXlcdFx0OiBcIiNjY2NjY2NcIixcclxuICAgICAgICBncmF5XHRcdFx0OiBcIiM5ZDlkOWRcIixcclxuICAgICAgICBkYXJrZ3JheVx0XHQ6IFwiIzY5NzE3NVwiLFxyXG4gICAgICAgIGxpZ2h0Z3JheVx0XHQ6IFwiI2NjY2NjY1wiLFxyXG4gICAgICAgIHJlZFx0XHRcdFx0OiBcIiNiZTI2MzNcIixcclxuICAgICAgICBkYXJrcmVkXHRcdFx0OiBcIiM3MzI5MzBcIixcclxuICAgICAgICBsaWdodHJlZFx0XHQ6IFwiI2UwNmY4YlwiLFxyXG4gICAgICAgIGJyb3duXHRcdFx0OiBcIiNhNDY0MjJcIixcclxuICAgICAgICBkYXJrYnJvd25cdFx0OiBcIiM0OTNjMmJcIixcclxuICAgICAgICBsaWdodGJyb3duXHRcdDogXCIjZWViNjJmXCIsXHJcbiAgICAgICAgb3JhbmdlXHRcdFx0OiBcIiNlYjg5MzFcIixcclxuICAgICAgICB5ZWxsb3cgXHRcdFx0OiBcIiNmN2UyNmJcIixcclxuICAgICAgICBncmVlblx0XHRcdDogXCIjNDQ4OTFhXCIsXHJcbiAgICAgICAgZGFya2dyZWVuXHRcdDogXCIjMmY0ODRlXCIsXHJcbiAgICAgICAgbGlnaHRncmVlblx0XHQ6IFwiI2EzY2UyN1wiLFxyXG4gICAgICAgIGJsdWVcdFx0XHQ6IFwiIzFkNTdmN1wiLFxyXG4gICAgICAgIGxpZ2h0Ymx1ZVx0XHQ6IFwiI0IyRENFRlwiLFxyXG4gICAgICAgIGRhcmtibHVlXHRcdDogXCIjMUIyNjMyXCIsXHJcbiAgICAgICAgcHVycGxlXHRcdFx0OiBcIiMzNDJhOTdcIixcclxuICAgICAgICBwaW5rXHRcdFx0OiBcIiNkZTY1ZTJcIlxyXG4gICAgfVxyXG4gICAgc3RhdGljIGN1cnJlbnRQYWxldHRlIDogYW55ID0gQ29sb3IuYXJuZWNvbG9ycztcclxuICAgIGNvbnN0cnVjdG9yKHIgOiBudW1iZXIsIGcgOiBudW1iZXIsIGIgOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yID0gcjtcclxuICAgICAgICB0aGlzLmcgPSBnO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIGhleFRvUmdiKGhleDpzdHJpbmcpXHJcbiAgICA6IChDb2xvciB8IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgPyBuZXcgQ29sb3IoXHJcbiAgICAgICAgICAgIHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLzI1NS4wLFxyXG4gICAgICAgICAgICBwYXJzZUludChyZXN1bHRbMl0sIDE2KS8yNTUuMCxcclxuICAgICAgICAgICAgcGFyc2VJbnQocmVzdWx0WzNdLCAxNikvMjU1LjBcclxuICAgICAgICAgKSA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBydmFsIDogbnVtYmVyID0gdGhpcy5yKjI1NS4wO1xyXG4gICAgICAgIGxldCBndmFsIDogbnVtYmVyID0gdGhpcy5nKjI1NS4wO1xyXG4gICAgICAgIGxldCBidmFsIDogbnVtYmVyID0gdGhpcy5iKjI1NS4wO1xyXG4gICAgICAgIHJldHVybiBgcmdiKCR7cnZhbH0sICR7Z3ZhbH0sICR7YnZhbH0pYDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudF9zcmMvQ29sb3IudHMiLCJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9EaXNwbGF5XCI7XHJcbmltcG9ydCB7IEFjdG9yLCBUZXh0QWN0b3IgfSBmcm9tIFwiLi9BY3RvclwiO1xyXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi9Db25maWdcIjtcclxuaW1wb3J0IHsgTW91c2UgfSBmcm9tIFwiLi9Nb3VzZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IHsgS2V5Ym9hcmQgfSBmcm9tIFwiLi9LZXlib2FyZFwiXHJcbmltcG9ydCB7IExlYWRlcmJvYXJkIH0gZnJvbSBcIi4vTGVhZGVyYm9hcmRcIjtcclxuaW1wb3J0IFwiLi9FeHRlbnNpb25zXCI7XHJcblxyXG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lV3JhcHBlciA9XHJcblx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZVx0ICAgfHxcclxuXHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XHJcbiAgICBmdW5jdGlvbihjYWxsYmFjaylcclxuICAgIHtcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgR2FtZS5JTlRFUlZBTCAvIDIpXHJcbiAgICB9XHJcbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSAoY2FsbGJhY2spID0+XHJcbntcclxuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWVXcmFwcGVyKGNhbGxiYWNrKVxyXG59XHJcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ2MDI1NDg3L2NyZWF0ZS1leHRlbmRhYmxlLWVudW1zLWZvci11c2UtaW4tZXh0ZW5kYWJsZS1pbnRlcmZhY2VzXHJcbnR5cGUgR2FtZVN0YXRlRW51bTxUIGV4dGVuZHMgc3RyaW5nPiA9IHtbSyBpbiBUXTogS307XHJcbi8vIGNyZWF0ZSBhbiBlbnVtIGZyb20gZ2l2ZW4gdmFsdWVzXHJcbmZ1bmN0aW9uIG1ha2VFbnVtPFQgZXh0ZW5kcyBzdHJpbmc+KC4uLnZhbHM6IFRbXSk6IEdhbWVTdGF0ZUVudW08VD4ge1xyXG4gICAgY29uc3QgcmV0ID0ge30gYXMgR2FtZVN0YXRlRW51bTxUPjtcclxuICAgIHZhbHMuZm9yRWFjaChrID0+IHJldFtrXSA9IGspXHJcbiAgICByZXR1cm4gcmV0O1xyXG59XHJcbiAgXHJcbiAgLy8gdGFrZSBhbiBleGlzdGluZyBlbnVtIGFuZCBleHRlbmQgaXQgd2l0aCBtb3JlIHZhbHVlc1xyXG5mdW5jdGlvbiBleHRlbmRFbnVtPFQgZXh0ZW5kcyBzdHJpbmcsIFUgZXh0ZW5kcyBzdHJpbmc+KFxyXG4gICAgZmlyc3RFbnVtOiBHYW1lU3RhdGVFbnVtPFQ+LCAuLi52YWxzOiBVW10pOiBHYW1lU3RhdGVFbnVtPFQgfCBVPlxyXG57XHJcbiAgICByZXR1cm4gKDxhbnk+T2JqZWN0KS5hc3NpZ24obWFrZUVudW0oLi4udmFscyksIGZpcnN0RW51bSkgYXMgYW55OyAgXHJcbn1cclxuY29uc3QgR2FtZVN0YXRlID0gbWFrZUVudW0oXCJ0aXRsZVwiLCBcImdhbWVcIik7XHJcbnR5cGUgR2FtZVN0YXRlID0gdHlwZW9mIEdhbWVTdGF0ZTtcclxuXHJcbmNsYXNzIEdhbWVcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBJTlRFUlZBTCA6IG51bWJlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzcGxheTogRGlzcGxheTtcclxuICAgIHByaXZhdGUgY3VycmVudFRpbWUgOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwcmV2aW91c1RpbWUgOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBkZWx0YSA6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgc2NvcmUgOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGxhc3RTY29yZSA6IG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIGhpZ2hTY29yZSA6IG51bWJlciA9IC0xO1xyXG4gICAgcHVibGljIHRpY2tzIDogbnVtYmVyID0gMDtcclxuICAgIGN1cnJlbnRTdGF0ZSA9IEdhbWVTdGF0ZS50aXRsZTtcclxuICAgIHB1YmxpYyBnZXQgZ2FtZU92ZXIoKSB7IHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZSE9R2FtZVN0YXRlLmdhbWU7IH1cclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBpZih3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oQ29uZmlnLnNhdmVOYW1lKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlnaFNjb3JlID0gTnVtYmVyKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25maWcuc2F2ZU5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgR2FtZS5JTlRFUlZBTCA9IDEwMDAvQ29uZmlnLmZwcztcclxuICAgICAgICBHYW1lLmRpc3BsYXkgPSBuZXcgRGlzcGxheSgpO1xyXG4gICAgICAgIE1vdXNlLmluaXRpYWxpemUoKTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25Ub1RpdGxlKCk7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lKSA9PiB7dGhpcy51cGRhdGVGcmFtZSh0aW1lKX0pO1xyXG4gICAgfVxyXG4gICAgdHJhbnNpdGlvblRvVGl0bGUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCB0eSA9IChDb25maWcudGl0bGUubGVuZ3RoID09IDEpPy4yOi4xNTtcclxuICAgICAgICBuZXcgVGV4dEFjdG9yKENvbmZpZy50aXRsZSkuc2V0UG9zaXRpb24obmV3IFZlY3RvciguNSwgdHkpKS5zZXREdXJhdGlvbkZvcmV2ZXIoKS5zY2FsZSA9IG5ldyBWZWN0b3IoMiwyKTtcclxuICAgICAgICBuZXcgVGV4dEFjdG9yKCdbIFNQQUNFIF0gVE8gU1RBUlQnKS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKC41LCAuNykpLnNldER1cmF0aW9uRm9yZXZlcigpXHJcbiAgICAgICAgaWYodGhpcy5sYXN0U2NvcmUgPj0gMClcclxuICAgICAgICB7ICAgICAgICBcclxuICAgICAgICAgICAgbmV3IFRleHRBY3RvcihgTEFTVCBTQ09SRTogJHt0aGlzLmxhc3RTY29yZX1gKS5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKC41LCAuOCkpLnNldER1cmF0aW9uRm9yZXZlcigpXHJcbiAgICAgICAgICAgIExlYWRlcmJvYXJkLnNldCh0aGlzLnNjb3JlKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5oaWdoU2NvcmUgPj0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGFzdFNjb3JlICE9IHRoaXMuaGlnaFNjb3JlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZXcgVGV4dEFjdG9yKGBZT1VSIEhJR0ggU0NPUkU6ICR7dGhpcy5oaWdoU2NvcmV9YCkuc2V0UG9zaXRpb24obmV3IFZlY3RvciguNSwgLjg1KSkuc2V0RHVyYXRpb25Gb3JldmVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuZXcgVGV4dEFjdG9yKGBORVcgSElHSCBTQ09SRSEhIWApLnNldFBvc2l0aW9uKG5ldyBWZWN0b3IoLjUsIC44NSkpLnNldER1cmF0aW9uRm9yZXZlcigpICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZW5kR2FtZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXN0U2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIGlmKHRoaXMubGFzdFNjb3JlID4gMCAmJiB0aGlzLmxhc3RTY29yZSA+IHRoaXMuaGlnaFNjb3JlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5oaWdoU2NvcmUgPSB0aGlzLmxhc3RTY29yZTtcclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbmZpZy5zYXZlTmFtZSwgdGhpcy5oaWdoU2NvcmUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudHJhbnNpdGlvblRvVGl0bGUoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IEdhbWVTdGF0ZS50aXRsZTtcclxuICAgICAgICB0aGlzLm9uRW5kR2FtZSgpO1xyXG4gICAgfVxyXG4gICAgdHJhbnNpdGlvblRvR2FtZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBHYW1lU3RhdGUuZ2FtZTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICBBY3Rvci5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMub25CZWdpbkdhbWUoKTtcclxuICAgIH1cclxuICAgIC8vIG92ZXJyaWRlXHJcbiAgICBvbkJlZ2luR2FtZSgpe31cclxuICAgIG9uRW5kR2FtZSgpe31cclxuICAgIHVwZGF0ZSgpIHt9XHJcbiAgICB1cGRhdGVUaXRsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoS2V5Ym9hcmQua2V5RG93bltLZXlib2FyZC5TUEFDRV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Ub0dhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcmVVcGRhdGVGcmFtZSh0aW1lIDogYW55KVxyXG4gICAgOmJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZih0aW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWx0YSArPSAodGhpcy5jdXJyZW50VGltZSAtIHRoaXMucHJldmlvdXNUaW1lKSAvIEdhbWUuSU5URVJWQUw7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIGlmKHRoaXMuZGVsdGEgPj0gMC43NSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHt0aGlzLnVwZGF0ZUZyYW1lKHRpbWUpfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlRnJhbWUodGltZSA6IGFueSlcclxuICAgIHtcclxuICAgICAgICBpZighdGhpcy5wcmVVcGRhdGVGcmFtZSh0aW1lKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgR2FtZS5kaXNwbGF5LnByZVVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMudGlja3MrKztcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIEFjdG9yLnVwZGF0ZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFN0YXRlID09IEdhbWVTdGF0ZS50aXRsZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGl0bGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgR2FtZS5kaXNwbGF5LmRyYXdUZXh0KGBTQ09SRTogJHt0aGlzLnNjb3JlfWAsIDEsMCwxKTtcclxuICAgICAgICB0aGlzLnBvc3RVcGRhdGVGcmFtZSgpO1xyXG4gICAgfVxyXG4gICAgcG9zdFVwZGF0ZUZyYW1lKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmRlbHRhID0gMDtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKHRpbWUpID0+IHt0aGlzLnVwZGF0ZUZyYW1lKHRpbWUpfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIHRlc3QgZ2FtZSwgc2hvdWxkIG1vdmUgdGhpcyBlbHNld2hlcmUuLi5cclxuXHJcblxyXG5leHBvcnQgeyBHYW1lIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50X3NyYy9HYW1lLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4vQ29uZmlnXCI7XHJcbmltcG9ydCB7IFRleHREcmF3ZXIgfSBmcm9tIFwiLi9EcmF3aW5nXCJcclxuZXhwb3J0IGNsYXNzIERpc3BsYXlcclxue1xyXG4gICAgc3RhdGljIGVsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBzdGF0aWMgc2l6ZSA6IFZlY3RvciA9IG5ldyBWZWN0b3IoMCwwKTtcclxuICAgIHByaXZhdGUgcmVzaXplVGltZXIgOiBhbnk7XHJcbiAgICBwcml2YXRlIHRleHREcmF3ZXIgOiBUZXh0RHJhd2VyID0gbmV3IFRleHREcmF3ZXIoKTtcclxuICAgIGNvbnN0cnVjdG9yKClcclxuICAgIHtcclxuICAgICAgICBsZXQgZGlzcGxheUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpc3BsYXlcIik7XHJcbiAgICAgICAgRGlzcGxheS5lbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRpc3BsYXlFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IERpc3BsYXkuZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLnJlc2l6ZVRpbWVyKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQodGhpcy5zZXRTaXplLCAyMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFNpemUoKTtcclxuICAgIH1cclxuICAgIHNldFNpemUoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBjbGllbnRXaWR0aCA9IERpc3BsYXkuZWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBEaXNwbGF5LmVsZW1lbnQud2lkdGggPSBEaXNwbGF5LmVsZW1lbnQuaGVpZ2h0ID0gY2xpZW50V2lkdGggXHJcbiAgICAgICAgRGlzcGxheS5zaXplLnNldChjbGllbnRXaWR0aCwgY2xpZW50V2lkdGgpO1xyXG4gICAgfVxyXG4gICAgY2xlYXIoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBDb25maWcuYmFja2dyb3VuZENvbG9yLnRvU3RyaW5nKClcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwwLERpc3BsYXkuc2l6ZS54LCBEaXNwbGF5LnNpemUueSk7XHJcbiAgICB9XHJcbiAgICBwcmVVcGRhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGZpbGxSZWN0KHggOiBudW1iZXIseSA6IG51bWJlcix3aWR0aCA6IG51bWJlcixoZWlnaHQgOiBudW1iZXIsIGNvbG9yIDogQ29sb3IgPSBDb2xvci53aGl0ZSlcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3IudG9TdHJpbmcoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoXHJcbiAgICAgICAgICAgICh4LXdpZHRoLzIpICogRGlzcGxheS5zaXplLngsXHJcbiAgICAgICAgICAgICh5LWhlaWdodCAvIDIpICogRGlzcGxheS5zaXplLnksXHJcbiAgICAgICAgICAgIHdpZHRoICogRGlzcGxheS5zaXplLngsXHJcbiAgICAgICAgICAgIGhlaWdodCAqIERpc3BsYXkuc2l6ZS55XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGZpbGxSZWN0RGlyZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yID0gQ29sb3Iud2hpdGUpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgZHJhd1RleHQodGV4dCA6IHN0cmluZywgeCA6IG51bWJlciwgeSA6IG51bWJlciwgYWxpZ25YID0gLTEsIGFsaWduWSA9IC0xLCBjb2xvciA9IENvbG9yLndoaXRlLCBzY2FsZSA9IDEpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50ZXh0RHJhd2VyLnNldFNpemUoRGlzcGxheS5zaXplKTtcclxuICAgICAgICB0cnlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dERyYXdlci5kcmF3U3RyaW5nKHRleHQsIHgsIHksIGFsaWduWCwgYWxpZ25ZLCBjb2xvciwgc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaChlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50X3NyYy9EaXNwbGF5LnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5cclxuY2xhc3MgQ29uZmlnXHJcbntcclxuICAgIHN0YXRpYyBmcHM6IG51bWJlciA9IDYwO1xyXG4gICAgc3RhdGljIGJhY2tncm91bmRDb2xvciA6IENvbG9yID0gQ29sb3IuYmxhY2s7XHJcbiAgICBzdGF0aWMgc291bmRUZW1wbyA6IG51bWJlciA9IDEyMDtcclxuICAgIHN0YXRpYyBzb3VuZFZvbHVtZSA6IG51bWJlciA9IDAuMDI7XHJcbiAgICBzdGF0aWMgZGVidWdNb2RlIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzdGF0aWMgdGl0bGUgOiBzdHJpbmcgPSBcIkdBTUUgVElUTEVcIjtcclxuICAgIHN0YXRpYyBzYXZlTmFtZSA6IHN0cmluZyA9IFwiV29ybWRyaXZlM2hzXCJcclxufVxyXG5leHBvcnQgeyBDb25maWcgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudF9zcmMvQ29uZmlnLnRzIiwiaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiLi9Db2xvclwiO1xyXG5pbXBvcnQgeyBBY3RvciB9IGZyb20gXCIuL0FjdG9yXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL1ZlY3RvclwiO1xyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vRGlzcGxheVwiO1xyXG5jbGFzcyBUZXh0RHJhd2VyXHJcbntcclxuICAgIHN0YXRpYyBDT1VOVCA6IG51bWJlciA9IDY2XHJcbiAgICBkb3RQYXR0ZXJucyA6IFZlY3RvcltdW10gPSBbXTtcclxuICAgIGNoYXJUb0luZGV4IDogbnVtYmVyW10gPSBbXTtcclxuICAgIHN0YXRpYyBwYXR0ZXJucyA6IG51bWJlcltdID0gW1xyXG4gICAgICAgIDB4NDY0NEFBQTQsIDB4NkYyNDk2RTQsIDB4RjU2NDY5NDksIDB4MTY3ODcxRjQsIDB4MjQ4OUY2OTcsXHJcbiAgICAgICAgMHhFOTY2OTY5NiwgMHg3OUY5OTY2OCwgMHg5MTk2Nzk3OSwgMHgxRjc5OTk3NiwgMHgxMTcxRkYxNyxcclxuICAgICAgICAweEY5OUVEMTk2LCAweEVFNDQ0RTk5LCAweDUzNTkyNTQ0LCAweEY5RjExMTE5LCAweDlEREI5OTk5LFxyXG4gICAgICAgIDB4Nzk3Njk5OTYsIDB4N0VEOTk2MTEsIDB4ODYxRTk5NzksIDB4OTk0NDQ0RTcsIDB4NDY2OTk2OTksXHJcbiAgICAgICAgMHg2OTk2RkQ5OSwgMHhGNDQ2OTk5OSwgMHgyMjI0RjI0OCwgMHgyNjI0NDQyNCwgMHg2NDQ0NjYyMixcclxuICAgICAgICAweDg0Mjg0MjQ4LCAweDQwRjBGMDI0LCAweDBGMDA0NEU0LCAweDQ4MEE0RTQwLCAweDlBNDU5MTI0LFxyXG4gICAgICAgIDB4MDAwQTVBMTYsIDB4NjQwNDQ0RjAsIDB4ODAwMDQwNDksIDB4NDA0MDAwMDQsIDB4NDQ0NDQwNDAsXHJcbiAgICAgICAgMHgwQUEwMDA0NCwgMHg2NDc2RTQwMCwgMHhGQUZBNjFEOSwgMHhFNDRFNEVBQSwgMHgyNEY0MjQ0NSxcclxuICAgICAgICAweEYyNDRFNTQ0LCAweDAwMDAwMDQyXHJcbiAgICAgICAgXVxyXG4gICAgYmFzZURvdFNpemUgPSAxO1xyXG4gICAgY29uc3RydWN0b3IoKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBwID0gMFxyXG4gICAgICAgIGxldCBkID0gMzJcclxuICAgICAgICBsZXQgcEluZGV4ID0gMFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IFRleHREcmF3ZXIuQ09VTlQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZG90cyA6IFZlY3RvcltdID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPD0gNDsgaysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGQgPj0gMzIpXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwID0gVGV4dERyYXdlci5wYXR0ZXJuc1twSW5kZXgrK11cclxuICAgICAgICAgICAgICAgICAgICAgICAgZCA9IDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHAgJiAxKSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzLnB1c2gobmV3IFZlY3RvcihrLCBqKSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwID4+PSAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kb3RQYXR0ZXJucy5wdXNoKGRvdHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGFyU3RyID0gXCIoKVtdPD49Ky0qLyUmXyE/LC46fCdcXFwiJEAjXFxcXHVyZGxcIlxyXG4gICAgICAgIGZvcihsZXQgYyA9MDtjPD0xMjc7YysrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGxpO1xyXG4gICAgICAgICAgICBpZihjPT0zMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGkgPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKDQ4IDw9IGMgJiYgYyA8IDU4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsaSA9IGMtNDg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZig2NSA8PSBjICYmIGMgPCA5MClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGkgPSBjLTY1KzEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNpID0gY2hhclN0ci5pbmRleE9mKFN0cmluZy5mcm9tQ2hhckNvZGUoYykpXHJcbiAgICAgICAgICAgICAgICBpZihjaSA+PSAwKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpID0gY2krMzY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkgPSAtMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvSW5kZXgucHVzaChsaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZHJhd1N0cmluZyh0ZXh0IDogc3RyaW5nLCB4LCB5LCB4QWxpZ24sIHlBbGlnbiwgY29sb3IgOiBDb2xvciwgc2NhbGUgOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHR4ID0gTWF0aC5mbG9vcih4ICogRGlzcGxheS5zaXplLngpXHJcblx0XHRsZXQgdHkgPSBNYXRoLmZsb29yKHkgKiBEaXNwbGF5LnNpemUueSlcclxuXHRcdGxldCBzaXplID0gdGhpcy5iYXNlRG90U2l6ZSAqIHNjYWxlO1xyXG5cdFx0bGV0IGx3ID0gc2l6ZSAqIDU7XHJcbiAgICAgICAgaWYoeEFsaWduID09IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0eCAtPSBNYXRoLmZsb29yKHRleHQubGVuZ3RoICogbHcgLyAyKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHhBbGlnbiA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdHggLT0gTWF0aC5mbG9vcih0ZXh0Lmxlbmd0aCAqIGx3KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih5QWxpZ24gPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5IC09IE1hdGguZmxvb3Ioc2l6ZSAqIDMuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSB0ZXh0W2ldO1xyXG4gICAgICAgICAgICBsZXQgbGkgPSB0aGlzLmNoYXJUb0luZGV4W2MuY2hhckNvZGVBdCgwKV07XHJcbiAgICAgICAgICAgIGlmKGxpID49IDApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0RvdHMobGksIHR4LCB0eSwgY29sb3IsIHNpemUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihsaSA9PSAtMilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgYGludmFsaWQgY2hhcjogJHtjfWBcclxuICAgICAgICAgICAgfVx0XHJcblx0XHRcdHR4ICs9IGx3ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZHJhd0RvdHMobGksIHgsIHksIGNvbG9yLCBzaXplKVxyXG4gICAge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kb3RQYXR0ZXJuc1tsaV0ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuZG90UGF0dGVybnNbbGldW2ldO1xyXG4gICAgICAgICAgICBHYW1lLmRpc3BsYXkuZmlsbFJlY3REaXJlY3QoeCArIHAueCAqIHNpemUsIHkgKyBwLnkgKiBzaXplLFxyXG4gICAgICAgICAgICAgICAgc2l6ZSwgc2l6ZSwgY29sb3IpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFNpemUoc2l6ZSA6IFZlY3RvcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJhc2VEb3RTaXplID0gTWF0aC5mbG9vcigoTWF0aC5taW4oc2l6ZS54LCBzaXplLnkpKSAvIDI1MCArIDEpLmNsYW1wKDEsIDIwKVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuY2xhc3MgRHJhd2luZ1JlY3Rcclxue1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UG9zaXRpb24gOiBWZWN0b3IgPSBuZXcgVmVjdG9yKDAsMCk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRTaXplIDogVmVjdG9yID0gbmV3IFZlY3RvcigwLDApO1xyXG4gICAgcHJpdmF0ZVxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGNvbG9yIDogQ29sb3IsXHJcbiAgICAgICAgcHVibGljIHdpZHRoIDogbnVtYmVyLFxyXG4gICAgICAgIHB1YmxpYyBoZWlnaHQgOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG9mZnNldFggOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIG9mZnNldFkgOiBudW1iZXIsXHJcbiAgICAgICAgcHVibGljIGhhc0NvbGxpc2lvbilcclxuICAgIHsgfVxyXG4gICAgdXBkYXRlU3RhdGUoZHJhd2luZyA6IERyYXdpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24uc2V0KHRoaXMub2Zmc2V0WCwgdGhpcy5vZmZzZXRZKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQb3NpdGlvbi5yb3RhdGUoZHJhd2luZy5yb3RhdGlvbik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24uYWRkKGRyYXdpbmcucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNpemUuc2V0KHRoaXMud2lkdGgqZHJhd2luZy5zY2FsZS54LCB0aGlzLmhlaWdodCpkcmF3aW5nLnNjYWxlLnkpO1xyXG4gICAgfVxyXG4gICAgZHJhdyhkcmF3aW5nIDogRHJhd2luZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKGRyYXdpbmcpO1xyXG4gICAgICAgIEdhbWUuZGlzcGxheS5maWxsUmVjdChcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24ueCxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24ueSxcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2l6ZS54LFxyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTaXplLnksXHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IpO1xyXG4gICAgfVxyXG4gICAgaXNPdmVybGFwcGluZyhvdGhlciA6IERyYXdpbmdSZWN0KVxyXG4gICAgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoIXRoaXMuaGFzQ29sbGlzaW9uIHx8ICFvdGhlci5oYXNDb2xsaXNpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnModGhpcy5jdXJyZW50UG9zaXRpb24ueCAtIG90aGVyLmN1cnJlbnRQb3NpdGlvbi54KSA8ICh0aGlzLmN1cnJlbnRTaXplLnggKyBvdGhlci5jdXJyZW50U2l6ZS54KSAvIDIgJiYgTWF0aC5hYnModGhpcy5jdXJyZW50UG9zaXRpb24ueSAtIG90aGVyLmN1cnJlbnRQb3NpdGlvbi55KSA8ICh0aGlzLmN1cnJlbnRTaXplLnkgKyBvdGhlci5jdXJyZW50U2l6ZS55KSAvIDI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERyYXdpbmdcclxue1xyXG4gICAgc3RhdGljIFJlY3RQYXJhbSA9IGNsYXNzIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZSA6IHN0cmluZywgcHVibGljIHdpZHRoIDogbnVtYmVyLCBwdWJsaWMgaGVpZ2h0IDogbnVtYmVyLCBwdWJsaWMgb2Zmc2V0WCA6IG51bWJlciwgcHVibGljIG9mZnNldFkgOiBudW1iZXIsIHB1YmxpYyBhbmdsZSA6IG51bWJlcj0wKSB7fVxyXG4gICAgfVxyXG4gICAgcG9zaXRpb24gOiBWZWN0b3IgPSBuZXcgVmVjdG9yKDAsMCk7XHJcbiAgICByb3RhdGlvbiA6IG51bWJlciA9IDA7XHJcbiAgICBzY2FsZSA6IFZlY3RvciA9IG5ldyBWZWN0b3IoMSwxKTsgXHJcbiAgICBwcml2YXRlIHJlY3RzIDogRHJhd2luZ1JlY3RbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjb2xvciA6IENvbG9yO1xyXG4gICAgaGFzQ29sbGlzaW9uIDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcml2YXRlIGxhc3RBZGRlZCA6IGFueTtcclxuICAgIHNldENvbG9yKGNvbG9yIDogQ29sb3IpXHJcbiAgICA6IERyYXdpbmdcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBhZGRSZWN0KHdpZHRoIDogbnVtYmVyLCBoZWlnaHQgOiBudW1iZXIgPSAwLCBvZmZzZXRYIDogbnVtYmVyID0gMCwgb2Zmc2V0WSA6IG51bWJlciA9IDApXHJcbiAgICA6IERyYXdpbmdcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlY3RzLnB1c2gobmV3IERyYXdpbmdSZWN0KFxyXG4gICAgICAgICAgICB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0PT0wP3dpZHRoOmhlaWdodCxcclxuICAgICAgICAgICAgb2Zmc2V0WCxcclxuICAgICAgICAgICAgb2Zmc2V0WSxcclxuICAgICAgICAgICAgdGhpcy5oYXNDb2xsaXNpb24pKTtcclxuICAgICAgICB0aGlzLmxhc3RBZGRlZCA9IG5ldyBEcmF3aW5nLlJlY3RQYXJhbShcclxuICAgICAgICAgICAgJ3JlY3QnLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0PT0wP3dpZHRoOmhlaWdodCxcclxuICAgICAgICAgICAgb2Zmc2V0WCxcclxuICAgICAgICAgICAgb2Zmc2V0WSxcclxuICAgICAgICApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgYWRkU2VnZW1lbnRlZFJlY3Qod2lkdGggOiBudW1iZXIsIGhlaWdodCA6IG51bWJlciA9IDAsIG9mZnNldFggOiBudW1iZXIgPSAwLCBvZmZzZXRZIDogbnVtYmVyID0gMCwgYW5nbGUgOiBudW1iZXIgPSAwKVxyXG4gICAgOiBEcmF3aW5nXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5sYXN0QWRkZWQgPSBuZXcgRHJhd2luZy5SZWN0UGFyYW0oXHJcbiAgICAgICAgICAgICdzZWdtZW50ZWRSZWN0JyxcclxuICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodD09MD93aWR0aDpoZWlnaHQsXHJcbiAgICAgICAgICAgIG9mZnNldFgsXHJcbiAgICAgICAgICAgIG9mZnNldFksXHJcbiAgICAgICAgICAgIGFuZ2xlXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgbGV0IHJhZGlhbnMgPSBhbmdsZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgaWYod2lkdGggPiBoZWlnaHQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByYWRpYW5zICs9IE1hdGguUEkgLyAyO1xyXG4gICAgICAgICAgICBsZXQgdHdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIHdpZHRoID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBoZWlnaHQgPSB0d2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHdpZHRoIDwgMC4wMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbiA9IE1hdGguZmxvb3IoaGVpZ2h0L3dpZHRoKTtcclxuICAgICAgICBsZXQgbyA9IC13aWR0aCAqIChuLTEpLzI7XHJcbiAgICAgICAgbGV0IHZvID0gd2lkdGg7XHJcbiAgICAgICAgd2lkdGggKj0gMS4wNTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPCBuOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJlY3RzLnB1c2gobmV3IERyYXdpbmdSZWN0KFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICAgICAgd2lkdGgsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnNpbihyYWRpYW5zKSAqIG8gKyBvZmZzZXRYLFxyXG4gICAgICAgICAgICAgICAgTWF0aC5jb3MocmFkaWFucykgKiBvICsgb2Zmc2V0WSxcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ29sbGlzaW9uKSk7XHJcbiAgICAgICAgICAgIG8rPXZvO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGFkZEFyYyhhbmdsZSA6IG51bWJlciwgY291bnQgOiBudW1iZXIgPSAxKVxyXG4gICAgOiBEcmF3aW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9mZnNldCA9IG5ldyBWZWN0b3IodGhpcy5sYXN0QWRkZWQub2Zmc2V0WCwgdGhpcy5sYXN0QWRkZWQub2Zmc2V0WSk7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRBbmdsZSA9IHRoaXMubGFzdEFkZGVkLmFuZ2xlO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8Y291bnQ7aSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgb2Zmc2V0LnJvdGF0ZShhbmdsZSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubGFzdEFkZGVkLnR5cGUgPT0gJ3JlY3QnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFJlY3QodGhpcy5sYXN0QWRkZWQud2lkdGgsIHRoaXMubGFzdEFkZGVkLmhlaWdodCwgb2Zmc2V0LngsIG9mZnNldC55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRBbmdsZSAtPSBhbmdsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkU2VnZW1lbnRlZFJlY3QodGhpcy5sYXN0QWRkZWQud2lkdGgsIHRoaXMubGFzdEFkZGVkLmhlaWdodCwgb2Zmc2V0LngsIG9mZnNldC55LCBjdXJyZW50QW5nbGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbWlycm9yWCgpXHJcbiAgICA6IERyYXdpbmdcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmxhc3RBZGRlZC50eXBlID09ICdyZWN0JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVjdChcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEFkZGVkLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0QWRkZWQuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLXRoaXMubGFzdEFkZGVkLm9mZnNldFgsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RBZGRlZC5vZmZzZXRZKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbWlycm9yWSgpXHJcbiAgICA6IERyYXdpbmdcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmxhc3RBZGRlZC50eXBlID09ICdyZWN0JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkUmVjdChcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdEFkZGVkLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0QWRkZWQuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0QWRkZWQub2Zmc2V0WCxcclxuICAgICAgICAgICAgICAgIC10aGlzLmxhc3RBZGRlZC5vZmZzZXRZKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU3RhdGUoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVjdHMuZm9yRWFjaChyZWN0ID0+IHtcclxuICAgICAgICAgICAgcmVjdC51cGRhdGVTdGF0ZSh0aGlzKTtcclxuICAgICAgICB9KTsgICAgXHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbih2OlZlY3RvcilcclxuICAgIDogRHJhd2luZ1xyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHYpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0Um90YXRpb24ocjpudW1iZXIpXHJcbiAgICA6IERyYXdpbmdcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIGRyYXcoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucmVjdHMuZm9yRWFjaChyZWN0ID0+IHtcclxuICAgICAgICAgICAgcmVjdC5kcmF3KHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaXNPdmVybGFwcGluZyhvdGhlciA6IERyYXdpbmcpXHJcbiAgICA6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucmVjdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRoaXMucmVjdHNbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3RoZXIucmVjdHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyUmVjdCA9IG90aGVyLnJlY3RzW2pdO1xyXG4gICAgICAgICAgICAgICAgaWYocmVjdC5pc092ZXJsYXBwaW5nKG90aGVyUmVjdCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IERyYXdpbmcsIFRleHREcmF3ZXIgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudF9zcmMvRHJhd2luZy50cyIsImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIjtcclxuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL0dhbWVcIjtcclxuaW1wb3J0IHsgRHJhd2luZyB9IGZyb20gXCIuL0RyYXdpbmdcIjtcclxuaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmNsYXNzIEFjdG9yR3JvdXBcclxue1xyXG4gICAgbmFtZSA6IHN0cmluZztcclxuICAgIG1lbWJlcnMgOiBBY3RvcltdO1xyXG4gICAgZGlzcGxheVByaW9yaXR5OiBudW1iZXIgPSAxO1xyXG4gICAgY29uc3RydWN0b3IobmFtZSA6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgIH1cclxuICAgIGNsZWFyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLm1lbWJlcnMgPSBbXTtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlKHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihpPj10aGlzLm1lbWJlcnMubGVuZ3RoKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYSA9IHRoaXMubWVtYmVyc1tpXTtcclxuICAgICAgICAgICAgaWYoIWEuaXNEZXN0cm95aW5nKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICBhLmxhdGVVcGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW1iZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBBY3RvclxyXG57XHJcbiAgICBwcml2YXRlIHN0YXRpYyBncm91cHMgOiBBY3Rvckdyb3VwW10gPSBbXTtcclxuICAgIHBvc2l0aW9uIDogVmVjdG9yO1xyXG4gICAgdmVsb2NpdHkgOiBWZWN0b3IgPSBuZXcgVmVjdG9yKDAsMCk7XHJcbiAgICByb3RhdGlvbiA6IG51bWJlciA9IDA7XHJcbiAgICBzY2FsZSA6IFZlY3RvcjtcclxuICAgIGRyYXdpbmcgOiBEcmF3aW5nO1xyXG4gICAgaXNEZXN0cm95aW5nIDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgYWdlIDogbnVtYmVyID0gMDtcclxuICAgIGdyb3VwIDogQWN0b3JHcm91cDtcclxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3M6IGFueVtdKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IG5ldyBEcmF3aW5nKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoMCwwKTtcclxuICAgICAgICB0aGlzLnNjYWxlID0gbmV3IFZlY3RvcigxLDEpO1xyXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSB0aGlzLmNvbnN0cnVjdG9yWyduYW1lJ107XHJcbiAgICAgICAgbGV0IGdyb3VwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQWN0b3IuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSBBY3Rvci5ncm91cHNbaV07XHJcbiAgICAgICAgICAgIGlmKGcubmFtZSA9PSBjbGFzc05hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gZztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFncm91cClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGdyb3VwID0gbmV3IEFjdG9yR3JvdXAoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgQWN0b3IuZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG4gICAgICAgICAgICAvLyBBY3Rvci5zb3J0R3JvdXBzKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaW5pdGlhbGl6ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyb3VwLm1lbWJlcnMucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5iZWdpbiguLi5hcmdzKVxyXG4gICAgICAgIC8vIGFmdGVyIGJlZ2luLCBmb3JjZSBhbiB1cGRhdGUgb2YgdGhlIGRyYXdpbmcgc3RhdGUsIHNvIHdlIGRvbid0IGdldCBiYWQgY29sbGlzaW9ucyBvbiB0aGUgZmlyc3QgZnJhbWVcclxuICAgICAgICB0aGlzLmRyYXdpbmcucG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcudXBkYXRlU3RhdGUoKTtcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUoKVxyXG4gICAge1xyXG5cclxuICAgIH1cclxuICAgIGRlc3Ryb3koKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaXNEZXN0cm95aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGJlZ2luKC4uLmFyZ3M6IGFueVtdKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgdXBkYXRlKClcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihwIDogVmVjdG9yKVxyXG4gICAgOiBBY3RvclxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHAueCwgcC55KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldFZlbG9jaXR5KHZlbG9jaXR5IDogVmVjdG9yKVxyXG4gICAgOiBBY3RvclxyXG4gICAge1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KHZlbG9jaXR5LngsIHZlbG9jaXR5LnkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgbGF0ZVVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eSk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nLnJvdGF0aW9uID0gdGhpcy5yb3RhdGlvbjtcclxuICAgICAgICB0aGlzLmRyYXdpbmcucG9zaXRpb24uc2V0KHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmRyYXdpbmcuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuYWdlKys7XHJcbiAgICB9XHJcbiAgICBjaGVja092ZXJsYXAodGFyZ2V0Q2xhc3MsIGhhbmRsZXI/OkZ1bmN0aW9uKVxyXG4gICAgOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHJlcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBjaGVja0FjdG9ycyA6IEFjdG9yW10gPSBBY3Rvci5nZXRHcm91cCh0YXJnZXRDbGFzcyk7XHJcbiAgICAgICAgY2hlY2tBY3RvcnMuZm9yRWFjaChhID0+IHtcclxuICAgICAgICAgICAgaWYoYS5kcmF3aW5nLmlzT3ZlcmxhcHBpbmcodGhpcy5kcmF3aW5nKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmKGhhbmRsZXIpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgdXBkYXRlKClcclxuICAgIHtcclxuICAgICAgICBBY3Rvci5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XHJcbiAgICAgICAgICAgIGdyb3VwLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIGNsZWFyKClcclxuICAgIHtcclxuICAgICAgICBBY3Rvci5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XHJcbiAgICAgICAgICAgIGdyb3VwLmNsZWFyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0R3JvdXAodGFyZ2V0Q2xhc3MpXHJcbiAgICA6IEFjdG9yW11cclxuICAgIHtcclxuICAgICAgICBsZXQgY2xhc3NuYW1lIDogc3RyaW5nID0gdGFyZ2V0Q2xhc3NbXCJuYW1lXCJdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQWN0b3IuZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSBBY3Rvci5ncm91cHNbaV07XHJcbiAgICAgICAgICAgIGlmKGcubmFtZSA9PSBjbGFzc25hbWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBnLm1lbWJlcnM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG4gICAgc2V0RGlzcGxheVByaW9yaXR5KGRpc3BsYXlQcmlvcml0eTpudW1iZXIpXHJcbiAgICA6IEFjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5kaXNwbGF5UHJpb3JpdHkgPSBkaXNwbGF5UHJpb3JpdHk7XHJcbiAgICAgICAgQWN0b3Iuc29ydEdyb3VwcygpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHNvcnRHcm91cHMoKVxyXG4gICAge1xyXG4gICAgICAgIEFjdG9yLmdyb3Vwcy5zb3J0KChhLCBiKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gYS5kaXNwbGF5UHJpb3JpdHkgLSBiLmRpc3BsYXlQcmlvcml0eTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBUZXh0QWN0b3IgZXh0ZW5kcyBBY3RvclxyXG57XHJcbiAgICBkdXJhdGlvbiA6IG51bWJlcjtcclxuICAgIHhBbGlnbiA6IG51bWJlcjtcclxuICAgIGRpc3BsYXlTdHJpbmcgOiBzdHJpbmc7XHJcbiAgICBjb2xvciA6IENvbG9yO1xyXG4gICAgY29uc3RydWN0b3IocyA6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IHM7XHJcbiAgICB9XHJcbiAgICBiZWdpbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXREaXNwbGF5UHJpb3JpdHkoMik7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDE7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQoMSwxKTtcclxuICAgICAgICB0aGlzLnhBbGlnbiA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IENvbG9yLndoaXRlO1xyXG4gICAgfVxyXG4gICAgc2V0RHVyYXRpb25Gb3JldmVyKClcclxuICAgIDogVGV4dEFjdG9yXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDk5OTk5OTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgR2FtZS5kaXNwbGF5LmRyYXdUZXh0KHRoaXMuZGlzcGxheVN0cmluZywgdGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDAsIHRoaXMueEFsaWduLCB0aGlzLmNvbG9yLCB0aGlzLnNjYWxlLngpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkpO1xyXG4gICAgICAgIGlmKHRoaXMuYWdlPnRoaXMuZHVyYXRpb24pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9ICAgXHJcbiAgICBzZXREdXJhdGlvbihkdXJhdGlvbjpudW1iZXIpXHJcbiAgICA6IFRleHRBY3RvclxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHNldFZlbG9jaXR5KHZlbG9jaXR5IDogVmVjdG9yKVxyXG4gICAgOiBUZXh0QWN0b3JcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXRWZWxvY2l0eSh2ZWxvY2l0eSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRQb3NpdGlvbihwIDogVmVjdG9yKVxyXG4gICAgOiBUZXh0QWN0b3JcclxuICAgIHtcclxuICAgICAgICBzdXBlci5zZXRQb3NpdGlvbihwKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBBY3RvciwgVGV4dEFjdG9yIH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50X3NyYy9BY3Rvci50cyIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL1ZlY3RvclwiO1xyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vRGlzcGxheVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlXHJcbntcclxuICAgIHN0YXRpYyBwb3NpdGlvbiA6IFZlY3RvcjtcclxuICAgIHN0YXRpYyBpc1ByZXNzZWQgOiBib29sZWFuO1xyXG5cclxuICAgIHN0YXRpYyBpbml0aWFsaXplKClcclxuICAgIHtcclxuICAgICAgICBNb3VzZS5wb3NpdGlvbiA9IG5ldyBWZWN0b3IoMC41LCAwLjUpO1xyXG4gICAgICAgIERpc3BsYXkuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBNb3VzZS5vbk1vdXNlRG93bik7XHJcbiAgICAgICAgRGlzcGxheS5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBNb3VzZS5vbk1vdXNlVXApO1xyXG4gICAgICAgIERpc3BsYXkuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBNb3VzZS5vbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb25Nb3VzZVVwKGUpXHJcbiAgICB7XHJcbiAgICAgICAgTW91c2UuaXNQcmVzc2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgb25Nb3VzZURvd24oZSlcclxuICAgIHtcclxuICAgICAgICBNb3VzZS5pc1ByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgIE1vdXNlLm9uTW91c2VNb3ZlKGUpO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIG9uTW91c2VNb3ZlKGUpXHJcbiAgICB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgLy9Ad2FzTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgIGxldCByZWN0ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICBNb3VzZS5wb3NpdGlvbi54ID0gKChlLnBhZ2VYIC0gcmVjdC5sZWZ0KSAvIERpc3BsYXkuc2l6ZS54KVxyXG4gICAgICAgIE1vdXNlLnBvc2l0aW9uLnkgPSAoKGUucGFnZVkgLSByZWN0LnRvcCkgLyBEaXNwbGF5LnNpemUueSlcclxuICAgIH1cclxuICAgIC8qXHJcbkBvbk1vdXNlRG93bjogKGUpID0+XHJcbiAgICBAaXAgPSB0cnVlXHJcbiAgICBAb25Nb3VzZU1vdmUgZVxyXG4gICAgRy5vbmZvY3VzKClcclxuQG9uTW91c2VVcDogKGUpID0+XHJcbkBpcCA9IGZhbHNlXHJcbiovXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnRfc3JjL01vdXNlLnRzIiwiaW1wb3J0IHsgVmVjdG9yIH0gZnJvbSBcIi4vVmVjdG9yXCI7XHJcbmltcG9ydCB7IERpc3BsYXkgfSBmcm9tIFwiLi9EaXNwbGF5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmRcclxue1xyXG4gICAgc3RhdGljIGtleURvd246IGJvb2xlYW5bXTtcclxuICAgIHN0YXRpYyByZWFkb25seSBMRUZUID0gMzc7XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgVVAgPSAzODtcclxuICAgIHN0YXRpYyByZWFkb25seSBSSUdIVCA9IDM5O1xyXG4gICAgc3RhdGljIHJlYWRvbmx5IERPV04gPSA0MDtcclxuICAgIHN0YXRpYyByZWFkb25seSBTUEFDRSA9IDMyO1xyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKVxyXG4gICAge1xyXG4gICAgICAgIEtleWJvYXJkLmtleURvd24gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI1NTsgaSsrKSB7XHJcbiAgICAgICAgICAgIEtleWJvYXJkLmtleURvd25baV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgd2luZG93Lm9ua2V5ZG93biA9IChlKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBLZXlib2FyZC5rZXlEb3duW2Uua2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cub25rZXl1cCA9IChlKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBLZXlib2FyZC5rZXlEb3duW2Uua2V5Q29kZV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5LZXlib2FyZC5pbml0aWFsaXplKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50X3NyYy9LZXlib2FyZC50cyIsImludGVyZmFjZSBOdW1iZXIge1xyXG4gICAgY2xhbXA6IChtaW4/Om51bWJlciwgbWF4PzpudW1iZXIpPT5udW1iZXI7XHJcbiAgICBsb29wUmFuZ2U6IChtaW4/Om51bWJlciwgbWF4PzpudW1iZXIpPT5udW1iZXI7XHJcbiAgICBtb2Q6IChuOm51bWJlcikgPT4gbnVtYmVyO1xyXG4gICAgRVBTSUxPTjpudW1iZXI7XHJcbn1cclxuTnVtYmVyLnByb3RvdHlwZS5jbGFtcCA9IGZ1bmN0aW9uKG1pbiA6IG51bWJlciA9IDAsIG1heCA6IG51bWJlciA9IDEpXHJcbjogbnVtYmVyIHtcclxuICAgIGlmKHRoaXMgPCBtaW4pXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG1pbjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYodGhpcyA+IG1heClcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbWF4O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbn1cclxuTnVtYmVyLnByb3RvdHlwZS5sb29wUmFuZ2UgPSBmdW5jdGlvbihtaW46bnVtYmVyID0gMCwgbWF4IDogbnVtYmVyID0gMSlcclxuOiBudW1iZXJcclxue1xyXG4gICAgbGV0IGRlbHRhID0gbWF4LW1pbjtcclxuICAgIGxldCB0ID0gdGhpcztcclxuICAgIHQtPW1pbjtcclxuICAgIGlmKHQ+PTApXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHQlZGVsdGErbWluO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlbHRhICsgdCAlIGRlbHRhICsgbWluO1xyXG59XHJcbk51bWJlci5wcm90b3R5cGUubW9kID0gZnVuY3Rpb24objpudW1iZXIpXHJcbjogbnVtYmVyXHJcbntcclxuICAgIHJldHVybiAoKHRoaXMlbikrbiklbjtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudF9zcmMvRXh0ZW5zaW9ucy50cyIsImNsYXNzIFJhbmRvbVxyXG57XHJcbiAgICBzdGF0aWMgcmFuZ2UobG93Om51bWJlcj0wLCBoaWdoOm51bWJlcj0xKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJhbmRvbSgpKihoaWdoLWxvdykrbG93O1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJhbmdlSW50KGxvdzpudW1iZXI9MCwgaGlnaDpudW1iZXI9MSlcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihSYW5kb20ucmFuZ2UobG93LCBoaWdoKzEpKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHsgUmFuZG9tIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnRfc3JjL1JhbmRvbS50cyIsImltcG9ydCB7IERyYXdpbmcsIFBhcnRpY2xlU3lzdGVtLCBUZXh0QWN0b3IsIENvbmZpZywgQ29sb3IsIEtleWJvYXJkLCBWZWN0b3IsIFJhbmRvbSwgQWN0b3IsIEdhbWUgfSBmcm9tIFwiLi9NZ2x1ZVwiO1xyXG5pbXBvcnQgeyBMZWFkZXJib2FyZCB9IGZyb20gXCIuL0xlYWRlcmJvYXJkXCI7XHJcbnZhciBnIDogV29ybURyaXZlR2FtZTtcclxuY2xhc3MgV29ybURyaXZlR2FtZSBleHRlbmRzIEdhbWVcclxue1xyXG4gICAgcmFua1N0cmluZ3MgOiBzdHJpbmdbXSA9IFsnU1QnLCAnTkQnLCAnUkQnXTtcclxuICAgIGxlYWRlcmJvYXJkVGV4dCA6IFRleHRBY3RvciA9IG5ldyBUZXh0QWN0b3IoXCJcIik7XHJcbiAgICBvbkJlZ2luR2FtZSgpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHAgPSBuZXcgUGxheWVyKCk7XHJcbiAgICAgICAgbGV0IGEgPSBuZXcgQXBwbGUoKTtcclxuICAgICAgICBsZXQgaSA9IG5ldyBJbnN0cnVjdGlvblRleHQoXCJPVkVSTEFQIFNBRkVcIik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVUaXRsZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoS2V5Ym9hcmQua2V5RG93bltLZXlib2FyZC5TUEFDRV0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnRyYW5zaXRpb25Ub0dhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxlYWRlcmJvYXJkVHlwZSA9TWF0aC5mbG9vcih0aGlzLnRpY2tzLzE4MCklNDtcclxuICAgICAgICBpZih0aGlzLnRpY2tzJTE4MCA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3dpdGNoKGxlYWRlcmJvYXJkVHlwZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIExlYWRlcmJvYXJkLmdldCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICBMZWFkZXJib2FyZC5nZXQoZmFsc2UsIHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmQuZ2V0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTGVhZGVyYm9hcmQuZ2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKExlYWRlcmJvYXJkLnNjb3JlcyA9PSBudWxsIHx8IGxlYWRlcmJvYXJkVHlwZSA9PSAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGxldCBzdGFydFBvc2l0aW9uID0gMC4yO1xyXG4gICAgICAgIHRoaXMubGVhZGVyYm9hcmRUZXh0LmNvbG9yID0gQ29sb3Iud2hpdGU7XHJcbiAgICAgICAgdmFyIGxlYWRlcmJvYXJkVHlwZXMgPSBbJ0xBU1QnLCAnQkVTVCcsICdUT1AnXTtcclxuXHJcbiAgICAgICAgdGhpcy5sZWFkZXJib2FyZFRleHQuZGlzcGxheVN0cmluZyA9IGxlYWRlcmJvYXJkVHlwZXNbbGVhZGVyYm9hcmRUeXBlLTFdO1xyXG4gICAgICAgIHRoaXMubGVhZGVyYm9hcmRUZXh0LnNldFBvc2l0aW9uKG5ldyBWZWN0b3IoMC41LCBzdGFydFBvc2l0aW9uKSk7XHJcbiAgICAgICAgdGhpcy5sZWFkZXJib2FyZFRleHQudXBkYXRlKCk7XHJcbiAgICAgICAgc3RhcnRQb3NpdGlvbiArPSAwLjAzNTtcclxuICAgICAgICBMZWFkZXJib2FyZC5zY29yZXMuZm9yRWFjaChzY29yZSA9PiB7XHJcbiAgICAgICAgICAgIGlmKExlYWRlcmJvYXJkLnBsYXllcklkID09IHNjb3JlLnBsYXllcklkKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlYWRlcmJvYXJkVGV4dC5jb2xvciA9IENvbG9yLmxpZ2h0Z3JlZW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlYWRlcmJvYXJkVGV4dC54QWxpZ24gPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZWFkZXJib2FyZFRleHQuc2V0UG9zaXRpb24obmV3IFZlY3RvcigwLjIsY291bnQqMC4wMytzdGFydFBvc2l0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlYWRlcmJvYXJkVGV4dC5kaXNwbGF5U3RyaW5nID0gXCJZT1VcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVhZGVyYm9hcmRUZXh0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVhZGVyYm9hcmRUZXh0LmNvbG9yID0gQ29sb3Iud2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMubGVhZGVyYm9hcmRUZXh0LnhBbGlnbiA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZGVyYm9hcmRUZXh0LnNldFBvc2l0aW9uKG5ldyBWZWN0b3IoMC40LGNvdW50KjAuMDMrc3RhcnRQb3NpdGlvbikpO1xyXG4gICAgICAgICAgICBpZihzY29yZS5yYW5rICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBycyA9IFwiXCIgKyAoc2NvcmUucmFuayArIDEpICsgKChzY29yZS5yYW5rIDwgMykgPyB0aGlzLnJhbmtTdHJpbmdzW3Njb3JlLnJhbmtdIDogJ1RIJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlYWRlcmJvYXJkVGV4dC5kaXNwbGF5U3RyaW5nID0gcnM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlYWRlcmJvYXJkVGV4dC51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sZWFkZXJib2FyZFRleHQueEFsaWduID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMubGVhZGVyYm9hcmRUZXh0LnNldFBvc2l0aW9uKG5ldyBWZWN0b3IoMC42LGNvdW50KjAuMDMrc3RhcnRQb3NpdGlvbikpO1xyXG4gICAgICAgICAgICB0aGlzLmxlYWRlcmJvYXJkVGV4dC5kaXNwbGF5U3RyaW5nID0gc2NvcmUuc2NvcmUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5sZWFkZXJib2FyZFRleHQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgSW5zdHJ1Y3Rpb25UZXh0IGV4dGVuZHMgVGV4dEFjdG9yXHJcbntcclxuICAgIGJlZ2luKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNldERpc3BsYXlQcmlvcml0eSgtMSk7XHJcbiAgICAgICAgdGhpcy5zZXREdXJhdGlvbkZvcmV2ZXIoKTtcclxuICAgICAgICB0aGlzLnhBbGlnbiA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihuZXcgVmVjdG9yKDAuNSwgMC41KSk7XHJcbiAgICAgICAgdGhpcy5zY2FsZS54ID0gMjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gQ29sb3IuZGFya2dyZWVuO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlKClcclxuICAgIHtcclxuICAgICAgICBpZihnLmdhbWVPdmVyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIEFwcGxlIGV4dGVuZHMgQWN0b3Jcclxue1xyXG4gICAgYmVnaW4oKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KDAuMjUsIDAuMjUpXHJcbiAgICAgICAgdGhpcy5kcmF3aW5nXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihDb2xvci5yZWQpXHJcbiAgICAgICAgICAgIC5hZGRSZWN0KDAuMDIsIDAuMDIsIDAuMDIpXHJcbiAgICAgICAgICAgIC5hZGRBcmMoNjAsNilcclxuICAgIH1cclxuICAgIGNob29zZU5ld1Bvc2l0aW9uKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChSYW5kb20ucmFuZ2UoMC4xLDAuOSksIFJhbmRvbS5yYW5nZSgwLjEsMC45KSlcclxuICAgIH1cclxufVxyXG5jbGFzcyBCb2R5U2VnbWVudCBleHRlbmRzIEFjdG9yXHJcbntcclxuICAgIGxhc3RQb3NpdGlvbjpWZWN0b3IgPSBuZXcgVmVjdG9yKDAsMCk7XHJcbiAgICBnYW1lT3ZlclZlbG9jaXR5U2V0OmJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJlZ2luKGRhbmdlclNlZyA6IGJvb2xlYW4pXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbG9yID0gZGFuZ2VyU2VnP0NvbG9yLmxpZ2h0Z3JlZW46Q29sb3IuZGFya2dyZWVuO1xyXG4gICAgICAgIHRoaXMuZHJhd2luZy5oYXNDb2xsaXNpb24gPSBkYW5nZXJTZWc7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihjb2xvcilcclxuICAgICAgICAgICAgLmFkZFJlY3QoMC4wMiwgMC4wMilcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZy5nYW1lT3ZlcilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmdhbWVPdmVyVmVsb2NpdHlTZXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVsb2NpdHkuc2V0KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZWxvY2l0eS5zdWJ0cmFjdCh0aGlzLmxhc3RQb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyVmVsb2NpdHlTZXQgPSB0cnVlOyAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RQb3NpdGlvbi5zZXQodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vIGxpbmUgaW50ZXJzZWN0aW9uXHJcbmZ1bmN0aW9uIHR1cm4ocDE6VmVjdG9yLCBwMjpWZWN0b3IsIHAzOlZlY3Rvcik6bnVtYmVyXHJcbntcclxuICAgIGxldCBlcHNpbG9uID0gTWF0aC5wb3coMiwgLTUyKTtcclxuICAgIGxldCBhID0gcDEueDsgbGV0IGIgPSBwMS55OyBcclxuICAgIGxldCBjID0gcDIueDsgbGV0IGQgPSBwMi55O1xyXG4gICAgbGV0IGUgPSBwMy54OyBsZXQgZiA9IHAzLnk7XHJcbiAgICBsZXQgQSA9IChmIC0gYikgKiAoYyAtIGEpO1xyXG4gICAgbGV0IEIgPSAoZCAtIGIpICogKGUgLSBhKTtcclxuICAgIHJldHVybiAoQSA+IEIgKyBlcHNpbG9uKSA/IDEgOiAoQSArIGVwc2lsb24gPCBCKSA/IC0xIDogMDsgICBcclxufVxyXG5mdW5jdGlvbiBsaW5lSW50ZXJzZWN0aW5nKHAxOlZlY3RvciwgcDI6VmVjdG9yLCBwMzpWZWN0b3IsIHA0OlZlY3RvcilcclxuOmJvb2xlYW5cclxue1xyXG4gICAgcmV0dXJuICh0dXJuKHAxLCBwMywgcDQpICE9IHR1cm4ocDIsIHAzLCBwNCkpICYmICh0dXJuKHAxLCBwMiwgcDMpICE9IHR1cm4ocDEsIHAyLCBwNCkpO1xyXG59XHJcbmNsYXNzIFBvc2l0aW9uQnVmZmVyXHJcbntcclxuICAgIHByaXZhdGUgcG9zaXRpb25zOiBWZWN0b3JbXSA9IFtuZXcgVmVjdG9yKDAsMCldO1xyXG4gICAgcHJpdmF0ZSB3cml0ZUluZGV4Om51bWJlciA9IDA7XHJcbiAgICBnZXRQb3NpdGlvbihpbmRleDpudW1iZXIpXHJcbiAgICA6IFZlY3RvclxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uc1sodGhpcy53cml0ZUluZGV4K2luZGV4KSV0aGlzLnBvc2l0aW9ucy5sZW5ndGhdO1xyXG4gICAgfVxyXG4gICAgYWRkUG9zaXRpb24obmV3UG9zaXRpb246VmVjdG9yKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMud3JpdGVJbmRleCA9ICh0aGlzLndyaXRlSW5kZXgtMSkubW9kKHRoaXMucG9zaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbnNbdGhpcy53cml0ZUluZGV4XSA9IG5ld1Bvc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgZ3Jvd0J1ZmZlcihncm93QW1vdW50Om51bWJlciwgZmlsbFZlY3RvcjpWZWN0b3IpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gZ2VuZXJhdGUgYSBuZXcgZmlsbCBidWZmZXJcclxuICAgICAgICBsZXQgYyA9IDA7XHJcbiAgICAgICAgd2hpbGUoYzxncm93QW1vdW50KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMuc3BsaWNlKHRoaXMud3JpdGVJbmRleCwgMCwgbmV3IFZlY3RvcihmaWxsVmVjdG9yLngsIGZpbGxWZWN0b3IueSkpO1xyXG4gICAgICAgICAgICBjKys7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5jbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBY3RvclxyXG57XHJcbiAgICB0dXJuU3BlZWQ6bnVtYmVyID0gNDtcclxuICAgIGJvZHlTZWdtZW50czpCb2R5U2VnbWVudFtdID0gW11cclxuICAgIHNwYXduUmVtYWluaW5nOm51bWJlciA9IDA7XHJcbiAgICBtb3ZlU3BlZWQ6bnVtYmVyID0gMC4wMDU7XHJcbiAgICBzcGF3blBvc2l0aW9uIDogVmVjdG9yO1xyXG4gICAgb3ZlcmxhcERyYXdpbmcgOiBEcmF3aW5nO1xyXG4gICAgaW50ZXJzZWN0aW9uczogVmVjdG9yW10gPSBbXTtcclxuICAgIHByaW9yUG9zaXRpb25zOiBQb3NpdGlvbkJ1ZmZlciA9IG5ldyBQb3NpdGlvbkJ1ZmZlcigpO1xyXG4gICAgc2VnbWVudExlbmd0aDogbnVtYmVyID0gMTA7XHJcbiAgICBiZWdpbigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoMC41LDAuNSk7XHJcbiAgICAgICAgdGhpcy5kcmF3aW5nXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihDb2xvci5saWdodGJsdWUpXHJcbiAgICAgICAgICAgIC5hZGRSZWN0KDAuMDIsIDAuMDIsIDAuMDEpXHJcbiAgICAgICAgICAgIC5hZGRBcmMoNjAsIDYpXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihDb2xvci5kYXJrZ3JheSlcclxuICAgICAgICAgICAgLmFkZFJlY3QoMC4wMSwgMC4wMSwgMC4wMTUsIDApXHJcbiAgICAgICAgICAgIC5taXJyb3JYKClcclxuICAgICAgICB0aGlzLm92ZXJsYXBEcmF3aW5nID0gbmV3IERyYXdpbmcoKTtcclxuICAgICAgICB0aGlzLm92ZXJsYXBEcmF3aW5nXHJcbiAgICAgICAgICAgIC5zZXRDb2xvcihDb2xvci5yZWQpXHJcbiAgICAgICAgICAgIC5hZGRSZWN0KDAuMDEsIDAuMDEsIDAuMDQpXHJcbiAgICAgICAgICAgIC5hZGRBcmMoMjAsIDE4KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRTcGF3blBvc2l0aW9uKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLmJvZHlTZWdtZW50cy5sZW5ndGg9PTApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9keVNlZ21lbnRzW3RoaXMuYm9keVNlZ21lbnRzLmxlbmd0aC0xXS5wb3NpdGlvbjtcclxuICAgIH1cclxuICAgIHVwZGF0ZSgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wcmlvclBvc2l0aW9ucy5hZGRQb3NpdGlvbihuZXcgVmVjdG9yKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KSk7XHJcbiAgICAgICAgaWYodGhpcy5zcGF3blJlbWFpbmluZyA+IDAgJiYgdGhpcy5hZ2UgJSB0aGlzLnNlZ21lbnRMZW5ndGggPT0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJlbWFpbmluZy0tO1xyXG4gICAgICAgICAgICBsZXQgZGFuZ2VyU2VnIDpib29sZWFuID0gTWF0aC5mbG9vcih0aGlzLmJvZHlTZWdtZW50cy5sZW5ndGgvOCklMj09MTtcclxuICAgICAgICAgICAgbGV0IG5ld1NlZyA9IG5ldyBCb2R5U2VnbWVudChkYW5nZXJTZWcpO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlTZWdtZW50cy5wdXNoKG5ld1NlZyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJpb3JQb3NpdGlvbnMuZ3Jvd0J1ZmZlcih0aGlzLnNlZ21lbnRMZW5ndGgsIHRoaXMuc3Bhd25Qb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVwZGF0ZSBhbGwgdGhlIGJvZHkgc2VnbWVudCBwb3NpdGlvbnNcclxuICAgICAgICBmb3IobGV0IGk9dGhpcy5ib2R5U2VnbWVudHMubGVuZ3RoLTE7aT49MDtpLS0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY1NlZyA9IHRoaXMuYm9keVNlZ21lbnRzW2ldO1xyXG4gICAgICAgICAgICBjU2VnLnNldFBvc2l0aW9uKHRoaXMucHJpb3JQb3NpdGlvbnMuZ2V0UG9zaXRpb24oKGkrMSkqdGhpcy5zZWdtZW50TGVuZ3RoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlZSBob3cgbWFueSBsaW5lIHNlZ21lbnRzIG92ZXJsYXBcclxuICAgICAgICBsZXQgb3ZlcmxhcENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmludGVyc2VjdGlvbnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9keVNlZ21lbnRzLmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHRoaXMuYm9keVNlZ21lbnRzW2ldLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gdGhpcy5ib2R5U2VnbWVudHNbaSsxXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgZm9yKGxldCBqPWk7ajx0aGlzLmJvZHlTZWdtZW50cy5sZW5ndGgtMTtqKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKE1hdGguYWJzKGktaik8NClcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmJvZHlTZWdtZW50c1tqXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmJvZHlTZWdtZW50c1tqKzFdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgaWYobGluZUludGVyc2VjdGluZyhhLGIsYyxkKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGFwQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGludGVyc2VjdGlvbiA9IG5ldyBWZWN0b3IoYS54LCBhLnkpLmFkZChiKS5hZGQoYykuYWRkKGQpLmRpdmlkZSg0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVyc2VjdGlvbnMucHVzaChpbnRlcnNlY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3ZlcmxhcERyYXdpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldFJvdGF0aW9uKHRoaXMuYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2V0UG9zaXRpb24oaW50ZXJzZWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKEtleWJvYXJkLmtleURvd25bS2V5Ym9hcmQuTEVGVF0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnJvdGF0aW9uIC09IHRoaXMudHVyblNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihLZXlib2FyZC5rZXlEb3duW0tleWJvYXJkLlJJR0hUXSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMucm90YXRpb24gKz0gdGhpcy50dXJuU3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2ID0gbmV3IFZlY3RvcigwLDApLmFkZERpcmVjdGlvbih0aGlzLnJvdGF0aW9uLCAxKTtcclxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnggPiAxIHx8IHRoaXMucG9zaXRpb24ueCA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2LnggKj0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucG9zaXRpb24ueC5jbGFtcCgwLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnBvc2l0aW9uLnkgPiAxIHx8IHRoaXMucG9zaXRpb24ueSA8IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2LnkgKj0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucG9zaXRpb24ueS5jbGFtcCgwLDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvdGF0aW9uID0gdi5yb3RhdGlvbigpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uYWRkRGlyZWN0aW9uKHRoaXMucm90YXRpb24sIHRoaXMubW92ZVNwZWVkKTtcclxuICAgICAgICAvLyBjaGVjayB0byBzZWUgaWYgd2UgYXJlIGVhdGluZyBhbiBhcHBsZVxyXG4gICAgICAgIGlmKHRoaXMuY2hlY2tPdmVybGFwKEFwcGxlLCAoYSk9PntcclxuICAgICAgICAgICAgYS5jaG9vc2VOZXdQb3NpdGlvbigpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gYWRkIHNjb3JlXHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJzZWN0aW9ucy5mb3JFYWNoKGludGVyc2VjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBuZXcgVGV4dEFjdG9yKGArMWApLnNldFBvc2l0aW9uKGludGVyc2VjdGlvbikuc2V0RHVyYXRpb24oMzApLnNldFZlbG9jaXR5KG5ldyBWZWN0b3IoMCwtMC4wMDEpKTtcclxuICAgICAgICAgICAgICAgIGcuc2NvcmUrPTE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBzdGFydCBzcGF3bmluZyBib2R5IHNlZ21lbnRzXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25SZW1haW5pbmcgPSA4O1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduUG9zaXRpb24gPSBuZXcgVmVjdG9yKHRoaXMuZ2V0U3Bhd25Qb3NpdGlvbigpLngsIHRoaXMuZ2V0U3Bhd25Qb3NpdGlvbigpLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighZy5nYW1lT3ZlciAmJiB0aGlzLmNoZWNrT3ZlcmxhcChCb2R5U2VnbWVudCkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHBzID0gbmV3IFBhcnRpY2xlU3lzdGVtKCk7XHJcbiAgICAgICAgICAgIHBzLnBvc2l0aW9uLnNldCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgIHBzLmNvdW50ID0gMTA7XHJcbiAgICAgICAgICAgIHBzLmNvbG9yID0gQ29sb3IuYmx1ZTtcclxuICAgICAgICAgICAgZy5lbmRHYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpXHJcbntcclxuICAgIENvbmZpZy50aXRsZSA9IFwiV09STSBEUklWRVwiO1xyXG4gICAgTGVhZGVyYm9hcmQuaW5pdCgpO1xyXG4gICAgZyA9IG5ldyBXb3JtRHJpdmVHYW1lKCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50X3NyYy9Xb3JtRHJpdmUudHMiLCJleHBvcnQgeyBDb2xvciB9IGZyb20gXCIuL0NvbG9yXCI7XHJcbmV4cG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCJcclxuZXhwb3J0IHsgRGlzcGxheSB9IGZyb20gXCIuL0Rpc3BsYXlcIjtcclxuZXhwb3J0IHsgQWN0b3IsIFRleHRBY3RvciB9IGZyb20gXCIuL0FjdG9yXCI7XHJcbmV4cG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5leHBvcnQgeyBNb3VzZSB9IGZyb20gXCIuL01vdXNlXCI7XHJcbmV4cG9ydCB7IFZlY3RvciB9IGZyb20gXCIuL1ZlY3RvclwiO1xyXG5leHBvcnQgeyBQYXJ0aWNsZVN5c3RlbSB9IGZyb20gXCIuL1BhcnRpY2xlU3lzdGVtXCJcclxuZXhwb3J0IHsgS2V5Ym9hcmQgfSBmcm9tIFwiLi9LZXlib2FyZFwiXHJcbmV4cG9ydCB7IFJhbmRvbSB9IGZyb20gXCIuL1JhbmRvbVwiXHJcbmV4cG9ydCB7IERyYXdpbmcgfSBmcm9tIFwiLi9EcmF3aW5nXCJcclxuaW1wb3J0IFwiLi9FeHRlbnNpb25zXCI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudF9zcmMvTWdsdWUudHMiLCJpbXBvcnQgeyBBY3RvciB9IGZyb20gXCIuL0FjdG9yXCI7XHJcbmltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9HYW1lXCI7XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4vQ29sb3JcIlxyXG5pbXBvcnQgeyBEaXNwbGF5IH0gZnJvbSBcIi4vRGlzcGxheVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IgfSBmcm9tIFwiLi9WZWN0b3JcIjtcclxuaW1wb3J0IHsgUmFuZG9tIH0gZnJvbSBcIi4vUmFuZG9tXCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZVN5c3RlbVxyXG57XHJcbiAgICBjb3VudCA6IG51bWJlciA9IDE7XHJcbiAgICBwb3NpdGlvbiA6IFZlY3RvciA9IG5ldyBWZWN0b3IoMCwwKTtcclxuICAgIGFuZ2xlV2lkdGggOiBudW1iZXIgPSAzNjA7XHJcbiAgICBzcGVlZCA6IG51bWJlciA9IDAuMDE7XHJcbiAgICBjb2xvciA6IENvbG9yID0gQ29sb3Iud2hpdGU7XHJcbiAgICBzaXplIDogbnVtYmVyID0gMC4wMjtcclxuICAgIGR1cmF0aW9uIDogbnVtYmVyID0gMzA7XHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGFjdG9yID0gbmV3IFBhcnRpY2xlQWN0b3IoKTtcclxuICAgICAgICBhY3Rvci5wYXJ0aWNsZVN5c3RlbSA9IHRoaXM7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgUGFydGljbGVBY3RvciBleHRlbmRzIEFjdG9yXHJcbntcclxuICAgIHBhcnRpY2xlU3lzdGVtIDogUGFydGljbGVTeXN0ZW07XHJcbiAgICBwcml2YXRlIGNvbG9yIDogQ29sb3I7XHJcbiAgICBwcml2YXRlIHNpemUgOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGR1cmF0aW9uIDogbnVtYmVyO1xyXG4gICAgdXBkYXRlKClcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnBhcnRpY2xlU3lzdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaWYgd2UgYXJlIGdlbmVyYXRpbmcgcGFydGljbGVzLCBzcGF3biB0aGVtIGFuZCBiYWlsXHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBsZXQgcyA9IHRoaXMucGFydGljbGVTeXN0ZW07XHJcbiAgICAgICAgICAgIGlmKHMuY291bnQgPCAxKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IG5ldyBQYXJ0aWNsZUFjdG9yKCk7XHJcbiAgICAgICAgICAgICAgICBwLnBvc2l0aW9uLnNldChzLnBvc2l0aW9uLngsIHMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgICAgICAgICBwLnZlbG9jaXR5LmFkZERpcmVjdGlvbihSYW5kb20ucmFuZ2UoLXMuYW5nbGVXaWR0aC8yLCBzLmFuZ2xlV2lkdGgvMiksIHMuc3BlZWQgKiBSYW5kb20ucmFuZ2UoMC41LCAxLjUpKTtcclxuICAgICAgICAgICAgICAgIHAuY29sb3IgPSBzLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgcC5zaXplID0gcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgcC5kdXJhdGlvbiA9IHMuZHVyYXRpb247ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIGp1c3QgZG8gYSBkcmF3IGxvb3Agb24gb3Vyc2VsZlxyXG4gICAgICAgIEdhbWUuZGlzcGxheS5maWxsUmVjdCh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplLCB0aGlzLnNpemUsIHRoaXMuY29sb3IpO1xyXG4gICAgICAgIGlmKHRoaXMuYWdlID4gdGhpcy5kdXJhdGlvbilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgeyBQYXJ0aWNsZVN5c3RlbSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY2xpZW50X3NyYy9QYXJ0aWNsZVN5c3RlbS50cyIsImltcG9ydCAqIGFzIExaU3RyaW5nIGZyb20gXCJsei1zdHJpbmdcIjtcclxuaW50ZXJmYWNlIExlYWRlcmJvYXJkU2NvcmVcclxue1xyXG4gICAgcGxheWVySWQ6bnVtYmVyO1xyXG4gICAgc2NvcmU6bnVtYmVyO1xyXG4gICAgdGltZT86bnVtYmVyO1xyXG4gICAgcmFuaz86bnVtYmVyO1xyXG59XHJcbmNsYXNzIExlYWRlcmJvYXJkXHJcbntcclxuICAgIHN0YXRpYyBwbGF5ZXJJZEtleSA6IHN0cmluZyA9IFwid29ybS1kcml2ZVwiO1xyXG4gICAgc3RhdGljIHBsYXllcklkIDogbnVtYmVyO1xyXG4gICAgc3RhdGljIHNjb3JlcyA6IExlYWRlcmJvYXJkU2NvcmVbXTtcclxuICAgIHN0YXRpYyBsYXN0U2NvcmUgOiBudW1iZXIgPSAwO1xyXG4gICAgc3RhdGljIGluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBwbGF5ZXJJZFN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMZWFkZXJib2FyZC5wbGF5ZXJJZEtleSk7XHJcbiAgICAgICAgaWYgKHBsYXllcklkU3RvcmFnZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS9uZXh0UGxheWVySWQnKS5cclxuICAgICAgICAgICAgICAgIHRoZW4oZnVuY3Rpb24gKHJlc3VsdCkgeyByZXR1cm4gcmVzdWx0Lmpzb24oKTsgfSkuXHJcbiAgICAgICAgICAgICAgICB0aGVuKGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTGVhZGVyYm9hcmQucGxheWVySWQgPSBqc29uLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExlYWRlcmJvYXJkLnBsYXllcklkS2V5LCBTdHJpbmcoTGVhZGVyYm9hcmQucGxheWVySWQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTGVhZGVyYm9hcmQucGxheWVySWQgPSBOdW1iZXIocGxheWVySWRTdG9yYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0KGlzR2V0dGluZ0xhc3QgPSBmYWxzZSwgaXNHZXR0aW5nQmVzdCA9IGZhbHNlKVxyXG4gICAge1xyXG4gICAgICAgIGlmIChMZWFkZXJib2FyZC5wbGF5ZXJJZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIExlYWRlcmJvYXJkLnNjb3JlcyA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVyaSA9ICcvYXBpL3Njb3JlJztcclxuICAgICAgICBpZiAoaXNHZXR0aW5nTGFzdCkge1xyXG4gICAgICAgICAgICB1cmkgKz0gXCI/c2NvcmU9XCIgKyBMZWFkZXJib2FyZC5sYXN0U2NvcmUgKyBcIiZjb3VudD05XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzR2V0dGluZ0Jlc3QpIHtcclxuICAgICAgICAgICAgdXJpICs9IFwiP3BsYXllcklkPVwiICsgTGVhZGVyYm9hcmQucGxheWVySWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5mZXRjaCh1cmkpLlxyXG4gICAgICAgICAgICB0aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHsgcmV0dXJuIHJlc3VsdC5qc29uKCk7IH0pLlxyXG4gICAgICAgICAgICB0aGVuKGZ1bmN0aW9uIChqc29uKSB7XHJcbiAgICAgICAgICAgICAgICBMZWFkZXJib2FyZC5zY29yZXMgPSBqc29uO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzR2V0dGluZ0xhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBMZWFkZXJib2FyZC5zY29yZXMucHVzaCh7IHNjb3JlOiBMZWFkZXJib2FyZC5sYXN0U2NvcmUsIHBsYXllcklkOiBMZWFkZXJib2FyZC5wbGF5ZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgICAgICBMZWFkZXJib2FyZC5zY29yZXMgPSBMZWFkZXJib2FyZC5zY29yZXMuc29ydChmdW5jdGlvbiAoYSxiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGEuc2NvcmUgPCBiLnNjb3JlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGEuc2NvcmUgPiBiLnNjb3JlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgc2V0KHNjb3JlOm51bWJlcilcclxuICAgIHtcclxuICAgICAgICBMZWFkZXJib2FyZC5sYXN0U2NvcmUgPSBzY29yZTtcclxuICAgICAgICB3aW5kb3cuZmV0Y2goXCIvYXBpL2tleT9wbGF5ZXJJZD1cIiArIExlYWRlcmJvYXJkLnBsYXllcklkKS5cclxuICAgICAgICAgICAgdGhlbihmdW5jdGlvbiAocmVzdWx0KSB7IHJldHVybiByZXN1bHQuanNvbigpOyB9KS5cclxuICAgICAgICAgICAgdGhlbihmdW5jdGlvbiAoanNvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGpzb24ua2V5O1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5jRGF0YVN0ciA9IExaU3RyaW5nLmNvbXByZXNzVG9FbmNvZGVkVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBzY29yZToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJJZDogTGVhZGVyYm9hcmQucGxheWVySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS9zY29yZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZW5jRGF0YVN0clxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHsgTGVhZGVyYm9hcmQsIExlYWRlcmJvYXJkU2NvcmUgfVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudF9zcmMvTGVhZGVyYm9hcmQudHMiLCIvLyBDb3B5cmlnaHQgKGMpIDIwMTMgUGllcm94eSA8cGllcm94eUBwaWVyb3h5Lm5ldD5cbi8vIFRoaXMgd29yayBpcyBmcmVlLiBZb3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0XG4vLyB1bmRlciB0aGUgdGVybXMgb2YgdGhlIFdURlBMLCBWZXJzaW9uIDJcbi8vIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSBMSUNFTlNFLnR4dCBvciBodHRwOi8vd3d3Lnd0ZnBsLm5ldC9cbi8vXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgdGhlIGhvbWUgcGFnZTpcbi8vIGh0dHA6Ly9waWVyb3h5Lm5ldC9ibG9nL3BhZ2VzL2x6LXN0cmluZy90ZXN0aW5nLmh0bWxcbi8vXG4vLyBMWi1iYXNlZCBjb21wcmVzc2lvbiBhbGdvcml0aG0sIHZlcnNpb24gMS40LjRcbnZhciBMWlN0cmluZyA9IChmdW5jdGlvbigpIHtcblxuLy8gcHJpdmF0ZSBwcm9wZXJ0eVxudmFyIGYgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xudmFyIGtleVN0ckJhc2U2NCA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtcbnZhciBrZXlTdHJVcmlTYWZlID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSstJFwiO1xudmFyIGJhc2VSZXZlcnNlRGljID0ge307XG5cbmZ1bmN0aW9uIGdldEJhc2VWYWx1ZShhbHBoYWJldCwgY2hhcmFjdGVyKSB7XG4gIGlmICghYmFzZVJldmVyc2VEaWNbYWxwaGFiZXRdKSB7XG4gICAgYmFzZVJldmVyc2VEaWNbYWxwaGFiZXRdID0ge307XG4gICAgZm9yICh2YXIgaT0wIDsgaTxhbHBoYWJldC5sZW5ndGggOyBpKyspIHtcbiAgICAgIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XVthbHBoYWJldC5jaGFyQXQoaSldID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhc2VSZXZlcnNlRGljW2FscGhhYmV0XVtjaGFyYWN0ZXJdO1xufVxuXG52YXIgTFpTdHJpbmcgPSB7XG4gIGNvbXByZXNzVG9CYXNlNjQgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgdmFyIHJlcyA9IExaU3RyaW5nLl9jb21wcmVzcyhpbnB1dCwgNiwgZnVuY3Rpb24oYSl7cmV0dXJuIGtleVN0ckJhc2U2NC5jaGFyQXQoYSk7fSk7XG4gICAgc3dpdGNoIChyZXMubGVuZ3RoICUgNCkgeyAvLyBUbyBwcm9kdWNlIHZhbGlkIEJhc2U2NFxuICAgIGRlZmF1bHQ6IC8vIFdoZW4gY291bGQgdGhpcyBoYXBwZW4gP1xuICAgIGNhc2UgMCA6IHJldHVybiByZXM7XG4gICAgY2FzZSAxIDogcmV0dXJuIHJlcytcIj09PVwiO1xuICAgIGNhc2UgMiA6IHJldHVybiByZXMrXCI9PVwiO1xuICAgIGNhc2UgMyA6IHJldHVybiByZXMrXCI9XCI7XG4gICAgfVxuICB9LFxuXG4gIGRlY29tcHJlc3NGcm9tQmFzZTY0IDogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgaWYgKGlucHV0ID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIGlmIChpbnB1dCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoaW5wdXQubGVuZ3RoLCAzMiwgZnVuY3Rpb24oaW5kZXgpIHsgcmV0dXJuIGdldEJhc2VWYWx1ZShrZXlTdHJCYXNlNjQsIGlucHV0LmNoYXJBdChpbmRleCkpOyB9KTtcbiAgfSxcblxuICBjb21wcmVzc1RvVVRGMTYgOiBmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9jb21wcmVzcyhpbnB1dCwgMTUsIGZ1bmN0aW9uKGEpe3JldHVybiBmKGErMzIpO30pICsgXCIgXCI7XG4gIH0sXG5cbiAgZGVjb21wcmVzc0Zyb21VVEYxNjogZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoY29tcHJlc3NlZC5sZW5ndGgsIDE2Mzg0LCBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gY29tcHJlc3NlZC5jaGFyQ29kZUF0KGluZGV4KSAtIDMyOyB9KTtcbiAgfSxcblxuICAvL2NvbXByZXNzIGludG8gdWludDhhcnJheSAoVUNTLTIgYmlnIGVuZGlhbiBmb3JtYXQpXG4gIGNvbXByZXNzVG9VaW50OEFycmF5OiBmdW5jdGlvbiAodW5jb21wcmVzc2VkKSB7XG4gICAgdmFyIGNvbXByZXNzZWQgPSBMWlN0cmluZy5jb21wcmVzcyh1bmNvbXByZXNzZWQpO1xuICAgIHZhciBidWY9bmV3IFVpbnQ4QXJyYXkoY29tcHJlc3NlZC5sZW5ndGgqMik7IC8vIDIgYnl0ZXMgcGVyIGNoYXJhY3RlclxuXG4gICAgZm9yICh2YXIgaT0wLCBUb3RhbExlbj1jb21wcmVzc2VkLmxlbmd0aDsgaTxUb3RhbExlbjsgaSsrKSB7XG4gICAgICB2YXIgY3VycmVudF92YWx1ZSA9IGNvbXByZXNzZWQuY2hhckNvZGVBdChpKTtcbiAgICAgIGJ1ZltpKjJdID0gY3VycmVudF92YWx1ZSA+Pj4gODtcbiAgICAgIGJ1ZltpKjIrMV0gPSBjdXJyZW50X3ZhbHVlICUgMjU2O1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9LFxuXG4gIC8vZGVjb21wcmVzcyBmcm9tIHVpbnQ4YXJyYXkgKFVDUy0yIGJpZyBlbmRpYW4gZm9ybWF0KVxuICBkZWNvbXByZXNzRnJvbVVpbnQ4QXJyYXk6ZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZD09PW51bGwgfHwgY29tcHJlc3NlZD09PXVuZGVmaW5lZCl7XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKGNvbXByZXNzZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBidWY9bmV3IEFycmF5KGNvbXByZXNzZWQubGVuZ3RoLzIpOyAvLyAyIGJ5dGVzIHBlciBjaGFyYWN0ZXJcbiAgICAgICAgZm9yICh2YXIgaT0wLCBUb3RhbExlbj1idWYubGVuZ3RoOyBpPFRvdGFsTGVuOyBpKyspIHtcbiAgICAgICAgICBidWZbaV09Y29tcHJlc3NlZFtpKjJdKjI1Nitjb21wcmVzc2VkW2kqMisxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgYnVmLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXN1bHQucHVzaChmKGMpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBMWlN0cmluZy5kZWNvbXByZXNzKHJlc3VsdC5qb2luKCcnKSk7XG5cbiAgICB9XG5cbiAgfSxcblxuXG4gIC8vY29tcHJlc3MgaW50byBhIHN0cmluZyB0aGF0IGlzIGFscmVhZHkgVVJJIGVuY29kZWRcbiAgY29tcHJlc3NUb0VuY29kZWRVUklDb21wb25lbnQ6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIGlmIChpbnB1dCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2NvbXByZXNzKGlucHV0LCA2LCBmdW5jdGlvbihhKXtyZXR1cm4ga2V5U3RyVXJpU2FmZS5jaGFyQXQoYSk7fSk7XG4gIH0sXG5cbiAgLy9kZWNvbXByZXNzIGZyb20gYW4gb3V0cHV0IG9mIGNvbXByZXNzVG9FbmNvZGVkVVJJQ29tcG9uZW50XG4gIGRlY29tcHJlc3NGcm9tRW5jb2RlZFVSSUNvbXBvbmVudDpmdW5jdGlvbiAoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIFwiXCI7XG4gICAgaWYgKGlucHV0ID09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSgvIC9nLCBcIitcIik7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9kZWNvbXByZXNzKGlucHV0Lmxlbmd0aCwgMzIsIGZ1bmN0aW9uKGluZGV4KSB7IHJldHVybiBnZXRCYXNlVmFsdWUoa2V5U3RyVXJpU2FmZSwgaW5wdXQuY2hhckF0KGluZGV4KSk7IH0pO1xuICB9LFxuXG4gIGNvbXByZXNzOiBmdW5jdGlvbiAodW5jb21wcmVzc2VkKSB7XG4gICAgcmV0dXJuIExaU3RyaW5nLl9jb21wcmVzcyh1bmNvbXByZXNzZWQsIDE2LCBmdW5jdGlvbihhKXtyZXR1cm4gZihhKTt9KTtcbiAgfSxcbiAgX2NvbXByZXNzOiBmdW5jdGlvbiAodW5jb21wcmVzc2VkLCBiaXRzUGVyQ2hhciwgZ2V0Q2hhckZyb21JbnQpIHtcbiAgICBpZiAodW5jb21wcmVzc2VkID09IG51bGwpIHJldHVybiBcIlwiO1xuICAgIHZhciBpLCB2YWx1ZSxcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5PSB7fSxcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGU9IHt9LFxuICAgICAgICBjb250ZXh0X2M9XCJcIixcbiAgICAgICAgY29udGV4dF93Yz1cIlwiLFxuICAgICAgICBjb250ZXh0X3c9XCJcIixcbiAgICAgICAgY29udGV4dF9lbmxhcmdlSW49IDIsIC8vIENvbXBlbnNhdGUgZm9yIHRoZSBmaXJzdCBlbnRyeSB3aGljaCBzaG91bGQgbm90IGNvdW50XG4gICAgICAgIGNvbnRleHRfZGljdFNpemU9IDMsXG4gICAgICAgIGNvbnRleHRfbnVtQml0cz0gMixcbiAgICAgICAgY29udGV4dF9kYXRhPVtdLFxuICAgICAgICBjb250ZXh0X2RhdGFfdmFsPTAsXG4gICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbj0wLFxuICAgICAgICBpaTtcblxuICAgIGZvciAoaWkgPSAwOyBpaSA8IHVuY29tcHJlc3NlZC5sZW5ndGg7IGlpICs9IDEpIHtcbiAgICAgIGNvbnRleHRfYyA9IHVuY29tcHJlc3NlZC5jaGFyQXQoaWkpO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5LGNvbnRleHRfYykpIHtcbiAgICAgICAgY29udGV4dF9kaWN0aW9uYXJ5W2NvbnRleHRfY10gPSBjb250ZXh0X2RpY3RTaXplKys7XG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVRvQ3JlYXRlW2NvbnRleHRfY10gPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0X3djID0gY29udGV4dF93ICsgY29udGV4dF9jO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb250ZXh0X2RpY3Rpb25hcnksY29udGV4dF93YykpIHtcbiAgICAgICAgY29udGV4dF93ID0gY29udGV4dF93YztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGUsY29udGV4dF93KSkge1xuICAgICAgICAgIGlmIChjb250ZXh0X3cuY2hhckNvZGVBdCgwKTwyNTYpIHtcbiAgICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICAgIGZvciAoaT0wIDsgaTw4IDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA+PiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IDE7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8Y29udGV4dF9udW1CaXRzIDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8IHZhbHVlO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09Yml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbisrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gY29udGV4dF93LmNoYXJDb2RlQXQoMCk7XG4gICAgICAgICAgICBmb3IgKGk9MCA7IGk8MTYgOyBpKyspIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpIHwgKHZhbHVlJjEpO1xuICAgICAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICAgICAgaWYgKGNvbnRleHRfZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGUgY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGVbY29udGV4dF93XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZSA9IGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X3ddO1xuICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0X2VubGFyZ2VJbi0tO1xuICAgICAgICBpZiAoY29udGV4dF9lbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICAgIGNvbnRleHRfZW5sYXJnZUluID0gTWF0aC5wb3coMiwgY29udGV4dF9udW1CaXRzKTtcbiAgICAgICAgICBjb250ZXh0X251bUJpdHMrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgd2MgdG8gdGhlIGRpY3Rpb25hcnkuXG4gICAgICAgIGNvbnRleHRfZGljdGlvbmFyeVtjb250ZXh0X3djXSA9IGNvbnRleHRfZGljdFNpemUrKztcbiAgICAgICAgY29udGV4dF93ID0gU3RyaW5nKGNvbnRleHRfYyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3V0cHV0IHRoZSBjb2RlIGZvciB3LlxuICAgIGlmIChjb250ZXh0X3cgIT09IFwiXCIpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29udGV4dF9kaWN0aW9uYXJ5VG9DcmVhdGUsY29udGV4dF93KSkge1xuICAgICAgICBpZiAoY29udGV4dF93LmNoYXJDb2RlQXQoMCk8MjU2KSB7XG4gICAgICAgICAgZm9yIChpPTAgOyBpPGNvbnRleHRfbnVtQml0cyA7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8OCA7IGkrKykge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IChjb250ZXh0X2RhdGFfdmFsIDw8IDEpIHwgKHZhbHVlJjEpO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPj4gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8IHZhbHVlO1xuICAgICAgICAgICAgaWYgKGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9PSBiaXRzUGVyQ2hhci0xKSB7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YS5wdXNoKGdldENoYXJGcm9tSW50KGNvbnRleHRfZGF0YV92YWwpKTtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3ZhbCA9IDA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFsdWUgPSBjb250ZXh0X3cuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgICBmb3IgKGk9MCA7IGk8MTYgOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICAgIGlmIChjb250ZXh0X2VubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgICAgY29udGV4dF9lbmxhcmdlSW4gPSBNYXRoLnBvdygyLCBjb250ZXh0X251bUJpdHMpO1xuICAgICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBjb250ZXh0X2RpY3Rpb25hcnlUb0NyZWF0ZVtjb250ZXh0X3ddO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPSBjb250ZXh0X2RpY3Rpb25hcnlbY29udGV4dF93XTtcbiAgICAgICAgZm9yIChpPTAgOyBpPGNvbnRleHRfbnVtQml0cyA7IGkrKykge1xuICAgICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgICAgIGNvbnRleHRfZGF0YV9wb3NpdGlvbiA9IDA7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgICAgICBjb250ZXh0X2RhdGFfdmFsID0gMDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhbHVlID0gdmFsdWUgPj4gMTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cbiAgICAgIGNvbnRleHRfZW5sYXJnZUluLS07XG4gICAgICBpZiAoY29udGV4dF9lbmxhcmdlSW4gPT0gMCkge1xuICAgICAgICBjb250ZXh0X2VubGFyZ2VJbiA9IE1hdGgucG93KDIsIGNvbnRleHRfbnVtQml0cyk7XG4gICAgICAgIGNvbnRleHRfbnVtQml0cysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1hcmsgdGhlIGVuZCBvZiB0aGUgc3RyZWFtXG4gICAgdmFsdWUgPSAyO1xuICAgIGZvciAoaT0wIDsgaTxjb250ZXh0X251bUJpdHMgOyBpKyspIHtcbiAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAoY29udGV4dF9kYXRhX3ZhbCA8PCAxKSB8ICh2YWx1ZSYxKTtcbiAgICAgIGlmIChjb250ZXh0X2RhdGFfcG9zaXRpb24gPT0gYml0c1BlckNoYXItMSkge1xuICAgICAgICBjb250ZXh0X2RhdGFfcG9zaXRpb24gPSAwO1xuICAgICAgICBjb250ZXh0X2RhdGEucHVzaChnZXRDaGFyRnJvbUludChjb250ZXh0X2RhdGFfdmFsKSk7XG4gICAgICAgIGNvbnRleHRfZGF0YV92YWwgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IHZhbHVlID4+IDE7XG4gICAgfVxuXG4gICAgLy8gRmx1c2ggdGhlIGxhc3QgY2hhclxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBjb250ZXh0X2RhdGFfdmFsID0gKGNvbnRleHRfZGF0YV92YWwgPDwgMSk7XG4gICAgICBpZiAoY29udGV4dF9kYXRhX3Bvc2l0aW9uID09IGJpdHNQZXJDaGFyLTEpIHtcbiAgICAgICAgY29udGV4dF9kYXRhLnB1c2goZ2V0Q2hhckZyb21JbnQoY29udGV4dF9kYXRhX3ZhbCkpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGVsc2UgY29udGV4dF9kYXRhX3Bvc2l0aW9uKys7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0X2RhdGEuam9pbignJyk7XG4gIH0sXG5cbiAgZGVjb21wcmVzczogZnVuY3Rpb24gKGNvbXByZXNzZWQpIHtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBudWxsKSByZXR1cm4gXCJcIjtcbiAgICBpZiAoY29tcHJlc3NlZCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gTFpTdHJpbmcuX2RlY29tcHJlc3MoY29tcHJlc3NlZC5sZW5ndGgsIDMyNzY4LCBmdW5jdGlvbihpbmRleCkgeyByZXR1cm4gY29tcHJlc3NlZC5jaGFyQ29kZUF0KGluZGV4KTsgfSk7XG4gIH0sXG5cbiAgX2RlY29tcHJlc3M6IGZ1bmN0aW9uIChsZW5ndGgsIHJlc2V0VmFsdWUsIGdldE5leHRWYWx1ZSkge1xuICAgIHZhciBkaWN0aW9uYXJ5ID0gW10sXG4gICAgICAgIG5leHQsXG4gICAgICAgIGVubGFyZ2VJbiA9IDQsXG4gICAgICAgIGRpY3RTaXplID0gNCxcbiAgICAgICAgbnVtQml0cyA9IDMsXG4gICAgICAgIGVudHJ5ID0gXCJcIixcbiAgICAgICAgcmVzdWx0ID0gW10sXG4gICAgICAgIGksXG4gICAgICAgIHcsXG4gICAgICAgIGJpdHMsIHJlc2IsIG1heHBvd2VyLCBwb3dlcixcbiAgICAgICAgYyxcbiAgICAgICAgZGF0YSA9IHt2YWw6Z2V0TmV4dFZhbHVlKDApLCBwb3NpdGlvbjpyZXNldFZhbHVlLCBpbmRleDoxfTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGRpY3Rpb25hcnlbaV0gPSBpO1xuICAgIH1cblxuICAgIGJpdHMgPSAwO1xuICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiwyKTtcbiAgICBwb3dlcj0xO1xuICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgIH1cbiAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgcG93ZXIgPDw9IDE7XG4gICAgfVxuXG4gICAgc3dpdGNoIChuZXh0ID0gYml0cykge1xuICAgICAgY2FzZSAwOlxuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIG1heHBvd2VyID0gTWF0aC5wb3coMiw4KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICBjID0gZihiaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLDE2KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICBjID0gZihiaXRzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBkaWN0aW9uYXJ5WzNdID0gYztcbiAgICB3ID0gYztcbiAgICByZXN1bHQucHVzaChjKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKGRhdGEuaW5kZXggPiBsZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGJpdHMgPSAwO1xuICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLG51bUJpdHMpO1xuICAgICAgcG93ZXI9MTtcbiAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgcmVzYiA9IGRhdGEudmFsICYgZGF0YS5wb3NpdGlvbjtcbiAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgIGRhdGEucG9zaXRpb24gPSByZXNldFZhbHVlO1xuICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgIH1cbiAgICAgICAgYml0cyB8PSAocmVzYj4wID8gMSA6IDApICogcG93ZXI7XG4gICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGMgPSBiaXRzKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBiaXRzID0gMDtcbiAgICAgICAgICBtYXhwb3dlciA9IE1hdGgucG93KDIsOCk7XG4gICAgICAgICAgcG93ZXI9MTtcbiAgICAgICAgICB3aGlsZSAocG93ZXIhPW1heHBvd2VyKSB7XG4gICAgICAgICAgICByZXNiID0gZGF0YS52YWwgJiBkYXRhLnBvc2l0aW9uO1xuICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA+Pj0gMTtcbiAgICAgICAgICAgIGlmIChkYXRhLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgICAgZGF0YS5wb3NpdGlvbiA9IHJlc2V0VmFsdWU7XG4gICAgICAgICAgICAgIGRhdGEudmFsID0gZ2V0TmV4dFZhbHVlKGRhdGEuaW5kZXgrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBiaXRzIHw9IChyZXNiPjAgPyAxIDogMCkgKiBwb3dlcjtcbiAgICAgICAgICAgIHBvd2VyIDw8PSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSBmKGJpdHMpO1xuICAgICAgICAgIGMgPSBkaWN0U2l6ZS0xO1xuICAgICAgICAgIGVubGFyZ2VJbi0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYml0cyA9IDA7XG4gICAgICAgICAgbWF4cG93ZXIgPSBNYXRoLnBvdygyLDE2KTtcbiAgICAgICAgICBwb3dlcj0xO1xuICAgICAgICAgIHdoaWxlIChwb3dlciE9bWF4cG93ZXIpIHtcbiAgICAgICAgICAgIHJlc2IgPSBkYXRhLnZhbCAmIGRhdGEucG9zaXRpb247XG4gICAgICAgICAgICBkYXRhLnBvc2l0aW9uID4+PSAxO1xuICAgICAgICAgICAgaWYgKGRhdGEucG9zaXRpb24gPT0gMCkge1xuICAgICAgICAgICAgICBkYXRhLnBvc2l0aW9uID0gcmVzZXRWYWx1ZTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBnZXROZXh0VmFsdWUoZGF0YS5pbmRleCsrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJpdHMgfD0gKHJlc2I+MCA/IDEgOiAwKSAqIHBvd2VyO1xuICAgICAgICAgICAgcG93ZXIgPDw9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGRpY3Rpb25hcnlbZGljdFNpemUrK10gPSBmKGJpdHMpO1xuICAgICAgICAgIGMgPSBkaWN0U2l6ZS0xO1xuICAgICAgICAgIGVubGFyZ2VJbi0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVubGFyZ2VJbiA9PSAwKSB7XG4gICAgICAgIGVubGFyZ2VJbiA9IE1hdGgucG93KDIsIG51bUJpdHMpO1xuICAgICAgICBudW1CaXRzKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWN0aW9uYXJ5W2NdKSB7XG4gICAgICAgIGVudHJ5ID0gZGljdGlvbmFyeVtjXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjID09PSBkaWN0U2l6ZSkge1xuICAgICAgICAgIGVudHJ5ID0gdyArIHcuY2hhckF0KDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaChlbnRyeSk7XG5cbiAgICAgIC8vIEFkZCB3K2VudHJ5WzBdIHRvIHRoZSBkaWN0aW9uYXJ5LlxuICAgICAgZGljdGlvbmFyeVtkaWN0U2l6ZSsrXSA9IHcgKyBlbnRyeS5jaGFyQXQoMCk7XG4gICAgICBlbmxhcmdlSW4tLTtcblxuICAgICAgdyA9IGVudHJ5O1xuXG4gICAgICBpZiAoZW5sYXJnZUluID09IDApIHtcbiAgICAgICAgZW5sYXJnZUluID0gTWF0aC5wb3coMiwgbnVtQml0cyk7XG4gICAgICAgIG51bUJpdHMrKztcbiAgICAgIH1cblxuICAgIH1cbiAgfVxufTtcbiAgcmV0dXJuIExaU3RyaW5nO1xufSkoKTtcblxuaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24gKCkgeyByZXR1cm4gTFpTdHJpbmc7IH0pO1xufSBlbHNlIGlmKCB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUgIT0gbnVsbCApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBMWlN0cmluZ1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbHotc3RyaW5nL2xpYnMvbHotc3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9