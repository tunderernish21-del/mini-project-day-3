function setup() {
  createCanvas(1300,1300);
  background(0);
}

function draw() {
  
  noStroke(0);
  fill(200,0,100)
  ellipse(mouseX, mouseY, 25)
}

function mousePressed() {
  background(100);
}