
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer1;
var stone1,rubber1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane=new Plane(600,height,1200,30);
	stone1=new Stone(150,320,70,70);
	rubber1=new Rubber(700,650,80);
	hammer1=new Hammer(400,400);
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  Engine.update(engine);
  hammer1.display();
  stone1.display();
  plane.display();
  rubber1.display();
  drawSprites();
 
}



