/*Aqui estamos usando uma função Window.prompt() na linha 4, a qual pergunta ao usuário para responder uma questão via uma caixa de diálogo, então armazena o texto em uma variável — neste caso nome. Nós então usamos uma função Window.alert() na linha 5 para mostrar outra caixa de diálogo contendo nossa string montada de duas strings literais e a variável name,via concatenação.*/

var button = document.querySelector('button');

button.onclick = function() {
    var nome = prompt('Qual é o seu nome?');
    alert('Olá ' + nome + ', prazer em conhecê-lo.');

}


