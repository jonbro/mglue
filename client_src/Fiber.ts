export class Fiber
{
  private ops : any = [];
  private waitCounter : number = 0;
  private current : number = 0;
  isDestroying : boolean = false;
  do(fn:Function):Fiber
  {
    this.ops.push(fn);
    return this;
  }
  wait(time:number):Fiber
  {
    let t = this;
    this.ops.push(()=>{
      t.waitCounter = time;
    });
    return this;
  }
  update():void
  {
    if(this.ops.length == 0)
    {
      return;
    }
    if(this.waitCounter > 0)
    {
      this.waitCounter--;
    }
    else
    {
      this.ops[this.current]();
      this.current = (this.current+1)%this.ops.length;
    }
  }
}
