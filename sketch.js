const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball, ground, wall, wall1, wall2;

function setup() { 
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ball = new Ball(50,500,30);
  
  wall = Bodies.rectangle(1000, 650, 200, 20 , {isStatic:true} );
  World.add(world, wall);

  wall1 = Bodies.rectangle(1100, 550, 20, 300 , {isStatic:true} );
  World.add(world, wall1);

  wall2 = Bodies.rectangle(900, 550, 20, 300 , {isStatic:true} );
  World.add(world, wall2);

    
  ground = new Ground(600,600,1500,10);
  
  
  
  wallSprite=createSprite(1050,650, 200,20);
  wallSprite.shapeColor=color(255)

  wall1Sprite=createSprite(1150,550,20,200);
  wall1Sprite.shapeColor=color(255);

  wall2Sprite=createSprite(950,550,20,200);
  wall2Sprite.shapeColor=color(255);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
 drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:180,y:-180});
  
  }
}



