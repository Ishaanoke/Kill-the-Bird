const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var crow1,crow2,crow3,crow4;
var arrow,slingshot;
var sky;
var engine,world;

var stone,tree,sling,boy;

function preload(){
 sky = loadImage("Images/sky.png");
 boy=loadImage("Images/boy.png");
}
function setup(){
  createCanvas(windowWidth,windowHeight);
engine = Engine.create();
world = engine.world;
 crow1 = new Crow(width-150,120,100);
 crow2 = new Crow(width-250,180,100);
 crow3 = new Crow(width-200,200,100);
 crow4 = new Crow(width-160,180,100);
  stone= new Stone(150,400,30);
  tree = new Tree(width-230,height-50,30)
  sling = new launcher(stone.body,{x:150,y:400})
}
function draw(){
  background(sky);

  Engine.update(engine);
  image (boy,100,height-300,300,300);
  
  stone.display();
  tree.display();
  crow1.display();
  crow2.display();
  crow3.display();
  crow4.display();
  detectollision(stone,crow1);
  detectollision(stone,crow2);
  detectollision(stone,crow3);
  detectollision(stone,crow4);
}
function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}
function mouseReleased()
{
	sling.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}


function detectollision(stone,crow){
	
  var mangoBodyPosition=crow.body.position
  var stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=crow.radius+stone.r)
    {
      
  	  Matter.Body.setStatic(crow.body,false);
    }

  }