var ship,ship_sailing

function preload(){
ship_sailing = loadAnimation("ship-1.png" , "ship-2.png")
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  

sea = createSprite(150,200,10,20)
sea.addImage("sea", seaImage)
sea.scale=0.3
ship = createSprite(200,200,10,20)
ship.addAnimation("sailing", ship_sailing)
ship.scale=0.2
sea.x=sea.width/2


}

function draw() {
  background("lightblue");
  if(sea.x < 0) {
    sea.x=sea.width/2
  }


 sea.velocityX= -5


  drawSprites();
}

