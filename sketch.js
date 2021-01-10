
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var a;
var ground1,platform1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var polygon,polygon_image;
var slingshot1;
var score1;
var backgroundImg;


var circles=[];
function preload(){
polygon_image = loadImage("polygon.png");
getTime();
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1600,1600);
  stroke(255)
 score1=0;
 
  ground1 = new Ground(800,1580,1600,40);
  platform1 = new Ground(1000,1160,480,40);
//base
  block1 = new Box (860,470,60,50);
  block2 =  new Box(930,470,60,50);
  block3 = new Box(1000,470,60,50);
  block4 = new Box(1070,470,60,50);
  block5 = new Box(1140,470,60,50);
  //mid floor
  block6 = new Box(930,390,60,50);
  block7 = new Box(980,390,60,50);
  block8 = new Box(1050,390,60,50);
  block9 = new Box(980,390,60,50);
  //top
  block10 = new Box(1050,310,60,50);
  polygon=Bodies.circle(50,50,100);
 World.add(world,polygon);
 
 slingshot1 = new SlingShot(this.polygon,{x:200,y:400});
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  Engine.update(engine);
  //if(backgroundImg)
  background(0);

  noStroke();
  textSize(35)
  fill("white")
//  text("Score  " + score, width-300, 50)
  imageMode(CENTER);
  image(polygon_image,polygon.position.x,polygon.position.y,50,50)
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  /*
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/4)
}*/
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 ground1.display();
 platform1.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();

 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 textSize(30);
 fill(255);
 text("SCORE: "+score1,1400,40);

}

function keyPressed ()
{
  if(keyCode === 32)
  {
  
   slingshot1.attach(this.polygon);
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot1.fly();
}


/*async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
      bg = "sprites/bg2.jpg";
  
      
    }
    else{bg = "sprites/bg1.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
*/

