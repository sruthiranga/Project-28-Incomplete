class Tree{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction: 1,
            density: 1 
        }
        this.tree = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.tree);
    }

    display(){
        var angle = this.tree.angle;
        push();
        translate(this.tree.position.x, this.tree.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}