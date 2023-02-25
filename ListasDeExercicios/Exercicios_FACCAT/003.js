/*3) Os pares de instruções abaixo produzem o mesmo 
resultado?
*/

//Atividade A
// A (4/2) + (2/4) e A 4/2 + 2/4

let a = (4/2) + (2/4);
console.log(`Resultado Variável A = ${a}`);
let b = 4/2 + 2/4;
console.log(`Resultado Variável A = ${b}`);

const comparacao = function (a, b) {
    if (a == b)
    console.log(`Igual`);

    else
    console.log(`Diferente`);

};




//Atividade B
// B 4/(2+2)/4 e B  4/2+2/4
let c = 4/(2+2)/4;
let d = 4/2+2/4;
console.log(`Resultado Variável C = ${c}.`);
console.log(`Resultado Variável D = ${d}.`);

//Atividade C
// C  (4+2)*2-4 e C  4+2*2-4
let e = (4 + 2) * 2 - 4;
let f = 4 + 2 * 2 - 4;
console.log(`Resultado Variável E = ${e}.`);
console.log(`Resultado Variável F = ${f}.`);


