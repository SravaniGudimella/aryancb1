
var packageBody,ground,trash,trash2,trash3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	packageBody = new paper;
	trash = new trashcan(680,620,10,70);
	trash2 = new trashcan(570,620,10,70);
	trash3 = new trashcan(625,640,110,10);

	ground = Bodies.rectangle(400, 680, 800, 20 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
	console.log("ih");
    keyPressed();
}

function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageBody.display();
  trash.display();
  trash2.display();	
  trash3.display();

	rect(ground.position.x, ground.position.y, 800,20);
 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(packageBody.body,packageBody.body.position, {x: 85, y: -85});
		console.log(packageBody.body.position.x)
		console.log("10");
	}
}


