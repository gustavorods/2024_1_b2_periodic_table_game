// HTML 
let element_icon_html = document.querySelector("#element_icon");
let next_element_html = document.querySelector("#next_element");

// taking the path of each image
let iron = "./images/ferro.png";
let gold = "./images/Ouro.png";
let plutonium = "./images/Plutonio.png";

// Making array withe the ways
var elements = [iron, gold, plutonium];

// function to choose an element randomly
function randomElement() {
    let randomNumber = Math.floor(Math.random() * elements.length);
    element_icon_html.setAttribute('src',elements[randomNumber]);   
}
