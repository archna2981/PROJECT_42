var scImg,scImg1,scImg2,scImg3;
var issImg;
var hasDocked = false;

function preload(){
  scImg1 = loadImage("Docking-undocking/spacecraft1.png");
  scImg2 = loadImage("Docking-undocking/spacecraft2.png");
  scImg3 = loadImage("Docking-undocking/spacecraft3.png");
  scImg4 = loadImage("Docking-undocking/spacecraft4.png");
  issImg = loadImage("Docking-undocking/iss.png");
  bg = loadImage("Docking-undocking/spacebg.jpg");
}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285, 240);
  spaceCraft.addImage(scImg1);
  spaceCraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;
  
}

function draw() {
  background(bg); 

  if(!hasDocked){

  }

  if(keyDown("UP_ARROW")){
    spaceCraft.y=spaceCraft.y-2;
    spaceCraft.addImage(scImg2);
    spaceCraft.changeImage(scImg2);
  }

  if(keyDown("DOWN_ARROW")){
    spaceCraft.y=spaceCraft.y+2;
    spaceCraft.addImage(scImg1);
    spaceCraft.changeImage(scImg1);
  }

  if(keyDown("LEFT_ARROW")){
    spaceCraft.x=spaceCraft.x-2;
    spaceCraft.addImage(scImg3);
    spaceCraft.changeImage(scImg3);
  }

  if(keyDown("RIGHT_ARROW")){
    spaceCraft.x=spaceCraft.x+2;
    spaceCraft.addImage(scImg4);
    spaceCraft.changeImage(scImg4);
  }

  if(spaceCraft.x<285,spaceCraft.y<198){
    fill("red");
    textSize(50);
    text("Docking Succesful",300,350);
  }

  console.log(spaceCraft.x,spaceCraft.y);
  drawSprites();
}