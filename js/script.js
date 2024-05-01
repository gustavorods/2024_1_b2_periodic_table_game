// HTML 
let element_icon_html = document.querySelector("#element_icon");
let next_element_html = document.querySelector("#next_element");
let textField = document.querySelector("#user_response");
let submitBotton = document.querySelector("#submit_button");

// taking the path of each image
let iron = "./images/ferro.png";
let gold = "./images/Ouro.png";
let plutonium = "./images/Plutonio.png";

// Making object with the variables
var elements = {
    Ferro: iron,
    Ouro: gold,
    Plutônio: plutonium
  };

// function to choose an element randomly
let randomElementKey; // I will use it to check with the user's response

function randomElement() {
    textField.style.border = "2px solid gray";

    let elementKeys = Object.keys(elements);
    let randomIndex = Math.floor(Math.random() * elementKeys.length);
    randomElementKey = elementKeys[randomIndex];
    let randomElementImagePath = elements[randomElementKey];

    element_icon_html.setAttribute('src', randomElementImagePath);
}

// Function to check the user's response
function checkUserResponde(userResponse) {
    if(userResponse == randomElementKey) {
        textField.style.border = "2px solid green";

        // Aguarda 5000 milissegundos (5 segundos) antes de executar o restante do código
        setTimeout(function () {
            randomElement();
            textField.value = "";
        }, 1000);
    } else {
        textField.style.border = "2px solid red";
    }
}