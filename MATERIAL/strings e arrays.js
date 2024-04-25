//                                  STRINGS E ARRAYS

/* Strings são tipos referentes a texto.

* CONCATENAÇÃO DE STRINGS: podemos juntar vária strings para formar uma nova utilizamos o sinal + para fazê-lo.*/

//                                     EXEMPLO:

const nome = 'Mika'
const idade = 27
const frase = 'Meu nome é' + nome + 'e tenho' + idade + 'anos' 

//* TEMPLATE STRINGS: Para formar uma frase, juntando as strings não permite colocar ('' ou ""), será somente com Cráse e usamos o sifrão e chaves(${}).
//Exemplo:
`meu nome é ${nome} e tenho ${idade} anos`
/* PROPRIEDADE LENGTH => Diz o tamanho de uma string, incluindo espaços.

 * MÉTODO TOLOWERCASE => Transforma todas as letras da string em minúscula.

 * MÉTODO TOUPPERCASE => Transforma todas letras de uma string em maiúscula.

 * MÉTODO TRIM() => Retira todos os espaços que existem antes e depois de uma string.

 * MÉTODO INCLUDES(CARACTERES)=> Determina se o conjunto de caracteres dentro de uma outra string é true ou false.

 * MÉTODO REPLACEALL(CHARS1, CHARS2)=> Troca todas as ocorrências de um conjunto de caracteres uma pela outra. exemplo:*/

const frase1 = 'hoje comi cenoura, adoro cenoura'
const novaFrase = frase.replaceAll('cenoura', 'batata')
// novaFrase = hoje comi cenoura, adoro batata.

const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] // Valores
// indices       0    1    2    3    4    5    6    7


//                                         ARRAYS
//* Arrays são listas de elementos.
//                                     EXEMPLO:

//arrays lista de elementos, [numbers,string,boolenos]
const listaDeCpompras = ['batata','alface','queijo']
const numeroDaMega = [2,13,26,35,41,60]
const listaDeCompras = ['abacate','banana','tomate']   // ordem[ 0,1,2]
const segundoItem = [2] //'tomate


//                                EXEMPLOS DE TIPOS DE ARRAYS:

//CONCAT(): Concatena dois ou mais arrays e retorna um novo array resultante.
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); 
// Saída: [1, 2, 3, 4, 5, 6]

//FILTER(): Cria um novo array contendo apenas os elementos que passam por uma determinada condição de filtragem.
const numbers = [1, 2, 3, 4, 5];
function isEven(num) {
    return num % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); 
// Saída: [2, 4]


//FIND(): Retorna o primeiro elemento no array que satisfaz uma determinada condição de busca.
const numbers1 = [1, 2, 3, 4, 5];
function findNumber(num) {
    return num > 2;
}
const foundNumber = numbers1.find(findNumber);
console.log(foundNumber); 
// Saída: 3


//FOREATCH(): Executa uma determinada função em cada elemento do array.
const numbers2 = [1, 2, 3, 4, 5];
function logNumber(num) {
    console.log(num);
}
numbers2.forEach(logNumber); 
// Saída: 1, 2, 3, 4, 5 (imprime cada número no console)


//INCLUDES(): Verifica se um determinado elemento está presente no array.
const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); 
// Saída: true

//JOIN(): Une todos os elementos do array em uma única string, separados por um separador especificado.
const fruits2 = ['apple', 'banana', 'orange'];
const fruitsString = fruits2.join(', ');
console.log(fruitsString); 
// Saída: "apple, banana, orange"

//MAP(): Cria um novo array contendo os resultados da aplicação de uma função a cada elemento do array original.
const numbers3 = [1, 2, 3];
const doubledNumbers = numbers3.map(num => num * 2);
console.log(doubledNumbers); 
// Saída: [2, 4, 6]

//POP(): Remove o último elemento do array e o retorna.
const numbers4 = [1, 2, 3, 4, 5];
const removedNumber = numbers4.pop();
console.log(removedNumber); // Saída: 5
console.log(numbers4); 
// Saída: [1, 2, 3, 4]

//PUSH(): Adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array.
const numbers5 = [1, 2, 3];
const newLength = numbers5.push(4, 5);
console.log(newLength);
console.log(numbers5); 
// Saída: 5
// Saída: [1, 2, 3, 4, 5]

//REDUCE(): Reduz o array a um único valor, aplicando uma função acumuladora para cada elemento.
const numbers6 = [1, 2, 3, 4, 5];
const sum = numbers6.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); 
// Saída: 15 (soma de todos os elementos)

//REVERSE(): Inverte a ordem dos elementos do array.
const numbers7 = [1, 2, 3, 4, 5];
numbers7.reverse();
console.log(numbers7); 
// Saída: [5, 4, 3, 2, 1]

//SHIFT(): Remove o primeiro elemento do array e o retorna.
const numbers8 = [1, 2, 3, 4, 5];
const removedNumber2 = numbers8.shift();
console.log(removedNumber2); // Saída: 1
console.log(numbers8); 
// Saída: [2, 3, 4, 5]

//SLICE(): Extrai uma parte do array e retorna um novo array.
const numbers9 = [1, 2, 3, 4, 5];
const slicedArray = numbers.slice(1, 3);
console.log(slicedArray); 
// Saída: [2, 3]

//SPLICE(): Adiciona ou remove elementos do array em uma posição especificada.
const numbers10 = [1, 2, 3, 4, 5];
numbers10.splice(2, 1, 6); // Remove um elemento a partir do índice 2 e adiciona o número 6
console.log(numbers10); 
// Saída: [1, 2, 6, 4, 5]

//TOSTRING(): Converte os elementos do array em uma string separada por vírgulas e retorna a string resultante.
const numbers11 = [1, 2, 3, 4, 5];
const stringRepresentation = numbers11.toString();
console.log(stringRepresentation); 
// Saída: "1,2,3,4,5"

//UNSHIFT(): Adiciona um ou mais elementos no início do array e retorna o novo comprimento do array.
const numbers12 = [3, 4, 5];
const newLength2 = numbers12.unshift(1, 2);
console.log(newLength2); // Saída: 5
console.log(numbers12); 
// Saída: [1, 2, 3, 4, 5]

//INDEXOF(): Retorna o índice do primeiro elemento no array igual ao valor especificado.
const numbers13 = [1, 2, 3, 4, 5];
const index = numbers13.indexOf(3);
console.log(index); 
// Saída: 2 (o índice do número 3 no array)





/*

const personagensNaruto = ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake", "Itachi Uchiha", "Gaara", "Hinata Hyuga", "Jiraiya", "Orochimaru", "Tsunade"];

function quemSouEu(array) {
    
    const indiceAleatorio = Math.floor(Math.random() * array.length);

   
    return array[indiceAleatorio];
}

const personagemEscolhido = quemSouEu(personagensNaruto);
console.log("Você é:", personagemEscolhido);
*/