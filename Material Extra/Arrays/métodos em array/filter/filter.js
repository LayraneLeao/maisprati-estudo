/*
    O filter é um método de array usado para **filtrar dados**. Assim como o for, ele percorre o array valor por valor.

    O filtro é definido por uma função de callback que retorna true ou false. Apenas os elementos que retornarem true serão incluídos no novo array.

    O resultado é armazenado em um **novo array**, contendo apenas os elementos que passaram na condição.
*/

const numeros = [10,5,2,6,8]

const maioresNumeros = numeros.filter((numero) => {
    if (numero === 20){
        return numero
    }
})

console.log("\nPrimeiro Filter: ", maioresNumeros)

// Se o filter não encontrar nenhum elemento que atenda à condição, ele retorna um array vazio ([]).

const usuarios = [
    {nome: "Aurora", disponivel: true},
    {nome: "Priscila", disponivel: false},
    {nome: "Inês", disponivel: true},
    {nome: "Micaela", disponivel: false},
    {nome: "Luciana", disponivel: false}
]

const usuariosDisponiveis = usuarios.filter((user) => user.disponivel)


console.log("\nSegundo Filter: ", usuariosDisponiveis, "\n")