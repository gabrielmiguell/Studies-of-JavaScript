/*4) Reescreva  as  instruções  abaixo  com  o mínimo
de  parênteses  possível,  mas sem  alterar  o
resultado:
*/

// A  6*(3+2) 
//Exercício aritmético sem tratamento.
let a1 = 6 * (3 + 2);
let equaA1 = (`6 * (3 + 2)`);
console.log(`Exercício A.\nEquação sem alterar os parênteses possiveis:\n${equaA1}\nEm seguida o seu resultado:\n${a1}`);

/*Nesse caso quando retiramos o parênteses
o valor final não é o esperado.
*/
let a2 = 6 * 3 + 2;
let equaA2 = (`6 * 3 + 2`);
console.log(`Analizando a equação ${equaA1}, observmos que se retirado qualquer par de\nparênteses da equação o resultado esperado será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaA2}\nVemos que o resultado será diferente do esperado.\n${a2}`);
console.log(`Então é concluído que não há como retirar nenhum parênteses.\n`);

/*---------------------------------------------------------------------*/





// B  2+(6*(3+2)) 
//Exercício aritmético sem tratamento
let b1 = 2 + (6 * (3 + 2));
let equaB1 = (`2 + (6 * (3 + 2));`);
console.log(`Exercício B.\nEquação sem alterar os parênteses possíveis:\n${equaB1}\nEm seguida resultado:\n${b1}.`);

// Exercício aritmético com o mínimo de parênteses.
/*Nesse caso retiramos alguns parênteses e o resultado foi o mesmo com os parênteses a menos.
*/
let b2 = 2 + 6 * 3 + 2; 
let equaB2 = (`2 + 6 * (3 + 2)`);
console.log(`Analizando a equação ${equaB1}, observamos que se retirado alguns\npares de parênteses, o resultado não será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaB2}\nVemos que o resultado será diferente do esperado:\n${b2}.`);
console.log(`Então é concluído que não há como retirar nenhum parênteses!\n`);

/*---------------------------------------------------------------------*/





// C  2+(3*6)/(2+4) 
// Exercício aritmético em tratamento.
let c1 = 2 + (3 * 6) / (2 + 4);
let equaC1 = (`2 + (3 * 6) / (2 + 4)`);
console.log(`Exercício C.\nEquação sem alterar os parênteses possíveis:\n${equaC1}\nEm seguida o resultado:\n${c1}.`);

let c2 = 2 + (3 * 6) / 2 + 4;
let equaC2 = `2 + (3 * 6) / 2 + 4`;
console.log(`Analizando a equação ${equaC1}, observamos que se retirado\nalguns pares de parênteses, o resultado será alterado.`)
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaC2}\nVeremos que o resultaddo será diferente do esperado:\n${c2}.`);
console.log(`Então é concluído que não há como retirar nenhum parêntses!\n`)

/*---------------------------------------------------------------------*/





// D  2*(8/(3+1))
//Exercício aritmético em tratamento.
let d1 = 2 * (8 / (3 + 1));
let equaD1 = (`2 * (8 / (3 + 1))`);
console.log(`Exercício D.\nEquação sem alterar os parênteses possíveis:\n${equaD1}\nEm seguida o resultado:\n${d1}.`);

let d2 = 2 * 8 / (3 + 1);
let equaD2 = (`2 * 8 / (3 + 1)`);
console.log(`Analizando a equação ${equaD1}, observamos que se retirado\nalguns pares de parênteses, o resultado não será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaD2}\nVeremos que o resultado não será diferente do esperado:\n${d2}.`);
console.log(`Então é concluído que há maneira de retirar um par de parênteses!\n`);

/*---------------------------------------------------------------------*/





// E  3+(16-2)/(2*(9-2))
let e1 = 3 + (16 - 2) / (2 * (9 - 2));
let equaE1 =  (`3 + (16 - 2) / (2 * (9 - 2))`);
console.log(`Exercício E.\nEquação sem alterar os parênteses possíveis:\n${equaE1}\nEm seguida o resultado:\n${e1}.`);

let e2 = 3 + (16 - 2) / 2 * (9 - 2);
let equaE2 = (` 3 + (16 - 2) / 2 * (9 - 2)`);
console.log(`Analisando a equação ${equaE1}, obervamos que se retirado\nalguns pares de parênteses, o resultado será alterado.`); 
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaE2}\nVeremos que o resultado será diferente do resultado esperado:\n${e2}.`);
console.log(`Então é concluído que não há maneiras de retirar nenhum par de parênteses!\n`);

/*---------------------------------------------------------------------*/





// F  (6/3)+(8/2)
let f1 = (6 / 3 ) + (8 / 2);
let equaF1 = (`(6 / 3 ) + (8 / 2);`);
console.log(`Exercício F.\nEquação sem alterar os parênteses possíveis:\n${equaF1}\nEm seguida o resultado:\n${f1}.`);


let f2 = 6 / 3 + 8 / 2;
let equaF2 = (`6 / 3 + 8 / 2`);
console.log(`Analisando a equação ${equaE1}, observamos que se retirado\nalguns pares de parênteses, o resultado será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaF2}\nVeremos que o resultado não será diferente do resultado esperado:\n${f2}.`);
console.log(`Então é concluído que há maneiras de retirar alguns pares de parênteses!\n`)
/*---------------------------------------------------------------------*/





// G  ((3+(8/2))*4)+(3*2)
let g1 = ((3 + (8 / 2)) * 4) + (3 * 2);
let equaG1 = (`((3 + (8 / 2)) * 4) + (3 * 2)`);
console.log(`Exercício G.\nEquação sem alterar os parênteses possíveis:\n${equaG1}\nEm seguida o resultado:\n${g1}.`);

let g2 = (3 + (8 / 2)) * 4 + 3 * 2;
let equaG2 = (`(3 + (8 / 2)) * 4 + 3 * 2`);
console.log(`Analisando a equação ${equaG1}, observamos que se retirado\nalguns pares de parênteses, o resultado não será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaG2}\nVeremos que o resultado não será diferente do resultado já esperado:\n${g2}.`);
console.log(`Então é concluído que há maneiras de retirar alguns pares de parênteses!\n`);

/*---------------------------------------------------------------------*/





// H  (6*(3*3)+6)-10
let h1 = (6* (3 * 3) + 6) - 10;
let equaH1 = (`(6* (3 * 3) + 6) - 10`);
console.log(`Exercício H.\nEquação sem alterar os parênteses possíveis:\n${equaG1}\nEm seguida o resultado:\n${h1}.`);

let h2 = 6* (3 * 3) + 6 - 10;
let equaH2 = (`6* (3 * 3) + 6 - 10`);
console.log(`Analisando a equação ${equaH1}, observamos que se retirado\nalguns pares de parênteses, o resultado não será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaH2}\nVeremos que o resultado não será diferente do resultado já esperado:\n${h2}.`);
console.log(`Então é concluído que há maneiras de retirar alguns pares de parênteses!\n`);

/*---------------------------------------------------------------------*/





// I  (((10*8)+3)*9)
let i1 = (((10 * 8) + 3) * 9);
let equaI1 = (`(((10 * 8) + 3) * 9)`);
console.log(`Exercício I.\nEquação sem alterar os parênteses possíveis:\n${equaI1}\nEm seguida o resultado:\n${i1}.`);

let i2 = (10 * 8 + 3) * 9;
let equaI2 = (`((10 * 8 + 3) * 9`);
console.log(`Analisando a equação ${equaI1}, observamos que se retirado\nalguns pares de parênteses, o resultado não será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaI2}\nVeremos que o resultado não será diferente do resultado já esperado:\n${i2}.`);
console.log(`Então é concluído que há maneiras de retirar alguns pares de parênteses!\n`);

/*---------------------------------------------------------------------*/





// J  ((-12)*(-4))+(3*(-4))
let j1 = ((-12) * (-4)) + (3 * (-4));
let equaJ1 = (`((-12) * (-4)) + (3 * (-4))`);
console.log(`Exercício J.\nEquação sem alterar os parênteses possíveis:\n${equaJ1}\nEm seguida o resultado:\n${j1}.`);

let j2 = -12 * -4 + 3 * -4;
let equaJ2 = (`-12 * -4 + 3 * -4`);
console.log(`Analisando a equação ${equaJ1}, observamos que se retirado\nalguns pares de parênteses, o resultado não será alterado.`);
console.log(`Podemos enchergar isso no exemplo abaixo:\n${equaJ2}\nVeremos que o resultado não será diferente do resultado já esperado:\n${j2}.`);
console.log(`Então é concluído que há maneiras de retirar alguns pares de parênteses!\n`);

/*---------------------------------------------------------------------*/




