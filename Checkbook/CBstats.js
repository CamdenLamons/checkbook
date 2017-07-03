// varablies
// order alphabetical

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

    var money_Array = money.split("|");
    var payeeName_Array = payeeName.split(".");
    money_Array.pop();
    payeeName_Array.pop();
    var moneyAdded = 0;
    var moneySub = 0
    for(var howMuch = 0; howMuch < money_Array.length; howMuch++){
        if(money_Array[howMuch]>0){
            moneyAdded += Number(money[howMuch]);
        }
        else{
            moneySub += Number(money_Array[howMuch]);
        }
    }
    info("Money Earned",String(moneyAdded));
    info("Money Spent",String(moneySub))
}