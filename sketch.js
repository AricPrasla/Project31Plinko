const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var G1, Stand1, Stand2;
var backgroundImg;
var score = 0;
var divisions = [];
var divisionHeight = 300;
var plinkos = [];
var particles = [];

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  G1 = new Ground(width/2,height,width,20);
  for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 }
 for (var j = 75; j <=width; j=j+50) { 
  plinkos.push(new Plinko(j,75)); 
  }
  for (var j = 15; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,175)); 
    }
    for (var j = 75; j <=width; j=j+50) { 
      plinkos.push(new Plinko(j,275)); 
      }
      for (var j = 15; j <=width; j=j+50) { 
        plinkos.push(new Plinko(j,375)); 
        }
}
function draw() {
  background(0);
  Engine.update(engine);
  for (var k = 0; k < divisions.length; k++) { 
  divisions[k].display();
  }
  for (var k = 0; k < plinkos.length; k++) { 
    plinkos[k].display();
    }
    if(frameCount%60===0){ 
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     } 
   for (var j = 0; j < particles.length; j++) { 
  particles[j].display();
     }
}
