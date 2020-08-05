
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2;
var roof;
var Anchor1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,150,15);
	bobObject2 = new Bob(250,150,15);
	roof = new Roof(600,100,50,5);
	Anchor1 = new Chain(bobObject1.body,roof.body);
	Anchor2 = new Chain(bobObject2.body,roof.body)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bobObject1.display();
  bobObject2.display();
  roof.display();
  Anchor1.display();
  Anchor2.display();
  
  drawSprites();
 
}



