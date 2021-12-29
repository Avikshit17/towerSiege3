const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, ground;
var stand1, stand2;
var slingShot;
var rock_img;
var hexagon;
var bg
function preload() {
  rock_img = loadImage("rock.png");
  decideBackGround()
}
function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground();
  stand1 = new Stand(390, 300, 250, 10);
  stand2 = new Stand(700, 200, 200, 10);
  block1=new Block(300,275,30,40)
  block2=new Block(330,275,30,40)
  block3=new Block(360,275,30,40)
  block4=new Block(390,275,30,40)
  block5=new Block(420,275,30,40)
  block6=new Block(450,275,30,40)
  block7=new Block(480,275,30,40)
  block8=new Block(330,235,30,40)
  block9=new Block(360,235,30,40)
  block10=new Block(390,235,30,40)
  block11=new Block(420,235,30,40)
  block12=new Block(450,235,30,40)
  block13=new Block(360,195,30,40)
  block14=new Block(390,195,30,40)
  block15=new Block(420,195,30,40)
  //stand 2
  block16=new Block(640,175,30,40)
  block17=new Block(670,175,30,40)
  block18=new Block(700,175,30,40)
  block19=new Block(730,175,30,40)
  block20=new Block(760,175,30,40)
  block21=new Block(670,135,30,40)
  block22=new Block(700,135,30,40)
  block23=new Block(730,135,30,40)
  block24=new Block(700,95,30,40)

  //level one

  hexagon = new Hexagon(150, 250, 50, 50);

  slingShot = new Slingshot(hexagon.body, { x: 150, y: 250 });
}

function draw() {
  if(bg)
  background(bg);

  
  // write image() to display the polygon image
  //use the same x and y position as ball

  stroke(0, 0, 0);
  fill("white");
  textSize(20);
  fill("lightyellow");
  text(
    "Drag the Hexagonal Stone and Release it, to launch it towards the blocks",
    100,
    30
  );

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(0, 0, 0);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  

  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block21.display();
  block22.display();
  block23.display();
  
  fill("gold");
  block13.display()
  block14.display()
  block15.display()
  block24.display()
  hexagon.display();

  slingShot.display();
}
function mouseDragged() {
  Matter.Body.setPosition(hexagon.body, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}
async function decideBackGround(){
var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
var data=await response.json()
var dateTime=data.datetime
var hour=dateTime.slice(11,13)
if(hour>=6 && hour<=16){
bg=loadImage("morningBg.jpg")
}
else{
  bg=loadImage("nightBg.jpg")
}
}
