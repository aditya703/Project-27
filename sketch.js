
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(350, 400);
	bob2 = new Bob(400, 400);
	bob3 = new Bob(450, 400);
	bob4 = new Bob(300, 400);
	bob5 = new Bob(250, 400);
	roof = new Roof(width/2, 200, 250, 20);
	string1 = new rope(roof.body, bob1.body, 350);
	string2 = new rope(roof.body, bob2.body, 400);
	string3 = new rope(roof.body, bob3.body, 450);
	string4 = new rope(roof.body, bob4.body, 300);
	string5 = new rope(roof.body, bob5.body, 250);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  drawSprites();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setStatic(bob5.body, false);
		Matter.Body.setStatic(bob4.body, false);
		Matter.Body.setStatic(bob3.body, false);
		Matter.Body.setStatic(bob2.body, false);
		Matter.Body.setStatic(bob1.body, false);
		Matter.Body.applyForce(bob5.body, bob5.body.position,{x:50, y:-10});
	}
}



