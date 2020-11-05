const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ball, ground ,ball2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var ball_options={  restitution:1  }
  ball = Bodies.rectangle(200,100,50,50,ball_options);
  World.add(world,ball)
  
  var ball2_options = { restitution:2, friction:1.5 ,density:1.2 }
  ball2 = Bodies.circle(100,300,30,ball2_options)
  World.add(world,ball2)

  var ground_options={  isStatic:true  }
  ground = Bodies.rectangle(width/2,height-10, width, 20, ground_options);
  World.add(world,ground)


  
  
}

function draw() {
  background(220,255,255); 

  Engine.update(engine);
  //console.log("ball " + ball);
  rectMode(CENTER);
  rect(ball.position.x,ball.position.y,50,50);

  rect(ground.position.x,ground.position.y,width,20);
  

  ellipseMode(RADIUS);
  ellipse(ball2.position.x, ball2.position.y ,30 ,30);


}