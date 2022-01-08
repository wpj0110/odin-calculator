/////////////////////////
//Global Variables Here//
var currentOperation;
var currentResult_1 = 0;
var currentResult_2 = 0;
var previousCalculation;
var pressedEqual = false; //

///////////////////////////
function adding(x,y){
    x = parseFloat(x);
    y = parseFloat(y);
    let num = x + y;
    console.log("adding: "+ num);
    return x + y;
}

function subtracting(x,y){
    x = parseFloat(x);
    y = parseFloat(y);
    let num = x-y;
    console.log("subtracting: "+num);
    return x - y;
}

function dividing(x,y){
    x = parseFloat(x);
    y = parseFloat(y);
    if (y == 0){
        console.log("Error: Divided By Zero");
        return "Error";
    }
    let num = x/y;
    console.log("dividing: "+num);
    return x/y;
}

function multiplying(x,y){
    x = parseFloat(x);
    y = parseFloat(y);
    let num = x*y;
    console.log("multiplying: "+num);
    return x*y;
}

function getOperation(op){ //gets the operation and the existing number on display
    previousCalculation = document.getElementById("previousCalculation").textContent;
    currentResult_2 = parseFloat(document.getElementById("display").textContent);
    if (previousCalculation.length != 0 && currentResult_2 == 0){ //if main display is 0, simply just change the operation without calculating anything
        console.log("only changing the operation");
        document.getElementById("previousCalculation").innerText = currentResult_1 + "" + op;
    } else if (previousCalculation.length != 0){ // if there is an existing operation to be executed, do it first before changing the currentOperation and replacing the old number
        console.log("existing previous operation");
        //currentResult_2 = parseFloat(document.getElementById("display").textContent);
        let answer = calculate(); //saves the answer before clearing everything
        cleared(); //clears everything
        currentResult_1 = answer;
        document.getElementById("previousCalculation").innerText = currentResult_1+ "" +op;

    } else{ //no previous operations, display the old number with the current operation
        console.log("no previous operations");
        previousCalculation = document.getElementById("display").textContent + "" + op;
        console.log("operation is "+op);
        console.log("previousCalc is "+previousCalculation);
        currentResult_1 = parseFloat(document.getElementById("display").textContent);
        document.getElementById("previousCalculation").innerText = previousCalculation; //display the current operation and the number
        document.getElementById("display").innerText = "0"; //reset the main display
    }
    currentOperation = op;
}
//Operate will use the current operation selected. 
function operate(operator,x,y){
    switch(operator){
        case "+":
            return adding(x,y);
            break;
        case "-":
            return subtracting(x,y);
            break;
        case "/":
            return dividing(x,y);
            break;
        case "*":
            return multiplying(x,y);
            break;
        default:
            alert(`Something went wrong with the operate function(). Values are: operator: ${operator}, x: ${x}, y: ${y}`);
            console.log(`Something went wrong with the operate function(). Values are: operator: ${operator}, x: ${x}, y: ${y}`);
    }
}

function calculate(){ //I honestly forgot what to do with this
    if(currentOperation.length == 0){
        console.log("No operations");
        currentOperation = '+';
        currentResult_2 = 0;
    } else{
        currentResult_2 = parseFloat(document.getElementById("display").textContent);
    }
    let answer = operate(currentOperation,currentResult_1,currentResult_2);
    cleared();
    currentResult_1 = answer;
    console.log("Calculate Result is: "+answer);
    return answer;
}

function equalClick(){
    let answer = calculate();
    document.getElementById("display").innerText = ""+answer;
    pressedEqual = true;
}

//display section

function display(inputNumber){
    let displayText = document.getElementById("display").textContent;
    console.log("previous display is: "+displayText);
    if (displayText == 0 && inputNumber == 101){ //case where initial display is 0 and a decimal point has to be added
        console.log("decimal is added on 0");
        document.getElementById("display").innerText = displayText +".";
    } else if (displayText == 0){ //case where initial display is 0
        console.log("display is 0");
        if(inputNumber == 101){ //if decimalButton is pressed, add the decimal after the 0
            document.getElementById("display").innerText = displayText + ".";
        } else if (displayText === "0."){
            document.getElementById("display").innerText = displayText+""+inputNumber
        } else {
            displayText = inputNumber;
            document.getElementById("display").innerText = displayText;
            pressedEqual = false;
        }
    } else if (inputNumber == 101){ //case where a decimal point is added
        console.log("decimal point");
        if (!displayText.includes(".")){ //if it doesn't have the decimal, add it.
            console.log("adding decimal");
            document.getElementById("display").innerText = displayText + ".";
        } 
    } else if (pressedEqual == true){ 
        console.log("pressedEqual == True");
        if(!displayText.includes(".")){
            document.getElementById("display").innerText = ""+inputNumber;
            pressedEqual = false;
        } else{
            document.getElementById("display").innerText = inputNumber;
            pressedEqual = false;
        }
    } else{
        console.log("concatenating display");
        document.getElementById("display").innerText = displayText + "" + inputNumber;
    }
    console.log("after display is: "+document.getElementById("display").textContent);
}

function cleared(){
    console.log("Cleared");
    document.getElementById("display").innerText = "0";
    document.getElementById("previousCalculation").innerText = "";
    currentResult_1 = 0;
    currentResult_2 = 0;
    currentOperation = "";
    pressedEqual = false;
}