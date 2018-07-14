var firstNumber;
var secondNumber;
var operation;
var firstNumberEntered;
var operationEntered;
var secondNumberEntered;
const screen = document.querySelector("div.screen");
const cancButton = document.querySelector("button#canc");
const inputButtons = document.querySelectorAll(".notEquals button");
const operatorButtons = document.querySelectorAll(".operators button");
const equalsButton = document.querySelector("button#equals")

function reset(){
  firstNumber ="";
  secondNumber = "";

  operation = "";
  firstNumberEntered = false;
  operationEntered = false;
  secondNumberEntered = false;
  screen.textContent = "";
}
function compute(a, b, op){
  if (op == "+"){
    firstNumber = parseFloat(a) + parseFloat(b);
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
  return Math.round(firstNumber*1e7)/1e7
}

reset();


cancButton.addEventListener('click', reset);

inputButtons.forEach(button => button.addEventListener('click', function(){
  if (operationEntered === false){
    firstNumber += button.textContent;
    firstNumberEntered = true;
    screen.textContent = firstNumber;
  } else {
    secondNumber += button.textContent;
    secondNumberEntered = true;
    screen.textContent = firstNumber + " " + operation + " " + secondNumber;
  }
}));

operatorButtons.forEach(operator => operator.addEventListener('click', function(){
  if (firstNumberEntered && secondNumberEntered === false){
    operation = operator.textContent;
    operationEntered = true;
    screen.textContent = firstNumber + " " + operation ;
  }
}));

equalsButton.addEventListener('click', function(){
  if (firstNumberEntered && secondNumberEntered){
    screen.textContent = compute(firstNumber, secondNumber, operation)
  }
});
