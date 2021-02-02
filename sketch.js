var Balloon, balloon;
var backGroundImg, background;

function preLoad(){

balloon = loadAnimation("Hot Air Balloon-02.png", "Hot Air Balloon-03.png", "Hot Air Balloon-04.png",)
backGroundImg = loadImage("Hot Air Balloon-01.png")

}

function setup() {

  createCanvas(500,500);
  
  Balloon = createSprite(250, 650, 50, 50);
  Balloon.addAnimation("colors", balloon);

}

function draw() {

  Background = addBackground(background = addImage("Background Image", backGroundImg))
  
  if(keyDown(LEFT_ARROW)){
    Balloon.x = Balloon.x - 10;
  }

  if(keyDown(LEFT_ARROW)){
    Balloon.x = Balloon.x + 10;
  }

  if(keyDown(LEFT_ARROW)){
    Balloon.y = Balloon.y - 10;
  }

  if(keyDown(LEFT_ARROW)){
    Balloon.y = Balloon.y + 10;
  }

  drawSprites();

}