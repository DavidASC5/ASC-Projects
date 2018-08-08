function setup() {
createCanvas(300, 300);
    
let height = 100;
let width = 100;
let ratio = 4
ellipse(200, 200, height, width);
ellipse(200, 200, height/ratio, width/ratio);
line(250, 250, 350, 250);
}

// example image
// http://thecraftchop.com/files/others/Pokeball.svg

function setup(){
    createCanvas(300,300);
    background(225);

    //the "stroke" is the line drawn at the border of all shapes
    //similar to fill(), stroke() sets the color for the border on all shapes draw AFTERWARDS.
    stroke("black"); //default is "black"
    strokeWeight(5); //thickness in pixels
    
    //width is a global variable in p5.js for the width of canvas (which is 300 in this case). width/2 is the center width
    //height is a global variable in p5.js for the width of canvas (which is 300 in this case). height/2 is the center height

    //arc IS an ellipse, but with a starting and ending point. The "0" is considered the rightmost point on the circle. 
    //PI is half a circle. CHORD just connects the ends of the arc.

    //bottom half
    fill("white");
    arc(width/2, height/2, 200,200, 0, PI, CHORD);
    //top half
    fill("red");
    arc(width/2, height/2, 200,200, PI, 0, CHORD);

    //center
    fill("white");
    ellipse(width/2, height/2, 50);

    fill("black");
    ellipse(width/2, height/2, 25);

}
function setup() {
    createCanvas(500, 500);
}
var value = 0
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function mouseDragged() {
    ellipse(mouseX, mouseY, 5, 5);
    // prevent default
    return false;
  }