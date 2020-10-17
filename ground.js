class Ground {

    constructor(x, y, width , height) {

       var GroundOptions ={
           isStatic: true
       }
      
       this.width = width;
       this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, GroundOptions);
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(225);
        rect(pos.x, pos.y, this.width, this.height);
        //pop();
    }
}