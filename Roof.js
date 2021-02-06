class Roof {
    constructor(x,y,width,height) {
        var options ={
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x+200,pos.y+100);
        rotate(angle);
        fill("grey");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();  
    }
}