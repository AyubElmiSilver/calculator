function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate (firstnum, operator, secondnum ) {
    return (operator == "+") ? console.log(add(firstnum, secondnum))
    : (operator == "-") ? console.log(subtract(firstnum, secondnum))
    : (operator == "*") ? console.log(multiply(firstnum, secondnum))
    : (operator == "/") ? console.log(divide(firstnum, secondnum))
    : "Enter a number, operator and another number";
}

//console.log(operate(79, "-", 5));

const calculator = document.querySelector(".calculator");
const secondbox = document.querySelector(".secondBox");

for (let i = 0; i < 20; i++) {
    const mainbox = document.createElement("button");
    mainbox.setAttribute("id", "buttons-second-box");
    let mainboxInput = ["AC", "^", "+/-", "/", 7, 8, 9, "*", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "%", "="];
    mainbox.textContent = mainboxInput[i];
    mainbox.style.cssText = "width: 97px; height: 85px; font-size: 40px; font-weight: 700;";
    mainbox.addEventListener('click', () => {
        console.log('working');
    })
    secondbox.appendChild(mainbox);
}

