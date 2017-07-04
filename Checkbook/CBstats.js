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

    // displays all the stats
    // variables for the stats
    // order alphabetical
    
    var moneyAdded = 0;
    var money_Array = money.split("|");
    money_Array.pop();
    var moneySub = 0;
    var mostMoneyOnceE = 0;
    var mostMoneyOnceS = 0;
    var mostMoneySpentOn = "";
    var mostMoneySpentOnOne = "";
    var payeeName_Array = payeeName.split(".");
    payeeName_Array.pop();
    var totalCost = 0;

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
            mostMoneySpentOnOne = payeeName_Array[howMuch];
        }
        // most money spent at once
        if(Number(money_Array[howMuch]) > mostMoneyOnceE){
            mostMoneyOnceE = money_Array[howMuch];
        }
    }
    mostMoneySpentOn = mostMoneySpentOnOne;
    // Most Money Spent On
    for(var a = 0; a < payeeName_Array.length; a++){
        var cost = 0;
        for (var b = 0; b < payeeName_Array.length; b++){
            if(a != b){
                if(payeeName_Array[a] == payeeName_Array[b]){
                    if(money_Array[a] < 0){
                        cost += Number(money_Array[b]);
                    }
                }
            }
        }
        cost += Number(money_Array[a]);
        if(cost < mostMoneyOnceS && cost < totalCost){
            mostMoneySpentOn = payeeName_Array[a];
            totalCost = cost;
        }
    }

    // put the info on the screen
    info("Most Money Earned At Once:",String(mostMoneyOnceE));
    info("Most Money Spent At Once:",String(mostMoneyOnceS));
    info("Total Money Earned:",String(moneyAdded));
    info("Total Money Spent:",totalMoney_Slice);
    info("Most Money Spent On One Item:",mostMoneySpentOnOne);
    info("Most Money Spent On",String(mostMoneySpentOn));
}