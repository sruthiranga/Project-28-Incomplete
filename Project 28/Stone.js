class Stone{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2 
        }
        this.stone = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/stone.png");
        World.add(world, this.stone);
    }

    display(){
        var angle = this.stone.angle;
        push();
        translate(this.stone.position.x, this.stone.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}