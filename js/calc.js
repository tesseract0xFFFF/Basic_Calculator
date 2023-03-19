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
 
let calc = operate ('-', 10, 2);



