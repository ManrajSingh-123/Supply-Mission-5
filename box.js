class box
{
    constructor(x,y,width,height)
    {
        var options=
        {
         isStatic:true
        }

        this.boxObject=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.boxObject);
    }

    display()
    {
     
        rectMode(CENTER);
        fill("red");
        rect(this.boxObject.position.x,this.boxObject.position.y,this.width,this.height);

    }
    
}