class Bob {
    constructor(x,y,r) {
        var options ={
            isStatic: false,
            restitution: 0.0,
            friction: 0.1,
            density:0.1
        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(x,y,r, options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}