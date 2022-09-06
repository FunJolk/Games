var trex ,trex_running;
var ground, invisibleGround, groundImage;

var cloud, cloudGroup, cloudImage;
var obs1, obs2, obs3, obs4, obs5, obs6;

var rand


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  trex_collide = loadAnimation("trex_collided.png")

  cloudImage = loadImage("cloud.png")

  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
 trex = createSprite(50, 150, 20 ,50);
 trex.scale = 0.5
 trex.addAnimation("running", trex_running);

 ground = createSprite(200, 180, 400, 20);
 ground.addImage("ground", groundImage);
 ground.x = ground.width /2;
 ground.velocityX = -4;

 invisibleGround = createSprite(200, 190, 400, 20);
 invisibleGround.visible = false;
}

function draw(){
  console.log(trex.y)
  background("white")
  
  drawSprites();

  spawnClouds();

  spawnObstacles();



  trex.collide(invisibleGround)
  
  trex.velocityY = trex.velocityY + 0.8 

  if(keyDown("space")&&trex.collide(invisibleGround)){
   trex.velocityY = -10;
  }
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

}

function spawnClouds() {
  if (frameCount % 60 === 0)
    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage("cloud.png", cloudImage)
    cloud.y = Math.round(random(10, 250))
    cloud.scale = 0.4;
    cloud.velocityX = -3;

    cloud.depth = trex.depth;

    trex.depth = trex.depth +1;

    cloud.lifetime = 200;

}
 
function spawnObstacles(){
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(390, 150, 10, 70)
    obstacle.velocityX = -6,

    var rand = Math.round(random(1, 6));
    
    switch(rand){
      case 1:
        obstacle.addImage("rotulo", obs1)
        break;
      case 2:
        obstacle.addImage("rotulo", obs2)
        break;
      case 3:
        obstacle.addImage("rotulo", obs3)
        break;
      case 4:
        obstacle.addImage("rotulo", obs4)
        break;
      case 5:
        obstacle.addImage("rotulo", obs5)
        break;
      case 6:
        obstacle.addImage("rotulo", obs6)
        break;
      default:
        break;       
      }
      obstacles.scale = 0.5;
  }
}
