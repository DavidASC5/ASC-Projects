const button = document.querySelector("button");
button.addEventListener("click", buttonFunction );
const secondButton = document.querySelector("second");
secondButton.addEventListener("click", buttonFunction );

function buttonFunction(){
    console.log("Button works!");
    event.preventDefault();
    const inputElement = document.querySelector('input');
    const userInput = inputElement.value;
    alert(userInput);

}