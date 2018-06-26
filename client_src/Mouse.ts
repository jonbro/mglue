import { Vector } from "./Vector";
import { Display } from "./Display";

export class Mouse
{
    static position : Vector;
    static isPressed : boolean;
    static pressedThisFrame : boolean = false;
    private static wasPressed : boolean = false;
    static initialize()
    {
        Mouse.position = new Vector(0.5, 0.5);
        Display.element.addEventListener('mousedown', Mouse.onMouseDown);
        Display.element.addEventListener('mouseup', Mouse.onMouseUp);
        Display.element.addEventListener('mousemove', Mouse.onMouseMove);
        Display.element.addEventListener('touchstart', this.onTouchStart);
		Display.element.addEventListener('touchmove', this.onTouchMove);
        Display.element.addEventListener('touchend', this.onTouchEnd);
    }
    static onMouseUp(e:any)
    {
        Mouse.isPressed = false;
    }
    static onMouseDown(e:any)
    {
        Display.element.focus();
        console.log("focusing?", document.activeElement, Display.element);
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
    static onTouchMove(e)
    {
        e.preventDefault()
        let rect = e.target.getBoundingClientRect()
        let touch = e.touches[0]
        Mouse.position.x = ((touch.pageX - rect.left) / Display.size.x).clamp(0, 1);
        Mouse.position.y = ((touch.pageY - rect.top) / Display.size.y).clamp(0, 1);
    }
    static onTouchStart(e)
    {
        Mouse.isPressed = true;
        Mouse.onTouchMove(e);
    }
    static onTouchEnd(e)
    {
        Mouse.isPressed = false;
    }
    static Update()
    {
        Mouse.pressedThisFrame = Mouse.isPressed && !Mouse.wasPressed;
        Mouse.wasPressed = Mouse.isPressed;
    }
}
