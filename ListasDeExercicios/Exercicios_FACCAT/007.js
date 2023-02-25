/*7) Faça um algoritmo que leia a idade de uma pessoa
expressa em anos, meses e dias e escreva a idade dessa
pessoa expressa apenas em dias. Considerar ano com 365 dias
e mês com 30 dias.
*/

var quantMesesDoAno = 12;
var quantDeDiasDoAno = 30 * quantMesesDoAno;


//Informações Do Usuário
var diaNascimento = 24;
var mesNascimento = 9;
var anoNascimento = 2006;
 

//Data atual
var diaAtual = 29;
var mesAtual = 11;
var anoAtual = 2022;



//calculo Total De Dias Que Necessito Esta Vivo Para Completar X Anos De Vida
function calcularDiasVivosAteOAniversario() {
    anoParaDias = quantDeDiasDoAno * ((anoAtual - anoNascimento) - 1)
    conversao = (mesNascimento - 1) * 30
    soma = anoParaDias + conversao + diaNascimento

    return soma

}




console.log(calcularDiasVivosAteOAniversario())
