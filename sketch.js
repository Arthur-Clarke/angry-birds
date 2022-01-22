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
var gameState = "onsling";
var score = 0;
var life = 3, lifeImage;

function preload(){
 getBackgroundImage();
 lifeImage = loadImage("sprites/coracao.png");
}

function setup() {
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
    if(bgImage){
     background(bgImage);
    }
    textSize(35);
    fill("white");
    text("score: "+ score,width-300,50);
    text(life,width-400,50);
    image(lifeImage,width-450,20,35,35);
    if(life <= 0 && score != 400){
        fill("red");
        text("GAMEOVER", width/2 - 50, height/2);
    }
    if(score == 400){
        fill("yellow");
        text("YOU WIN", width/2 - 50, height/2);
    }

    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    plataforma.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display(gameState);
    slingShot.display();

}

function mouseDragged(){
    if(gameState == "onsling" && life > 0 && score < 400){
     Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
    }
}

function mouseReleased(){
    if(life > 0 && score < 400){
        slingShot.fly();
        gameState = "launched";
    }
}
function keyPressed(){
    if(keyCode == 32 && gameState == "launched"){
        slingShot.attach(bird);
        gameState = "onsling";
        life = life - 1;
    }
}

async function getTime() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11, 13);
    return hour;
}

async function getBackgroundImage() {
    var hour = await getTime();
    if(hour>=06 && hour<19){
     var bg = "sprites/bg.png";
    }
    else{
     var bg = "sprites/bg2.jpg";
    }
    bgImage = loadImage(bg);
}