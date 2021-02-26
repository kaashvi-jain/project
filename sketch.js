var car,wall;
var speed,weight;
speed = random(50,90);
  weight = random(400,1500)
function setup() {
  createCanvas(800,400);
 car =  createSprite(400, 200, 50, 50);
 wall = createSprite(500,200,60,2);
 car.velocityX = speed;

  
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x <(car.width+wall.width/2)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;}
    if(deformation>180){
      car,shapeColor =color(255,0,0);

  }
  if(deformation<180 && deformation>100){
    car,shapeColor =color(230,230,0);}

    if(deformation<180){
      car,shapeColor =color(0,255,0);

  
  drawSprites();
