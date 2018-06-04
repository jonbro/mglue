import { Vector } from "./Vector";
import { Display } from "./Display";

export class Mouse
{
    static position : Vector;
    static isPressed : boolean;

    static initialize()
    {
        Mouse.position = new Vector(0.5, 0.5);
        Display.element.addEventListener('mousedown', Mouse.onMouseDown);
        Display.element.addEventListener('mouseup', Mouse.onMouseUp);
        Display.element.addEventListener('mousemove', Mouse.onMouseMove);
    }
    static onMouseUp(e:any)
    {
        Mouse.isPressed = false;
    }
    static onMouseDown(e:any)
    {
        Display.element.focus();
        Mouse.isPressed = true;
        Mouse.onMouseMove(e);
    }
    static onMouseMove(e:any)
    {
        e.preventDefault()
        //@wasMoving = true
        let rect = e.target.getBoundingClientRect()
        Mouse.position.x = ((e.pageX - rect.left) / Display.size.x)
        Mouse.position.y = ((e.pageY - rect.top) / Display.size.y)
    }
}
