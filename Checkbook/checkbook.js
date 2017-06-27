// varablies
var totalMoney = 0.00;

// elements
let totalElement = document.getElementById("total");
let popUpElement = document.getElementById("popUp");
let payeeElement = document.getElementById("Payee");
let amountElement = document.getElementById("Amount")

function load(){
    totalElement.innerHTML = "Total: $0.00";
    popUpElement.style.display = 'none';
}
function add(){
    popUpElement.style.display = 'block';
}
function cancel(){
    popUpElement.style.display = 'none';
}
function submit(){
    if ( payeeElement.value != "" && payeeElement.value != "Type Place Here"){
        if ( Number(amountElement.value) ){
            totalMoney += Number(amountElement.value);
            totalMoney_IndexOfDot = String(totalMoney).indexOf(".");
            totalMoney_Slice = String(totalMoney).slice(0,totalMoney_IndexOfDot+3)
            totalElement.innerHTML = "Total: $" + String(totalMoney_Slice);
        }
    }
    cancel();
}