var movingrect,fixedrect,ball1,ball2
function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  fixedrect = createSprite(300, 200, 50, 50);
  movingrect.shapeColor = "green"
  fixedrect.shapeColor = "green"
  ball1 = createSprite(50,100,30,30);
  ball2 = createSprite(200,100,30,30);
  ball1.velocityX = 3;
  ball2.velocityX = -3;
  ball1.shapeColor = "red";
  ball2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  
  movingrect.x = mouseX
  movingrect.y = mouseY
 if(isTouching(fixedrect,movingrect)){
 movingrect.shapeColor = "yellow";
 fixedrect.shapeColor = "yellow";
 }
 else{
   movingrect.shapeColor = "green";
   fixedrect.shapeColor = "green";
 }
 bounceOff(ball1,ball2);
  drawSprites();
}