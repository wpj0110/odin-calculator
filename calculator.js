/////////////////////////
//Global Variables Here//
var currentOperation;
var currentResult_1 = 0;
var currentResult_2 = 0;
var previousCalculation;

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
        currentOperation = '+';
    }
    currentResult_2 = parseFloat(document.getElementById("display").textContent);
    let answer = operate(currentOperation,currentResult_1,currentResult_2);
    cleared();
    currentResult_1 = answer;
    console.log("Calculate Result is: "+answer);
    return answer;
}

function equalClick(){
    let answer = calculate();
    document.getElementById("display").innerText = ""+answer;
}

//display section

function display(inputNumber){
    let displayText = document.getElementById("display").textContent;
    console.log("display is: "+displayText);
    if (displayText == 0 && inputNumber == 101){ //case where initial display is 0 and a decimal point has to be added
        document.getElementById("display").innerText = displayText +".";
    } else if (displayText == 0){ //case where initial display is 0
        displayText = inputNumber;
        document.getElementById("display").innerText = displayText;
    } else if (inputNumber == 101){ //case where a decimal point is added while initial display isn't 0
        if (!displayText.includes(".")){
            displayText = displayText + ".";
        }
        //document.getElementById("display").innerText = displayText; //do nothing
    } else{
        displayText = displayText + "" + inputNumber;
        document.getElementById("display").innerText = displayText;
    }
}

function cleared(){
    console.log("Cleared");
    document.getElementById("display").innerText = "0";
    document.getElementById("previousCalculation").innerText = "";
    currentResult_1 = 0;
    currentResult_2 = 0;
}