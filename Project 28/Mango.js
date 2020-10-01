class Mango{
    constructor(x, y, r){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1 
        }
        this.mango = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.mango);
    }

    display(){
        //var angle = this.mango.angle;
        push();
        //translate(this.stone.position.x, this.stone.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, this.mango.position.x, this.mango.position.y, this.r, this.r);
        pop();
    }
}