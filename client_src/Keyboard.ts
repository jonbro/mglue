import { Vector } from "./Vector";
import { Display } from "./Display";

export class Keyboard
{
    static keyDown: boolean[];
    static readonly LEFT = 37;
    static readonly UP = 38;
    static readonly RIGHT = 39;
    static readonly DOWN = 40;
    static readonly SPACE = 32;
    static initialize()
    {
        Keyboard.keyDown = [];
        for (let i = 0; i < 255; i++) {
            Keyboard.keyDown[i] = false;
            window.onkeydown = (e) =>
            {
                Keyboard.keyDown[e.keyCode] = true;
                if(e.keyCode >= 37 && e.keyCode <= 40)
                {
                    e.preventDefault();
                }
                if(e.keyCode == 32)
                {
                    e.preventDefault();
                }
            }
            window.onkeyup = (e) =>
            {
                Keyboard.keyDown[e.keyCode] = false;
            }
        }
    }
}
Keyboard.initialize();