// Como declarar: 

const pessoa = {
    nome: "Layrane",
    idade: 22,
    sexo: 'F',
    job: "Programadora"
}

console.log(pessoa) // imprime todo o objeto

console.log(pessoa.job) // imprime apenas a profissão

console.log(typeof(pessoa.idade)) // imprime o tipo de dado da 'idade'

/*
    Chave: valor
        "nome", "sexo", "idade", "job" são chamadas de chaves (keys) do objeto pessoa.
    
    Propriedades
        Quando falamos da estrutura como um todo (chave + valor), estamos falando de uma propriedade, por exemplo:
            "nome:'Layrane'" é um propriedade do meu objeto pessoa.
            
            Só o "nome" é uma chave e só o "Layrane" é um valor!

*/