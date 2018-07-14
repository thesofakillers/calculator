

var firstNumber ="";
var secondNumber = "";

var operation;
firstNumberEntered = false;
operationEntered = false;
secondNumberEntered = false

const screen = document.querySelector("div.screen");

const inputButtons = document.querySelectorAll(".notEquals button");
inputButtons.forEach(button => button.addEventListener('click', function(){
  if (operationEntered === false){
    firstNumber += button.textContent;
    firstNumberEntered = true;
    screen.textContent = firstNumber;
  } else {
    secondNumber += button.textContent;
    secondNumberEntered = true;
    screen.textContent += button.textContent;
  }
}));

const operatorButtons = document.querySelectorAll(".operators button");
operatorButtons.forEach(operator => operator.addEventListener('click', function(){
  if (firstNumberEntered && secondNumberEntered === false){
    operation = operator.textContent;
    operationEntered = true;
    screen.textContent += operation;
  }
}));

const equalsButton = document.querySelector("button#equals")
equalsButton.addEventListener('click', function(){
  if (firstNumberEntered && secondNumberEntered){
    screen.textContent = compute(firstNumber, secondNumber, operation)
  }
});

function compute(a, b, op){
  if (op == "+"){
    firstNumber = a + b;
  } else if (op == "-") {
    firstNumber = a - b;
  } else if (op == "÷") {
    firstNumber = a/b;
  } else if (op == "×") {
    firstNumber = a * b
  }
  secondNumber = ""
  operation = ""
  secondNumberEntered = false;
  operationEntered = false;
  return firstNumber
}
