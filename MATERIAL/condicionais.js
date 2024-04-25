//                                    COMPARADORES


/* comparadores são operadores que permitem comparar duas variáveis entre si.
resultado desses operadores é sempre um booleano.*/

// * === : valores e tipo iguais
// * !== : valores ou tipos diferentes
// * >  : maior que...
// * >= : maior ou igual que
// * <  : menor que
// * <= : menor ou igual que

//                                 OPERADORES LÓGICOS:

// *  && : and ou E = verdadeiro se ambos os operadores forem verdadeiros.
// *  || : or ou OU = verdadeiro se ambos os operadores forem verdadeiros.
/* *  !  : negação, sua função é simplesmete inverter os valores: se verdadeiros = falso, 
se falso = verdadeiro*/
true = false
false = true


//                               CONDICIONAIS IF / ELSE

//  IF => significa 'SE'
//  ELSE => significa 'SE NÃO'
//                             Exemplo CONDICIONAL SIMPLES:

let idade = 18
// if = se
// se idade for maior ou igual a 18, executar código.
if (idade >= 18) {
    console.log("você é adulto")
} 

//                             Exemplo CONDICIONAL COMPOSTA1

let idade1 = 20
//if = se
// se idade for maior ou igual a 18, executar código.
if (idade >= 18) {
    console.log("você é de maior")
} else {
    console.log("você é de menor")
}

//                             Exemplo CONDICIONAL COMPOSTA2

let idade2 = 22
if (idade >= 18) {
console.log('você é adulto')
} else if (idade >= 13 && idade <= 17) {
    console.log('você é adolecente')
} else {
    console.log('você é uma criança')
}
 
//                                MÉTODO SWICTH CASE (maneira de simplificar o if/else)

let paisDeOrigem = 'Brasil'
switch (paisDeOrigem) {
    case 'Brasil':        // cases indicam condições
        console.log('brasileiro')
        break   // é palavra que faz o bloco da execução parar.
    case 'EUA':
        console.log('Norte Americano')
        break
    case 'Inglaterra':
        console.log('inglês')
        break
    default:  //o código dentro dele será executado se o valor da variável não bater com as opções de cases
        console.log('nacionalidade não encontrada')
    }

