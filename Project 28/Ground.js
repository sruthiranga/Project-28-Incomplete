class Ground{
    constructor(x, y, width, height){
        var options={
            isStatic: true,
            restitution: 0.8,
            friction: 1,
            density: 1 
        }
    this.ground = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/ground.png");
    World.add(world, this.ground);

        }
        display(){
      var pos =this.ground.position;
      rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}
