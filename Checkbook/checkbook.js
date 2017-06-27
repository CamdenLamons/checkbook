// varablies
var totalMoney = 0.00;

// elements
let totalElement = document.getElementById("total");
let popUpElement = document.getElementById("popUp");
let payeeElement = document.getElementById("Payee");
let amountElement = document.getElementById("Amount")

// function is called when screen loads
// function sets up everything up
function load(){
    totalElement.innerHTML = "Total: $0.00";
    popUpElement.style.display = 'none';
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
function submit(){
    if ( payeeElement.value != "" && payeeElement.value != "Type Place Here" && Number(amountElement.value)){
        totalMoney += Number(amountElement.value);
        totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
        totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3)
        totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);
    }
    cancel();
}