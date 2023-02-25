

function randomNumber(){
    window.document.getElementsByTagName("p")[0].innerHTML = Math.random();
}

/*function randomNumber2(){
    window.document.addEventListener("mousemove", randomNumber);
}
*/

function removeHandler(){
    window.document.removeEventListener("mousemove", randomNumber);}

window.document.addEventListener("mousemove", randomNumber);

window.document.getElementsByTagName("button")[0].addEventListener("click", removeHandler);

//window.document.getElementsByTagName("button")[0].addEventListener("click", randomNumber2);
