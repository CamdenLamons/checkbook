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
let mainElement = document.getElementById("main");
let totalElement = document.getElementById("total");


// functions
// order alphabetical

// this function is called after load
// adds the users inputs to the screen
function info(name,moreInfo){
    // creates the node
    var node = document.createElement("div");
    node.className = "sMainInfo"

    // creates the text name
    var textName = document.createElement("div");
    textName.innerHTML = name;
    textName.className = "sMainName";
    node.appendChild(textName);

    // creates the text money
    var textInfo = document.createElement("div");
    textInfo.innerHTML = moreInfo;
    textInfo.className = "sMainMoney";
    node.appendChild(textInfo);

    // adds the node to the mainElement
    mainElement.insertBefore(node, mainElement.childNodes[0]);
}

// function is called when screen loads
// sets everything up
function load(){
    // displays the saved total
    var totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
    var totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3);
    totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);

    // displays all the stats
    // variables for the stats
    // order alphabetical
    
    var money_Array = money.split("|");
    money_Array.pop();
    var payeeName_Array = payeeName.split(".");
    payeeName_Array.pop();
    var moneyAdded = 0;
    var moneySub = 0;
    var mostMoneyOnceS = 0;
    var mostMoneyOnceE = 0;
    var mostMoneySpentOn = "";
    for(var howMuch = 0; howMuch < money_Array.length; howMuch++){
        // total money earned
        if(money_Array[howMuch]>0){
            moneyAdded += Number(money_Array[howMuch]);
        }
        // total money spent
        else{
            moneySub += Number(money_Array[howMuch]);
            var totalMoney_IndexOfDot = String(moneySub).indexOf(".");
            var totalMoney_Slice
            if (totalMoney_IndexOfDot >= 2){
                totalMoney_Slice = String(moneySub).slice(0,totalMoney_IndexOfDot+3);
            }
            else{
                totalMoney_Slice = moneySub;
            }
        }
        // most money spent at once
        if(Number(money_Array[howMuch]) < mostMoneyOnceS){
            mostMoneyOnceS = money_Array[howMuch];
            // what most money is spent on
            mostMoneySpentOn = payeeName_Array[howMuch];
        }
        // most money spent at once
        if(Number(money_Array[howMuch]) > mostMoneyOnceE){
            mostMoneyOnceE = money_Array[howMuch];
        }
    }
    info("Total Money Earned",String(moneyAdded));
    info("Total Money Spent",totalMoney_Slice);
    info("Most Money Spent At Once",String(mostMoneyOnceS));
    info("Most Money Earned At Once",String(mostMoneyOnceE));
    info("Most Money Spent In A Day","0");
    info("Most Money Earned In A Day","0");
    info("What Most Money Is Spent On",mostMoneySpentOn);
}