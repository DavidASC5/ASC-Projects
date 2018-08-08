let player1 = 0
let player2 = 0

   // Creating HP for both PKMN

let player1Health = 300
let player2Health = 300
   
// Creating the Canvas

skyTex = 0
skyMove = 430
function setup(){
   createCanvas(1001,1001)
   for(i=0;i<300;i++){
       fill(76,236-skyTex,236-skyTex)
       rect(0,skyMove,1000,-2)
       skyTex = skyTex + .8
       skyMove = skyMove - 2
   }
   fill("green")
   rect(0,430,1000,700);
   fill(79,225,118);
   ellipse(200,800,500,200);
   ellipse(700, 650, 250, 100);
   fill("brown")
   rect(180,500,150,300)
   rect(130,550,150,300)
   quad(130,550,180,500,330,500,280,550)
   quad(330,500,280,550,280,850,330,800)
   fill("blue");
   rect(660, 420, 150/1.5, 300/1.5);
   rect(620, 460, 150/1.5, 300/1.5);
   quad(620,460,660,420,760,420,720,460)
   quad(720,460,760,420,760,620,720,660)
}
function draw(){
    fill("grey")
    textSize(20);
    text("FIGHT",600,50);  
    rect(600,50,100,50);

    textSize(20);
    text("BAG",720,50);
    rect(720,50,100,50);
    textSize(20);
    text("PKMN",600,120);   
    rect(600,120,100,50); 
    textSize(20);
    text("RUN",720,120);
    rect(720,120,100,50);
}
function mousePressed(){
   if(mouseX >= 600 && mouseX <= 700 && mouseY >= 50 && mouseY <= 100){
       //this rect is just for test \/\/
       rect(0,0,30,30)
       player2Health = player2Health - 10
   console.log(player2Health)        
   }
   if(mouseX >= 720 && mouseX <= 820 && mouseY >= 50 && mouseY <= 100){
       //this rect is just for test \/\/
       fill("black")
       rect(0,0,30,30)
       player2Health = player2Health - 25
   console.log(player2Health)
   }
   if(mouseX >= 600 && mouseX <= 700 && mouseY >= 120 && mouseY <= 170){
       //this rect is just for test \/\/
       fill("white")
       rect(0,0,30,30)
       player2Health = player2Health - 50
   console.log(player2Health)
   }
   if(mouseX >= 720 && mouseX <= 820 && mouseY >= 120 && mouseY <= 170){
       fill("orange")
       rect(0,0,30,30)
       attackChance = Math.random()
       if(attackChance >=0.6){
           player2Health = player2Health - 150
       }
       if(attackChance < 0.6){
           player2Health = player2Health - 10
       }
       console.log(player2Health)
    }
}