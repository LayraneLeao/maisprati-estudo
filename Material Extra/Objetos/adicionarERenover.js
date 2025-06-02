// Como adicionar e renover propriedades do meu objeto

const estudante = {
    nome: "Giovana",
    idade: 13,
    sexo: "Feminino",
    turma: "3b"
}

console.log("\n1. sem modificações:", estudante)

estudante.sala = "sala 3 no 2º andar"

console.log("\n2. adicionando uma nova propriedade:", estudante)

delete estudante.sala

console.log("\n3. renovendo a última propriedade adicionada:", estudante)

// Retornando as chaves dos objetos e as propriedades

console.log(Object.keys(estudante)) // Retorna as chaves do objeto estudante
console.log(Object.entries(estudante)) // Retorna um array com pares [chave, valor]

/*
    Retorno do Object.entries
    0  [ 'nome', 'Giovana' ]
    1  [ 'idade', 13 ]
    2  [ 'sexo', 'Feminino' ]
    3  [ 'turma', '3b' ]
*/