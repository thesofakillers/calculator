var firstNumber;
var secondNumber;
var operation;
var firstNumberEntered;
var operationEntered;
var secondNumberEntered;
var screenArray;
const screen = document.querySelector("div.screen");
const cancButton = document.querySelector("button#canc");
const delButton = document.querySelector("button#del")
const inputButtons = document.querySelectorAll(".notEquals button");
const operatorButtons = document.querySelectorAll(".operators button");
const equalsButton = document.querySelector("button#equals")

function reset(){//initializes numbers as empty and as Entered flags as false
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
  firstNumber = Math.round(firstNumber*1e7)/1e7
  return firstNumber;
} //handles operations and returns rounded result
function del(){
  //remove last char and trim any spaces
  screen.textContent = screen.textContent.slice(0, -1).trim();

  //use spaces to divide string into an array of strings
  screenArray = screen.textContent.split(" ")

  if (screenArray.length < 1){//equivalent to clearing
    reset()
  } else if (screenArray.length === 1){ //only first number entered
    reset() //reset everything
    firstNumber = screenArray[0] //reassign firstNumber from array
    firstNumberEntered = true; //clearly there is a firstNumber
  } else if(screenArray.length === 2){ //first number and operation
    reset() //reset everything
    firstNumber = screenArray[0] //reassign firstNumber from array
    operation = screenArray[1] //reassign operation from array
    firstNumberEntered = true;//clearly there is a firstNumber
    operationEntered = true;//clearly there is an operation
  } else if (screenArray.length === 3){ //everything is still there
    //no need for resetting, just need to reassign values from array
    firstNumber = screenArray[0]
    operation = screenArray[1]
    secondNumber = screenArray[2]
  }

  screen.textContent = screenArray.join(" ");
  screenArray = null;
}

reset(); //calculator is reset upon page refresh

//listens for clicks on the backspace button
delButton.addEventListener('click', del);

//listens for clicks on the canc button
cancButton.addEventListener('click', reset);

//listens for clicks on any of the input buttons
inputButtons.forEach(button => button.addEventListener('click', function(){
  if (screen.textContent.length < 12){
    if (operationEntered === false){
      firstNumber += button.textContent; //builds firstNumber as long as needed
      firstNumberEntered = true; //sets flag
      screen.textContent = firstNumber; //populates screen
    } else { // i.e. once the operation has been entered
      secondNumber += button.textContent;
      secondNumberEntered = true; //builds secondNumber as long as needed
      screen.textContent = firstNumber + " " + operation + " " + secondNumber;
    }
  }

}));

//listens for clicks on any of the operator buttons
operatorButtons.forEach(operator => operator.addEventListener('click', function(){
  if (firstNumberEntered && secondNumberEntered === false){ //operations to be placed only after first number
    operation = operator.textContent; //fill op variable
    operationEntered = true; //set flag to true
    screen.textContent = firstNumber + " " + operation ; //add op to screen
  }
}));

//listens for clicks on the equal function
equalsButton.addEventListener('click', function(){
  if (firstNumberEntered && secondNumberEntered){
    screen.textContent = compute(firstNumber, secondNumber, operation)
  }
});
