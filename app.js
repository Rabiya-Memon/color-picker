let body = document.querySelector("body");
let input =document.getElementById("colorpicker");
let colorcode =document.getElementById("colorcode");

setColor();
input.addEventListener("input" , setColor);

function setColor(){
    body.style.backgroundColor = input.value;
    colorcode.innerHTML = input.value;
}
