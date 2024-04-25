//DENTRO DAS CHAVES, PODEMOS CRIAR PROPRIEDADE CONTENDO (CHAVE E VALOR). 

const professor = {
    nome : 'Vitor',
    idade: 27,
    tarefas: ['dar aula', 'responder dúvidas'],
    contarPiadas: function() {
        console.log('É pa vê ou pa comê')
    }
}

// como chamar no console . ou []

const professor1 = {
    nome : 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
console.log(professor.idade)// ponto  ou
console.log(professor["email"]) // colchetes

// 

const professor2 = {
    nome : 'Vitor',
    idade: 27,
    email: 'vitor@gmail.com'
}
professor.nome = ' mika'
professor['email'] = 'mika@gmail.com'

//objeto dentro d eobjeto

const donoDoPet ={
    nome:'vitor hugo',
    pet:{
        nomeDoPet: 'wanda',
        raca: 'vira-lata',
        idade:1
    }
}
console.log(donoDoPet.pet.nomeDoPet)

// acessando um indice em uma array

const curso = {
    nome:'noturno frontend',
    linguagens: ['JS', 'CSS', 'HTML']
}
console.log(curso.linguagens[0])

// consultando uma propriedade dentro de um indice de array

const professores = [
    {nome:'Andrei', modulo: 1},
    {nome:'Vitor', modulo: 2},
    {nome:'Mina', modulo:3}
]
console.log(professores[1].nome)

// adicionando nova propriedade

const curso1 = {
    nome: 'frontend',
    linguagem: ['JS', 'CSS','HTML'],
}
curso.numeroEstudante = 30
console.log(curso)

// Espalhamento chamado spred

const usuario = {
    nome:'prof',
    idade: 25,
    email: 'prof@senac.com.br',
    cidade: 'São Paulo',
}

    const novoUsuario1 = {
    ...usuario,
 nome:'João',
idade: 28 
}