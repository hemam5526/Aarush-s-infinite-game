var Play = 1;
var End = 0;
var gameState = Play;
var alien, alien_running, alien_collided;
var background, background_image;

function preload(){

alien_running = loadAnimation("alien_1.png","alien_2.png","alien_3.png",
"alien_4.png","alien_5.png","alien_6.png","alien_7.png","alien_8.png")

  
  
}

function setup(){
  createCanvas(600,600);
  
  alien = createSprite(50,50,30,30)
  alien.addAnimation("running",alien_running)
}

function draw(){
  
  drawSprites();
}

