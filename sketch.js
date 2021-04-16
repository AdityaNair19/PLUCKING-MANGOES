
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var slingShot, stone, boy, tree, mango, BoyImg, TreeImg, MangoImg
function preload()
{
	BoyImg = loadImage("sprites/boy.png");
	MangoImg = loadImage("sprites/mango.png");
	TreeImg = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	slingShot = new SlingShot(stone.body,{x:200, y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  tree.display();
  boy.display();
  slingShot.display(); 
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x : mouseX, y : mouseY})
}

function mouseReleased(){
    slingShot.fly();
}



