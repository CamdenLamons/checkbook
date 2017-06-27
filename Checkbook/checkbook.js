// varablies

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
            totalElement.innerHTML = amountElement.value;
        }
    }
    cancel();
}