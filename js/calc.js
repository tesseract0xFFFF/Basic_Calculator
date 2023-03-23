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

function areThereTwoArguments(e){

    operatorCount++;
    // function will always be called exactly once for a pair of numbers. 
    // this way, the array index won't be incremented without evaluation.
    if(operatorCount > 1){
        return;
    }
    
// checks whether a two numbers were provided.
    if(arrIndex === 0){
        currentOperator = e.target.textContent; //stores the operator relevant for current 2 number evaluation.
        calcDisplay.textContent = currentOperator;
// checks if there is a first number.
        if(numbers[0] === ''){
            return;
        }
        arrIndex++;
        numbers[arrIndex] = '';

        
    }
    else {
        // when 2 numbers are provided - carry the operation on them,
        //  store result in the 1st array element and zero the index. then print result onto screen.
        numbers[0] = operate(currentOperator, +numbers[0], +numbers[1]);
        numbers[1] = 0;
        arrIndex = 0;
        operatorCount = 0;
        currentOperator = '';
        calcDisplay.textContent = numbers[0];
    }
} 

function clearAll(){

     numbers = [''];
     arrIndex = 0;
     currentOperator = '';
     operatorCount = 0;
     calcDisplay.textContent = '';
}

// delets the last number (numbers are stored as strings until calculation time).
function delChar(){

    numbers[arrIndex] = numbers[arrIndex].slice(0, -1);
    calcDisplay.textContent = numbers[arrIndex];
    
}


let calcBody = document.querySelector('.calcBody');
let buttonArea = document.querySelector('.buttonArea');
let calcDisplay = document.querySelector('.calcDisplay');

// initialize an empty array to store numbers in and an array index.
let numbers = [''];
let arrIndex = 0;
let currentOperator = '';
let operatorCount = 0;



 
// generates the button elements and prints numbers on them.
// event listeners were attached to number buttons. clicking them prints the numbers onto the display element.
for (i = 0; i <= 9; i++){

   const calcButton = document.createElement('button');
   calcButton.setAttribute('class', 'button');
   calcButton.setAttribute('id', `${i}`);
   calcButton.textContent = `${i}`;
   calcButton.addEventListener('click', () => {

    // if there is already an operator displayed, don't concatenate the next number typed in - 
    // rather, overwrite the operator on display with the second number.
    if (operatorCount > 0){
        operatorCount = 0;
        calcDisplay.textContent = calcButton.textContent;
    }
    else{
    calcDisplay.textContent += calcButton.textContent;
    }
    numbers[arrIndex] += calcButton.textContent;
   
});
   buttonArea.appendChild(calcButton);
}

// store operator buttons.
let buttAdd = document.querySelector('#buttAdd');
let buttSubtract = document.querySelector('#buttSubtract');
let ButtMultiply = document.querySelector('#ButtMultiply');
let ButtDivide = document.querySelector('#ButtDivide');
let ButtEqual = document.querySelector('#ButtEqual');
let ButtAC = document.querySelector('#ButtAC');
let ButtDel = document.querySelector('#ButtDel');
let ButtDecimal = document.querySelector('#ButtDecimal');
// attach event listeners to said operator buttons.
buttAdd.addEventListener('click', areThereTwoArguments);
buttSubtract.addEventListener('click', areThereTwoArguments);
ButtMultiply.addEventListener('click', areThereTwoArguments);
ButtDivide.addEventListener('click', areThereTwoArguments);
ButtEqual.addEventListener('click', areThereTwoArguments);
ButtAC.addEventListener('click', clearAll);
ButtDel.addEventListener('click', delChar);
// decimal point button.
ButtDecimal.addEventListener('click', () => {
    calcDisplay.textContent += ButtDecimal.textContent;
    numbers[arrIndex] += ButtDecimal.textContent;
})

