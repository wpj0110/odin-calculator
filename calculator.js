function adding(x,y){
    let num = x + y;
    console.log("adding: "+ num);
    return x + y;
}

function subtracting(x,y){
    let num = x-y;
    console.log("subtracting: "+num);
    return x - y;
}

function dividing(x,y){
    if (y == 0){
        console.log("Error: Divided By Zero");
        return "Error";
    }
    let num = x/y;
    console.log("dividing: "+num);
    return x/y;
}

function multiplying(x,y){
    let num = x*y;
    console.log("multiplying: "+num);
    return x*y;
}


var currentOperation; //global variable currentOperation
function getOperation(op){
    console.log("Operation Before: "+currentOperation);
    currentOperation = op;
    //Current missing feature: how to calculate when a current number exists to be calculated. A calculation can be done without pressing the equal button.
}
//Operate will use the current operation selected. 
function operate(operator,x,y){
    switch(operator){
        case "+":
            add(x,y);
            break;
        case "-":
            subtract(x,y);
            break;
        case "/":
            divide(x,y);
            break;
        case "*":
            multiply(x,y);
            break;
    }
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
        document.getElementById("display").innerText = displayText
    }   else{
        displayText = displayText + "" + inputNumber;
        document.getElementById("display").innerText = displayText;
    }
}

function cleared(){
    console.log("Cleared");
    document.getElementById("display").innerText = "0";
}