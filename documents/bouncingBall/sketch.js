let x = 300
let y = 300
let d = 1

function setup() {
    createCanvas(600,600);
}

function draw(){
    background(255);
    ellipse(x,y,80,80);
    x+=d
    y+=d
   if(x>= 560 || y>= 560){
       
    d*= -1
   }
  
   if (x<= 0 || y<= 0){
d*= -1
   }
}