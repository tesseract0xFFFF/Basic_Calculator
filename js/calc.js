function add (a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){

    return a / b;
}

function multiply(a, b){
    return a * b;
}

function operate(operator, num1, num2){

    let result = 0;

    // calls the right operation function depending on the operator provided.
    switch(operator){

        case '+':
            result = add(num1, num2);
            break;

        case '-':
            result = subtract(num1, num2);
            break;

        case '/':
            result = divide(num1, num2);
            break;

        case '*':
            result = multiply(num1, num2);
            break;
            
    }

    return result;
}

let calcBody = document.querySelector('.calcBody');
let buttonArea = document.querySelector('.buttonArea');
let calcDisplay = document.querySelector('.calcDisplay');



 
// generates the button elements and prints numbers on them.
// event listeners were attached to number buttons. clicking them prints the numbers onto the display element.
for (i = 0; i <= 9; i++){

   const calcButton = document.createElement('button');
   calcButton.setAttribute('class', 'button');
   calcButton.setAttribute('id', `${i}`);
   calcButton.textContent = `${i}`;
   calcButton.addEventListener('click', () => {calcDisplay.textContent += calcButton.textContent
   

});
   buttonArea.appendChild(calcButton);
}



