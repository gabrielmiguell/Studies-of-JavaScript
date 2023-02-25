/*
var div1 = document.getElementById('div1');

var unicycle = document.getElementsByClassName('unicicle');

var paragraphs = document.getElementsByTagName('p');

var queryUnicycle = document.querySelector('.unicycle');

var queryAll = document.querySelectorAll('.unicycle, #div2');

var text = "<h1>Hello World<h1>";

//queryUnicicle.innerHTML = text;


document.getElementsByTagName("p").innerHTML = "Wello World";
*/






function myFunc1(){
    alert("You Clicked Me");
}

function myFunc2(){
    alert("Eu aqui novamente!!");
}

function changeColor(){
    document.body.style.backgroundColor = "red";
}

//window.document.getElementById("div1").innerHTML = "Hello World";

//window.document.getElementsByClassName("unicycle").innerHTML = "Olá, me chamo Gabriel Miguel";

//The URL Property!!
//window.document.getElementById("div2").innerHTML = window.document.URL;


//The addEventListener() Method.---------------------------------------------------
window.document.getElementById("btn").addEventListener("click", myFunc2);

window.document.body.addEventListener("click", changeColor);

//










//The getElementsByTagName() Method-------------------------------------------
window.document.getElementById("gEBTN1").innerHTML = window.document.getElementsByTagName("p")[0].innerHTML;

window.document.getElementById("gEBTN2").innerHTML = window.document.getElementsByTagName("p")[1].innerHTML;

window.document.getElementById("length").innerHTML = window.document.getElementsByTagName("p").length;

window.document.getElementsByTagName("p")[9].innerHTML = "HELLLO WORLD";
