
//console.log(operate(79, "-", 5));

const calculator = document.querySelector(".calculator");
const firstbox = document.querySelector(".firstBox");
const secondbox = document.querySelector(".secondBox");
let display;
let firstNumber = "";
let secondNumber = "";
let finalValue;
let operatorClicked = "";
for (let i = 0; i < 20; i++) {
    //creation of buttons with what they contain
    const mainbox = document.createElement("button");
    mainbox.setAttribute("id", "buttons-second-box");
    let mainboxInput = ["AC", "^", "+/-", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "%", "="];
    mainbox.textContent = mainboxInput[i];
    mainbox.style.cssText = "width: 97px; height: 85px; font-size: 40px; font-weight: 700;";

    // the function that will be called to perform an operation
    function add(a, b) {
        finalValue = (+a) + (+b);
        return firstbox.textContent = finalValue;
    }
    
    function subtract(a, b) {
        finalValue = a - b;
        return firstbox.textContent = finalValue;
    }
    
    function multiply(a, b) {
        finalValue = a*b;
        return firstbox.textContent = finalValue;
    }
    
    function divide(a, b) {
        finalValue = a/b;
        return firstbox.textContent = finalValue;
    }
    
    function power(a, b) {
        finalValue = a**b;
        return firstbox.textContent = finalValue;
    }

    function remove() {
        firstNumber = "";
        secondNumber = 0;
        return firstbox.textContent = 0;
    }
    //this function will call a specific operation add, multiply etc based on the sequence of arguments
    function operate (firstnum, operator, secondnum ) {
        console.log(firstnum, operator, secondnum);
        return (operator == "+") ? console.log(add(firstnum, secondnum))
        : (operator == "-") ? console.log(subtract(firstnum, secondnum))
        : (operator == "*") ? console.log(multiply(firstnum, secondnum))
        : (operator == "/") ? console.log(divide(firstnum, secondnum))
        : (operator == "^") ? console.log(power(firstnum, secondnum))
        //: (operator == "AC") ? remove()
        : "Enter a number, operator and another number";
    }
    
    
    mainbox.addEventListener('click', () => {
         display = mainboxInput[i];
         if (typeof display == 'number') {
            firstNumber = firstNumber + display;
            firstbox.textContent = firstNumber;
        } else if (display == "^" || display == "*" || display == "-" || display == "+" || display == "%" || display == "/") {
            operatorClicked = mainboxInput[i];
            // this code will assign a reference variable to the intial sum and restart the sum 
            secondNumber = firstNumber;
            firstNumber = "";
            firstbox.textContent = operatorClicked;
        } else if (display == "AC") {
            remove();
        } else if (display == "=") {
            console.log(operate(secondNumber, operatorClicked, firstNumber));
        }
    })
    secondbox.appendChild(mainbox);
}


