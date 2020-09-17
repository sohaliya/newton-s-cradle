
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	fill("white");



	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(400,50,800,50);
	bob1 = new Bob(350,600,100);
	bob2 = new Bob(450,600,100);
	bob3 = new Bob(550,600,100);
	bob4 = new Bob(650,600,100);
	bob5 = new Bob(750,600,100);
	rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	rope5 = new Rope(bob5.body,roof.body,200,0);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 
}

   



