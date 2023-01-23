

//  Homework - arrow functions

// Create 2 variables with arrow functions.
// First arrow function will accept two parameters, one for element and one for color. The function should change the given element text color with the color given from the second color parameter. If no parameter is passed for color, the default value is black.

// Second arrow function will accept two parameters, one for element and one for textSize. The function should change the given element text size to the number given from the second textSize parameter. If no parameter is passed for textSize, the default value is 24.

// Create an HTML document with two inputs, a button and an h1 header with some text. The first input should be for text size and the second for color. When the button is clicked the h1 header should change according to the input values ( change size as the first input value and color as the second input value ). Use the functions that we declared earlier and use arrow function for the event listener of the button.


let textSize = document.getElementById('textSize');
let color = document.getElementById('color');
let button = document.getElementById('btn');
let header = document.querySelector('h1');



let changeTextColor = (text, colorInput) =>{

    
    return text.style.color = colorInput.value;

}

let changeTextSize = (headerText, textSizeInput) =>{

    return textSizeInput.value === ''? headerText.style.fontSize = 24 +'px': headerText.style.fontSize =  textSizeInput.value +'px';
   
    
  }

button.addEventListener('click', () =>{

    changeTextColor(header,color);
    changeTextSize(header, textSize)

})