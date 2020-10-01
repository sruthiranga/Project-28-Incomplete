
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, stone;

var boy, boyImage;

var mango1, mango2, mango3, mango4;

var constraint;

function preload(){
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(600, 450, 400, 400);

	ground = new Ground( 400, 650, 800, 20);

	
	boy = createSprite(250, 580, 10, 10);
	boy.addImage("boy_Image", boyImg);
	boy.scale = 0.1;

	stone = new Stone(200, 530, 50, 50);

	mango1 = new Mango(540, 450, 40);
	mango2 = new Mango(620, 420, 40);
	mango3 = new Mango(700, 435, 50);
	mango4 = new Mango(600, 340, 45);

	constraint = new Constraint(stone.body,{x:200, y:530})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree.display();

  ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  constraint.display();

  drawSprites();
 
}

/*function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
	gameState = "launched";*/



