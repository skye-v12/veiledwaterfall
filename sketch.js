function setup() {
  createCanvas(400, 400);
  frameRate(20);
 
}

function draw() {
  background(135,120,200);
  
  
  line(pmouseX,pmouseY,mouseX,mouseY);
  
}
function mouseDragged(){
  background(135,120,200);
    fill(130,200,130);
  noStroke();
circle(mouseX,mouseY,50);
 
  
  
  
}