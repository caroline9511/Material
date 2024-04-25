/*                               LAÇOS

* Elemento de um laço deve ter um COMEÇO, uma CONDIÇÃO DE CONTINUAÇÃO, um CONJUNTO DE AÇÕES para ser repetido, e um INCREMENTO.

LOOPS INFINITOS => É uma ação que nunca acaba, ele pode acontecer quando esquecemos de colocar algum incremento da variável. Para intenrrompe-lo é só fechar a aba onde ele está rodando, ou fechar o navegador, ou desligue o PC ou control+c.*/

//                               WHILE ('ENQUANTO'):

//* É a estrutura mais básica da criação dos loops.

let i = 0                  //começo
while (i<10) {            //condição da continuação
    console.log(i)       //
    i++ // incremento   //> ação repetida
}

//                                      EXEMPLOS:

let estomago = 0;
while (estomago < 100) {
    console.log('quero comer mais coxinhas');
    estomago = estomago + 10
}

//                                 FOR:

/* É uma maneira de simplificar a escrita do laço que tenham esse comportamento de continuação.


      começo  /  condição de continuação.
    ____*____ ____*___ ___=> incremento */
for(let i = 0; i < 10; i++) { 
    console.log(i) // ação repetida
}


//           for com array

const numeros = [14, 67, 89, 15, 23]

for(let i = 0; i< numeros.lenght; i++) {
    const elemento = numeros[i]
    console.log(elemento)
}

//                                 FOR OF:

//* Ele percorre arrays e objetos, é uma forma de simplificar a leitura dos elelmentos.
// Exemplo:

// for of, somente para percorrer arrays

const numeros1 = [14, 67, 89, 15, 23]
for (let numero of numeros) {
    console.log(numero)
}