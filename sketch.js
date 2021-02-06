
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1, rope2, rope3,rope4, rope5;
var roof;
var bobDiameter = 40;


function setup() {
	createCanvas(1300, 650);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,100,400,20); 
	bobObject1 = new Bob(320,100,20);
	bobObject2 = new Bob(360,100,20);
	bobObject3 = new Bob(400,100,20);
	bobObject4 = new Bob(440,100,20);
	bobObject5 = new Bob(480,100,20);
	rope1 = new Rope(bobObject1.body, roof.body, 120,100);
	rope2 = new Rope(bobObject2.body, roof.body, 160,100);
	rope3 = new Rope(bobObject3.body, roof.body, 200,100);
	rope4 = new Rope(bobObject4.body, roof.body, 240,100);
	rope5 = new Rope(bobObject5.body, roof.body, 280,100);

	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background("orange");
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-5,y:6});
	}
}

