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

console.log(operate(79, "-", 5));
