//1.1
var button = document.getElementById("btnToClick");

function handleClick(event){
    console.log(event);
}

button.addEventListener("click", handleClick);

//1.2
const focusEvent = document.querySelector('.focus');

function handleFocus() {
    console.log(focusEvent.value);
}

focusEvent.addEventListener('focus', handleFocus);

//1.3
const input = document.querySelector('.value');

function handleInput() {
    console.log(input.value)
}

input.addEventListener('input', handleInput)

