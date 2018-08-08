
var bg;

function setup() {

    createCanvas(5000, 5000);
    bg = loadImage("canvas.jpg");
    background(bg);

}

var value = 0;

function draw() {
 
  fill(value);
  rect(25, 25, 50, 50);

}

function mouseDragged() {

  value = value + 5;

  if (value > 255) {
    value = 0;
    
    var y = 0;
  }

  point(mouseX,mouseY);

}

