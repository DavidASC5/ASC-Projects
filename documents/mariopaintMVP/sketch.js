function setup() {
    createCanvas(500, 500);
}
let value = "blue"
let valueTF = 0
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseClicked() {
    if(valueTF == 0){
        value = "red"
        valueTF = 1
        console.log(valueTF)
    }else if(valueTF == 1){
        value = "blue"
        valueTF = 2
        console.log(valueTF)
    }else{
        value = "green"
        valueTF = 0
        console.log(valueTF)
    }
}
