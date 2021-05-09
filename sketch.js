var player;

document.addEventListener('contextmenu', event => event.preventDefault());

function setup() {
  createCanvas(1000,1000);

  player = createSprite(100, 100, 50, 50);
  player.shapeColor = "blue";

}

function draw() {
  background(255,255,255);  

  camera.x = player.x;
  camera.y = player.y;

  text("X:", player.x+40, player.y-10);  
  text(player.x, player.x+55, player.y-10);
  
  text("Y:", player.x+40, player.y+10);
    text(player.y, player.x+55, player.y+10);


  keysPressed();
  drawSprites();
}

function keysPressed(){
  
  if(keyDown("w")){
 player.y = player.y-10;
}

if(keyDown("s")){
 player.y = player.y+10;
}

  if(keyDown("a")){
  player.x = player.x-10;
}

if(keyDown("d")){
  player.x = player.x+10;
}

}