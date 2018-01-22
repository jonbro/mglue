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
    static onMouseUp(e)
    {
        Mouse.isPressed = false;
    }
    static onMouseDown(e)
    {
        Mouse.isPressed = true;
        Mouse.onMouseMove(e);
    }
    static onMouseMove(e)
    {
        e.preventDefault()
        //@wasMoving = true
        let rect = e.target.getBoundingClientRect()
        Mouse.position.x = ((e.pageX - rect.left) / Display.size.x)
        Mouse.position.y = ((e.pageY - rect.top) / Display.size.y)
    }
    /*
@onMouseDown: (e) =>
    @ip = true
    @onMouseMove e
    G.onfocus()
@onMouseUp: (e) =>
@ip = false
*/
}