// varablies
var totalMoney = 0.00;
if(!localStorage.savedMoney){
    localStorage.setItem("savedMoney",0.00)
}
totalMoney = Number(localStorage.savedMoney);

// elements
let mainElement = document.getElementById("main");
let totalElement = document.getElementById("total");
let popUpElement = document.getElementById("popUp");
let payeeElement = document.getElementById("payee");
let amountElement = document.getElementById("amount");
let wrongAnswerElement = document.getElementById("wrongAnswer");

// function is called when screen loads
// function sets up everything up
function load(){
    totalElement.innerHTML = "Total: $" + String(totalMoney);
    popUpElement.style.display = 'none';
    wrongAnswerElement.style.display = 'none';
}
// function is called when clicked on the erace button
// function resets everything
function reset(){
    localStorage.savedMoney = 0.00;
    totalMoney = 0.00
    totalElement.innerHTML = "Total: $" + String(totalMoney)
}
// function is called when clicked on the add button
// function makes the pop up apper
function add(){
    popUpElement.style.display = 'block';
}
// function is called when the cancel button is click or at the end of submit
// function hides the pop up
function cancel(){
    popUpElement.style.display = 'none';
}
// function is called when click the submit button
// function checks to make sure the user enter the right stuff then desplays how much money they have
// function also display what when wrong if the user did not enter the write stuff
function submit(){
    if ( payeeElement.value != "" && payeeElement.value != "Type Place Here" && Number(amountElement.value)){
        totalMoney += Number(amountElement.value);
        totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
        totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3);
        totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);
        localStorage.savedMoney = totalMoney;
        info();
    }
    else{
        cancel();
        wrongAnswerElement.style.display = 'block';
    }
    cancel();
}
// function is called when the ok button is click
// function hides the wrong answer pop up
function ok(){
    wrongAnswerElement.style.display = 'none';
}
// function is called after the submit function
// fucntion adds the users input to the sreen
function info(){
    var node = document.createElement("div");
    var textnode = document.createTextNode("Info");
    node.appendChild(textnode);
    node.className = "mainInfo"
    mainElement.appendChild(node);
}