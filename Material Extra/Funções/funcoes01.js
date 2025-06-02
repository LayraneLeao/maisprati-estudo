// Funções sem parâmetros

function mostrarMeuNome(){
    console.log("Layrane")
}

mostrarMeuNome() // Chamando a função

// Funções com parâmetros
function mostrarMeuNome1(nome){
    console.log(`\nEsté é um outro teste:\nOlá ${nome}`)
}

let nomePassado = "Paulo"

mostrarMeuNome1(nomePassado)

// Funções com retorno
function multiplicacaoDeNumeros(a,b,c,d){
    return a*b*c*d
}

let resultado = multiplicacaoDeNumeros(2,2,2,2)

console.log(`\nO resultado destá função é: ${resultado}\n`)