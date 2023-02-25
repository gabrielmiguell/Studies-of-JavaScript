let firstValue = 50;
let secondValue = 50;

function sum(firstValue, secondValue){
    let soma = firstValue + secondValue;
    window.document.getElementById("result").innerHTML = soma;

}

function minus(){

}

function multiple(){

}

function divide(){

}

window.document.body.getElementsByTagName("button")[0].addEventListener("click", function(){
    sum(firstValue, secondValue);
});


