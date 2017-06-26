// varablies

function load(){
    document.getElementById("total").innerHTML = "Total: $0.00";
    document.getElementById("popUp").style.display = 'none';
}
function add(){
    document.getElementById("popUp").style.display = 'block';
}
function cancel(){
    document.getElementById("popUp").style.display = 'none';
}
function submit(){
    if ( document.getElementById("Payee").value != "" && document.getElementById("Payee").value != "Type Place Here"){
        if ( Number(document.getElementById("Amount").value) ){
            document.getElementById("total").innerHTML = document.getElementById("Amount").value;
        }
    }
    cancel();
}