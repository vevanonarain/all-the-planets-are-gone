var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,back

function setup() {
  createCanvas(1375,575);
  back=createSprite(750,400,1500,800);
  back.shapeColor="black";
  sun=createSprite(150,250,75,75);
  sun.shapeColor="yellow";
  mercury=createSprite(350,250,40,40);
  mercury.shapeColor="pink";
  venus=createSprite(450,250,40,40);
  venus.shapeColor="orange";
  earth=createSprite(550,250,40,40);
  earth.shapeColor="green";
  mars=createSprite(650,250,40,40);
  mars.shapeColor="red"
  jupiter=createSprite(850,250,40,40);
  jupiter.shapeColor="brown";
  saturn=createSprite(950,250,40,40);
  saturn.shapeColor="white";
  uranus=createSprite(1050,250,40,40);
  uranus.shapeColor="purple";
  neptune=createSprite(1150,250,40,40);
  neptune.shapeColor="blue";



}
function draw(){
  if(World.frameCount%60===0){
   sun.width=sun.width+20;
  }

  sun.setCollider("circle",0,0,75);
  mercury.setCollider("circle",0,0,40);
  venus.setCollider("circle",0,0,40);
  earth.setCollider("circle",0,0,40);
  mars.setCollider("circle",0,0,40);
  jupiter.setCollider("circle",0,0,40);
  saturn.setCollider("circle",0,0,40);
  uranus.setCollider("circle",0,0,40);
  neptune.setCollider("circle",0,0,40);

  if(collide(mercury,sun)){
    mercury.destroy();
  }
  if(collide(venus,sun)){
    venus.destroy();
  }
  if(collide(earth,sun)){
    earth.destroy();
  }
  if(collide(mars,sun)){
    mars.destroy();
  }
  if(collide(jupiter,sun)){
    jupiter.destroy();
  }
  if(collide(saturn,sun)){
    saturn.destroy();
  }
  if(collide(uranus,sun)){
    uranus.destroy();
  }
  if(collide(neptune,sun)){
    neptune.destroy();
  }
if (sun.width>2575){
  back.shapeColor="blue";
}
 

  drawSprites();
}

  function collide(object1,object2){
    if(object1.x-object2.x<object1.width/2+object2.width/2
      &&object2.x-object1.x<object1.width/2+object2.width/2
      &&object1.y-object2.y<object2.height/2+object1.height/2
      &&object2.y-object1.y<object1.height/2+object2.height/2){
       return true;
    }else{
      return false;
    }
}
