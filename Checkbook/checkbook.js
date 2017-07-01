// varablies

var totalMoney = 0.00;
if(!localStorage.savedMoney){
    localStorage.setItem("savedMoney",0.00);
}
totalMoney = Number(localStorage.savedMoney);

var payeeName = "";
if(!localStorage.savedPayeeName){
    localStorage.setItem("savedPayeeName",payeeName);
}
payeeName = localStorage.savedPayeeName;

var date = "";
if(!localStorage.savedDate){
    localStorage.setItem("savedDate",date);
}
date = localStorage.savedDate;


// elements

let mainElement = document.getElementById("main");
let totalElement = document.getElementById("total");
let popUpElement = document.getElementById("popUp");
let payeeElement = document.getElementById("payee");
let amountElement = document.getElementById("amount");
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
function info(name,date){
    var node = document.createElement("div");
    node.className = "mainInfo"
    var textName = document.createElement("div");
    textName.innerHTML = name;
    textName.className = "mainName"
    node.appendChild(textName);
    var textDate = document.createElement("div");
    textDate.innerHTML = date;
    textDate.className = "mainDate";
    node.appendChild(textDate);
    mainElement.insertBefore(node, mainElement.childNodes[0])
}

// function is called when screen loads
// sets everything up
function load(){
    var totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
    var totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3);
    totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);
    popUpElement.style.display = 'none';
    wrongAnswerElement.style.display = 'none';
    if(payeeName.indexOf(".")){
        var payeeName_Array = payeeName.split(".")
        var date_Array = date.split(".")
        date_Array.pop()
        payeeName_Array.pop()
        for(var i = 0; i < payeeName_Array.length; i++){
            info(payeeName_Array[i],date_Array[i])
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
    localStorage.savedMoney = 0.00;
    totalMoney = 0.00;
    totalElement.innerHTML = "Total: $" + String(totalMoney);
    while(mainElement.hasChildNodes()){
        mainElement.removeChild(mainElement.firstChild);
    }
    info("<br/><br/>");
    mainElement.removeChild(mainElement.firstChild);
    payeeName = "";
    localStorage.savedPayeeName = payeeName;
    date = "";
    localStorage.savedDate = date;
}

// this function is called when click the submit button
// checks to make sure the user enter the right stuff then desplays how much money they have
// if did not enter right stuff display wrong answer
function submit(){
    if ( payeeElement.value != "" && payeeElement.value != "Type Place Here" && Number(amountElement.value)){
        totalMoney += Number(amountElement.value);
        var totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
        var totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3);
        totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);
        localStorage.savedMoney = Number(totalMoney);
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        today = mm + "/" + dd + "/" + yyyy;
        info(payeeElement.value,today);
        date += String(today) + ".";
        localStorage.savedDate = date;
        payeeName += String(payeeElement.value) + ".";
        localStorage.savedPayeeName = payeeName;
    }
    else{
        cancel();
        wrongAnswerElement.style.display = 'block';
    }
    cancel();
}