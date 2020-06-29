class paper{
    constructor(){
        var options={
            isStatic: false,
            restitution : 1.0,
            friction : 0.5,
            density: 1.2

        }
        this.body = Matter.Bodies.circle(100 , 620, 25, options );

        World.add(world,this.body)
    }
    display(){
     var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS)
        fill("blue");
      ellipse(0,0,25,25);
        pop();
      }
    };
