var fixedRect, object1;
var g1,g2 ; 
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1 = createSprite(200,200,30,30);
  g2 = createSprite(300,400,30,30);
  g1.velocityY = +5;
  g2.velocityY = -5;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

 bounceOff(g1,g2);
  drawSprites();

}

