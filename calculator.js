const calculator = document.querySelector(".calculator");
const firstbox = document.querySelector(".firstBox");
const secondbox = document.querySelector(".secondBox");
let display;
let firstNumber = "";
let secondNumber = "";
let finalValue;
let operatorClicked;
        for (let i = 0; i < 20; i++) {
            //creation of buttons with what they contain
            const mainbox = document.createElement("button");
            let mainboxInput = ["AC", "^", "+/-", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "%", "="];
            mainbox.setAttribute("id", mainboxInput[i]);
            mainbox.textContent = mainboxInput[i];
            mainbox.style.cssText = "width: 97px; height: 85px; font-size: 40px; font-weight: 700;";

            // the function that will be called to perform an operation
            function add(a, b) {
                if (b.length == 0) {
                 disable();
                } else {
                    finalValue = (+a) + (+b);
                firstbox.textContent = finalValue;
                firstNumber = finalValue;
                }
                
            }
            
            function subtract(a, b) {
                finalValue = a - b;
                firstbox.textContent = finalValue;
                firstNumber = finalValue;
            }
            
            function multiply(a, b) {
                finalValue = a*b;
                firstbox.textContent = finalValue;
                firstNumber = finalValue;
            }
            
            function divide(a, b) {
                finalValue = a/b;
                if (b == 0) {
                    firstbox.textContent = "Division By Zero Is Unacceptable";
                } else {
                    firstbox.textContent = finalValue;
                }
                firstNumber = "";
            }
            
            function power(a, b) {
                finalValue = a**b;
                firstbox.textContent = finalValue;
                firstNumber = finalValue;
            }

            function remove() {
                firstNumber = "";
                secondNumber = 0;
                firstbox.textContent = 0;
                enable();
            }

            function disable() {
                document.getElementById("=").disabled = true;
            }

            function enable() {
                document.getElementById("=").disabled = false;
            }
            
    //this function will call a specific operation add, multiply etc based on the sequence of arguments
    function operate (firstnum, operator, secondnum ) {

            return (operator == "+") ? console.log(add(firstnum, secondnum))
        : (operator == "-") ? console.log(subtract(firstnum, secondnum))
        : (operator == "*") ? console.log(multiply(firstnum, secondnum))
        : (operator == "/") ? console.log(divide(firstnum, secondnum))
        : (operator == "^") ? console.log(power(firstnum, secondnum))
        : "";
        
    }
    
    
    mainbox.addEventListener('click', () => {
         display = mainboxInput[i];
         if (typeof display == 'number' || display == ".") {
            enable();
            firstNumber = firstNumber + display;
            firstbox.textContent = firstNumber;
        } else if (display == "^" || display == "*" || display == "-" || display == "+" || display == "/") {
            enable();
            operatorClicked = mainboxInput[i];
            // this code will assign a reference variable to the intial number and restart the number 
            secondNumber = firstNumber;
            firstNumber = "";
            firstbox.textContent = operatorClicked;
        } else if (display == "%") {
            enable();
            firstNumber = firstNumber * 0.01;
            firstbox.textContent = firstNumber; 
        } else if (display == "+/-") {
            firstNumber = firstNumber * -1;
            firstbox.textContent = firstNumber;
        } else if (display == "AC") {
            remove();
        } else if (display == "=") {
            console.log(operate(secondNumber, operatorClicked, firstNumber));
        } 
    })
    secondbox.appendChild(mainbox);

    }

