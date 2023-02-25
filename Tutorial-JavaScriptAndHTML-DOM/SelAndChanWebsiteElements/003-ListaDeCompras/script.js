let lista = "";
for (let i = 0; i < window.document.getElementsByTagName("h3").length; i++) {
    lista += window.document.getElementsByTagName("h3").item(i).innerHTML + "<br>"; 
};


window.document.getElementById("teste2").innerHTML = lista;






