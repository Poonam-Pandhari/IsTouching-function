var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObjects  = createSprite(100,900,30,100);
  gameObjects.shapeColor = "pink";
  gameObjects.debug = true;

  gameObjects1  = createSprite(30,200,50,20);
  gameObjects1.shapeColor = "yellow";
  gameObjects1.debug = true;

  gameObjects2  = createSprite(500,650,250,100);
  gameObjects2.shapeColor = "red";
  gameObjects2.debug = true;

  gameObjects3  = createSprite(457,235,100,200);
  gameObjects3.shapeColor = "blue";
  gameObjects3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  console.log(movingRect.x - fixedRect.x)

  if(isTouching(movingRect, gameObjects3)){
    movingRect.shapeColor = "red";
    gameObjects3.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    gameObjects3.shapeColor = "green";
  }

  if(isTouching(movingRect, gameObjects2)){
    movingRect.shapeColor = "red";
    gameObjects2.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    gameObjects2.shapeColor = "green";
  }
  
  if(isTouching(movingRect, gameObjects1)){
    movingRect.shapeColor = "red";
    gameObjects1.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    gameObjects1.shapeColor = "green";
  }
  
  if(isTouching(movingRect, gameObjects)){
    movingRect.shapeColor = "red";
    gameObjects.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    gameObjects.shapeColor = "green";
  }

  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  
  drawSprites();
}

function isTouching(object1 ,object2) {

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
  return false;
}


}