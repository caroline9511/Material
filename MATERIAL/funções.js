//                                             FUNÇÃO

// * Uma função é um bloco de código onde poode ser chamado ou invocado a partir de seu nome, permite reutilizar variáveis.

// Exemplo:

function calculaArea(altura, largura) {
    const area = altura * largura
    console.log(area)                                     //corpo da função
}
calculaArea(2, 3)

/* FUNCTION => Declaração de função.
 *CALCULAAREA() => Identificador
 * () => Parâmetros
                _______//_______ Parametros
 * CONST AREA = ALTURA * LARGURA   =>    //
 * CONSOLE.LOG(AREA)               =>   // Bloco de código a ser executado
              __//__ Argumentos 
 * CALCULAAREA(2, 3) => Chamada da função.

 * PRIMEIRO DECLARAR A FUNÇÃO E DEPOIS CHAMAR OU EXECUTAR.
   PARÂMETROS SÃO COMO VARIÁVEIS
   ARGUMENTOS SÃO COMO VALORES (Strings, Numbers, Booleanos)*/

   //                                 EXEMPLOS FUNÇÃO COM IF/ ELSE:
   function verNumero(numero){
    if (numero % 2 === 0) {
        console.log(`meu numero ${numero} é par`)
    } else {
    console.log(`meu numero ${numero} é impar`)
    }
}
verNumero(23)

//                                  EXEMPLO COM NUMBERS

function calculoMedia(nota1, nota2, nota3) {
    const calculo = ((nota1 + nota2 + nota3) / 3)
    console.log(calculo)
}
calculoMedia(40,20,30)

//                                  EXEMPLO COM STRINGS

function imprimirNomes (nome1){
    console.log (`Olá ${nome1}, seja bem vindo!`)
}
imprimirNomes('Caroline')
imprimirNomes('Diulie')
imprimirNomes('Mariana')



/*                                          ESCOPO

*ESCOPO GLOBAL => Variáveis no escopo globar podem ser acessadas de qualquer lugar do código.
*ESCOPO LOCAL  => Somwnte podem ser acessadas dentro do escopo em que foram declaradas.
* As variáveis dentro de uma função são denominadas escopo local.*/

//                                          EXEMPLOS:

const a = 1   //escopo global
function imprimeVariavel (){
    const b = 2  // escopo local
    console.log('variavel a', a)   //
    console.log('variavel b', b)  //  É POSSÍVEL ACESSAR AMBAS VARIÁVEIS
}
imprimeVariavel()
    console.log('variavel a', a)    //
    console.log('variavel b', b)   // NÃO É POSSÍVEL ACESSAR AMBAS VARIÁVEIS


    /*                                      RETORNO

    *Retorno é um jeito de chamar uma função sem usar o CONSOLE.LOG(), o retorno aparece quando chamamos 'return' seguida pela variável/ valor.*/

    //                                      EXEMPLO:
    function calculaArea1 (altura, largura){
        const area = altura * largura
        return area
    }
    const areaCalculada = calculaArea1(2, 3) // atribui retorno a uma variável
    console.log(calculaArea1(2, 3)) // imprime retorno no console

    // * MODELOS MENTAIS: Entrada = input, Saída = output

    // ARROW FUNCTIONS : São sintaxe simplificada.

    //                                         COMPARAÇÃO:

    // Declaração de Função

function somaNumeros (num1, num2) {
    return num1 + num2
}

    // Expressões de Função

let somaNumero = function(num1, num2) {
    return num1 + num2
}

    // OU

let somaTodosNumeros = (num1, num2) => {
    return num1 + num2
}