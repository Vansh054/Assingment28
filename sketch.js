
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, ground, groundImage, boy, stone, rope, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;
	
	tree = new Tree(1200,300,900,950)
	boy = new Boy(350,575,400,550)
	stone = new Stone(225,450)
	rope = new Rope(stone.body,{x:225,y:450})
	mango1 = new Mango(950,225,90,90)
	mango2 = new Mango(1100,275,90,90)
	mango3 = new Mango(865,125,90,90)
	mango4 = new Mango(1450,50,90,90)
	mango5 = new Mango(1400,200,90,90)
	mango6 = new Mango(1575,175,90,90)
	mango7 = new Mango(1050,150,90,90)
	mango8 = new Mango(1200,50,90,90)
	mango9 = new Mango(1000,50,90,90)
	mango10 = new Mango(1200,150,90,90)
	mango11 = new Mango(1350,100,90,90)
    
    
    
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  
  stone.display();
  rope.display();
  tree.display();
  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	rope.stoneFly()
  }
  function keyPressed(){
	if (keyCode == 32)
	{
	  rope.stoneJoint(stone.body)
	}
  }


