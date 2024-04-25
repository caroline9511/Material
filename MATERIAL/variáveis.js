  //                                   VARIÁVEIS 

// São estruturas  que permitem guardar e acessar qualquer informação no nosso código.

   const     novaVariavel     =         100
//declaração  /  nome  /  atribuição  / valor

// Exemplos de variáveis
const idade = 23 // variável const não pode trocar valores.
let idade1 = 23 // variável let é permitido a troca de valores sempre que necessário.
const nomeCompleto = ''
       // Essa forma de escrita se chama camelCase é regra.

// Sempre que eu for imprimir no console tenho que chamar...
console.log('olá ', 'meu nome é ', nomeCompleto, ' e eu tenho', idade, ' anos.') // sempre imprimir desta forma

//                        TIPOS DE VALORES DE VARIÁVEIS

// Numbers => representam números.
const altura = 1.79
const temperatura = 20 // Numbers, somente o numero como valor.

// strings => representam textos.
const nome = 'Carol'
const imovel = 'casa' // Strings sem colocar o valor entre áspas "" ou ''.

// booleans => representam valores verdadeiro e falso.
true // verdadeiro
false // falso

// * typeof => comando que permite ver o tipo do valor da variável.
let got = 'Game of Thrones'
let temporadasDeGot = 8

// No console será impresso
// let got = string
// let temporadasDeGot = Numbers

//* underfined => representa a falta de valor de uma variável.
let novaVariável = ''
//typeof novaVariável = underfined

//* Null => també representa a falta de um valor na variável diferença é que null precisa ser atribuído diretamente uma variável.
let minhaVariavel
console.log(minhaVariavel) // underfined
minhaVariavel = null
console.log(minhaVariavel) // null

//                         CONVERSÃO DE TIPOS


//*** Numero para string, método toString.

const idadeNumero = 23
const idadeTexto = idadeNumero.toString()
console.log(typeof idadeNumero)
console.log(typeof idadeTexto)

 //*** String para Numero, método Number.

 const pesoTexto = '23'
 const pesoNumero = Number(pesoTexto)
 console.log(typeof pesoTexto)
 console.log(typeof pesoNumero)

