// Choose a random element as soon as the site boots
randomElement();  

// Button to move to the next element
nextElement.addEventListener('click', randomElement);

// Send response
submitButton.addEventListener('click', () => {
    checkUserResponse(textField.value);
})

// Show element tip 
showTipButton.addEventListener('click', showTip); 