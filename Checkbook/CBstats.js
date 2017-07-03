// varablies
// order alphabetical

var date = "";
if(!localStorage.savedDate){localStorage.setItem("savedDate",date);}
date = localStorage.savedDate;

var money = "";
if(!localStorage.saveMoney){localStorage.setItem("saveMoney",money);}
money = localStorage.saveMoney;

var payeeName = "";
if(!localStorage.savedPayeeName){localStorage.setItem("savedPayeeName",payeeName);}
payeeName = localStorage.savedPayeeName;

var totalMoney = 0.00;
if(!localStorage.savedMoney){localStorage.setItem("savedMoney",0.00);}
totalMoney = Number(localStorage.savedMoney);


// elements
// order alphabetical

let totalElement = document.getElementById("total");


// functions
// order alphabetical

// function is called when screen loads
// sets everything up
function load(){
    // displays the saved total
    var totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
    var totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3);
    totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);

    // hides the pop ups
    popUpElement.style.display = 'none';
    wrongAnswerElement.style.display = 'none';

    // creates the saved info
    if(payeeName.indexOf(".")){
        var date_Array = date.split(".");
        var money_Array = money.split("|")
        var payeeName_Array = payeeName.split(".");
        date_Array.pop();
        money_Array.pop()
        payeeName_Array.pop();
        for(var i = 0; i < payeeName_Array.length; i++){
            info(payeeName_Array[i],date_Array[i],money_Array[i])
        }
    }
}