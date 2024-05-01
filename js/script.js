// taking the path of each image
let iron = "./images/ferro.png";
let gold = "./images/Ouro.png";
let plutonium = "./images/Plutonio.png";

// Making array withe the ways
var elements = [iron, gold, plutonium];

// function to choose an element randomly
function randomElement() {
    let randomNumber = Math.floor(Math.random() * elements.length);
    document.querySelector("#element_icon").setAttribute('src',elements[randomNumber]);   
}

