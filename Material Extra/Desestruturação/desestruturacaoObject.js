// Desestruturação em Objetos

const pessoa = {
 nome: "Maria",
 idade: 20
};

// Nas versões anteriores do JavaScript, para acessarmos as propriedades desse objeto podemos fazer o seguinte:

// Caso eu não queria ficar toda vez escrevendo desta forma: 
console.log(pessoa.nome, pessoa.idade) 

// eu posso fazer o seguinte:

const {nome , idade} = pessoa // Eu estou desestruturando o objeto 'pessoa', ou seja, estou extraindo as propriedades 'nome' e 'idade' e armazenando em variáveis com o mesmo nome.

console.log(nome)
console.log(idade)

// Mas e se eu quiser renomear as variáveis extraidas do objeto??

const {nome: outronome, idade: outraidade} = pessoa

console.log("\nAtribuindo novos nomes para as variáveis: \n", outronome)
console.log(outraidade)

console.log("\nObjeto intacto: ",pessoa) // o objeto permanece intacto, eu apenas extrai informações que me eram úteis