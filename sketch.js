
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // write the code to change background color 
  // to red when RIGHT_ARROW is pressed
  if(keyIsDown(RIGHT_ARROW))
  {
    background("red");
    box.x=box.x+2;
  }
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    box.x=box.x-2    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
    box.y=box.y-2
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
    box.y=box.y+2
  }


  
  drawSprites();
}

