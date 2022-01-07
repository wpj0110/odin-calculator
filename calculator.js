/////////////////////////
//Global Variables Here//
var currentOperation;
var currentResult_1 = 0;
var currentResult_2 = 0;

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
    if (currentResult_1 == 0){
        currentResult_1 = parseFloat(document.getElementById("display").textContent);
    } else{
        currentResult_2 = parseFloat(document.getElementById("display").textContent);
    }
    currentOperation = op;
    calculate();
    //I need a case where if the currentResult_1 is 0, it will still do the calculations.
    //Current missing feature: how to calculate when a current number exists to be calculated. A calculation can be done without pressing the equal button.
    //I need to take two numbers, and do the necessary operation to them.
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

function calculate(){
    if(currentOperation.length == 0){
        currentOperation = '+';
    }
    console.log("Calculate Result is: "+operate(currentOperation,currentResult_1,currentResult_2));
}

//display section

function display(inputNumber){
    let displayText = document.getElementById("display").textContent;
    console.log("display is: "+displayText);
    if (currentResult_1 != 0){
        console.log("here");
        document.getElementById("display").innerText = ""+inputNumber;
    } else if (displayText == 0 && inputNumber == 101){ //case where initial display is 0 and a decimal point has to be added
        document.getElementById("display").innerText = displayText +".";
    } else if (displayText == 0){ //case where initial display is 0
        displayText = inputNumber;
        document.getElementById("display").innerText = displayText;
    } else if (inputNumber == 101){ //case where a decimal point is added while initial display isn't 0
        if (!displayText.includes(".")){
            displayText = displayText + ".";
        }
        document.getElementById("display").innerText = displayText
    }   else{
        displayText = displayText + "" + inputNumber;
        document.getElementById("display").innerText = displayText;
    }
}

function cleared(){
    console.log("Cleared");
    document.getElementById("display").innerText = "0";
    currentResult_1 = 0;
    currentResult_2 = 0;
}