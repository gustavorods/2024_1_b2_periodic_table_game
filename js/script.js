// HTML 
const elementIcon = document.querySelector("#element_icon");
const nextElement = document.querySelector("#next_element");
const textField = document.querySelector("#user_response");
const submitButton = document.querySelector("#submit_button");
const tipField = document.querySelectorAll(".tip");
const showTipButton = document.querySelector("#see_tip");

// Making object with the variables
const elements = {
    Ferro: "./images/ferro.png",
    Ouro: "./images/Ouro.png",
    Plutônio: "./images/Plutonio.png"
};

// Making the tips
const elementsTips = {
    Ferro: ["usado na siderúrgica", "Usado em portões", "Metal resistente", "Condutor", "Magnético", "Abundância no universo"]
};

// function to choose an element randomly
let randomElementKey; // I will use it to check with the user's response
function randomElement() {
    const elementKeys = Object.keys(elements);
    const randomIndex = Math.floor(Math.random() * elementKeys.length);
    randomElementKey = elementKeys[randomIndex];
    const randomElementImagePath = elements[randomElementKey];
    elementIcon.setAttribute('src', randomElementImagePath);
}

// Function to check the user's response
function checkUserResponse(userResponse) {
    if(userResponse === randomElementKey) {
        textField.style.border = "2px solid green";

        // Waits 1000 milliseconds (1 second) before executing the rest of the code
        setTimeout(function () {
            textField.value = "";
            textField.style.border = "2px solid gray";
            randomElement();
        }, 1000);
    } 
    else {
        textField.style.border = "2px solid red";
    }
}

// Function to show the tips 
let counter = 0; // Used to control the tips field and to access the object that has the tips (randomElementKey)
function showTip() {
    if(counter == 6) {
        alert("Você ja usou todas as dicas!");
    }
    else {
        tipField[counter].innerHTML = elementsTips[randomElementKey][counter];
        counter++;
    }
}

