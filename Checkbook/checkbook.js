// varablies
// order alphabetical

var edit = 0;

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

let amountElement = document.getElementById("amount");
let mainElement = document.getElementById("main");
let payeeElement = document.getElementById("payee");
let popUpElement = document.getElementById("popUp");
let totalElement = document.getElementById("total");
let wrongAnswerElement = document.getElementById("wrongAnswer");


// functions
// order alphabetical

// this function is called when clicked on the add transaction button
// makes pop up apper
function add(){
    popUpElement.style.display = 'block';
}

// this function is called when the cancel button is click or at the end of submit
// hides pop up
function cancel(){
    popUpElement.style.display = 'none';
}

// this function is called after the submit function and in the load function
// adds the users inputs to the screen
function info(name,date,moneyInfo){
    // creates the node
    var node = document.createElement("div");
    node.className = "mainInfo"

    // creates the text name
    var textName = document.createElement("div");
    textName.innerHTML = name;
    textName.className = "mainName";
    node.appendChild(textName);

    // creates the text money
    var textMoney = document.createElement("div");
    textMoney.innerHTML = moneyInfo;
    textMoney.className = "mainMoney";
    node.appendChild(textMoney);

    // creates the text date
    var textDate = document.createElement("div");
    textDate.innerHTML = date;
    textDate.className = "mainDate";
    node.appendChild(textDate);

    // adds the node to the mainElement
    mainElement.insertBefore(node, mainElement.childNodes[0])
}

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

// this function is called when the ok button is click
// hides wrong answer pop up
function ok(){
    wrongAnswerElement.style.display = 'none';
}

// this function is called when clicked on the erace button
// resets everything
function reset(){
    // resets the saved variables
    date = "";
    localStorage.savedDate = date;
    money = ""
    localStorage.saveMoney = money;
    payeeName = "";
    localStorage.savedPayeeName = payeeName;
    totalMoney = 0.00;
    localStorage.savedMoney = totalMoney;
    
    // resets the totalElement text
    totalElement.innerHTML = "Total: $" + String(totalMoney);
    // gets ride of the displayed info
    while(mainElement.hasChildNodes()){
        mainElement.removeChild(mainElement.firstChild);
    }
    info("<br/><br/>");
    mainElement.removeChild(mainElement.firstChild);
}

// this function is called when click the submit button
// checks to make sure the user enter the right stuff then desplays how much money they have
// if did not enter right stuff display wrong answer
function submit(){
    // runs if info enter is right
    if ( payeeElement.value != "" && payeeElement.value != "Type Place Here" && Number(amountElement.value)){
        // creates the date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;

        // saves the date variable
        date += String(today) + ".";
        localStorage.savedDate = date;

        // saves the money variable
        money += String(amountElement.value) + "|";
        localStorage.saveMoney = money;

        // saves the payee variable
        payeeName += String(payeeElement.value) + ".";
        localStorage.savedPayeeName = payeeName;

        // saves the money variable
        totalMoney += Number(amountElement.value);
        var totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
        var totalMoney_Slice
        if (totalMoney_IndexOfDot >= 2){
            totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3);
        }
        else{
            totalMoney_Slice = totalMoney;
        }
        totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);
        localStorage.savedMoney = Number(totalMoney_Slice);

        // creates the info
        info(payeeElement.value,today,amountElement.value);
    }
    // runs if info enter is wrong
    else{
        // hides the pop up
        cancel();
        // displays the wrond answer pop up
        wrongAnswerElement.style.display = 'block';
    }
    // hides the pop up
    cancel();
}