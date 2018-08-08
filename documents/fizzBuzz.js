const haveMoney = true;
const hungry = true;
const buyBurger = haveMoney && hungry;
if(buyBurger){
    console.log("Buying Buger");
}

const coldDrink = false;
const airCondOn = true;

if(coldDrink || airCondOn){
    console.log("Ahhhhh");
}

const number = 15;

const divBy3 = number % 3 == 0;
const divBy5 = number % 5 == 0;

if(divBy3 && divBy5){
    console.log("FizzBuzz");
} else if(divBy3){
console.log("Fizz");
}else if(divBy5) {
    console.log("Buzz");
}    