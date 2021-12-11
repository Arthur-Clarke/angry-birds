const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bird, box1, box2, box3, box4, box5, pig1, pig2, plataforma;
var log1, log2, log3, log4, log5;
var bgImage;
var slingShot;

function preload(){
 bgImage = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    plataforma = new Ground(150,305,300,170);
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    slingShot = new SlingShot(bird.body,{x:250, y:50});
}

function draw(){
    background(bgImage);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    plataforma.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    slingShot.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
    
}
function keyPressed(){
    if(keyCode == 32){
        slingShot.attach(bird.body);
    }
}