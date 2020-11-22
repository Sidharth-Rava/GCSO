var car, wall; 
var safeImg,lethalImg,averageImg,mainImg;
var speed, weight; 
var deformation

function preload(){

 mainImg = loadImage("main.jpg");
 safeImg = loadImage("safe.jpg");
 averageImg = loadImage("average.jpg");
 lethalImg = loadImage("lethal.jpg");

}

function setup() {

  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 50,50);
  car.shapeColor = "white";
  car.addImage(mainImg);
  car.scale = 0.5;
  car.velocityX = speed;

  wall = createSprite(1320,200,60,200);
  wall.shapeColor = ("grey");

}

function draw() {
  background("black");

  if (wall.x - car.x + 60 < (car.width + wall.width)/2) {
      car.velocityX = 0;

    var deformation = 0.5 * weight * speed * speed/22500

    if(deformation > 180)
    {
      car.addImage(lethalImg);
    }

    if(deformation < 180 && deformation > 100)
    {
      car.addImage(averageImg);
    }

    if(deformation < 100)
    {
      car.addImage(safeImg);
    }

  }

  drawSprites();
}