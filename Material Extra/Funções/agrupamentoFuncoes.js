function somarNotas(a, b, c, d) {
    return a + b + c + d
}

function mediaAluno() {
    const soma = somarNotas(10, 10, 10, 10) // aqui eu estou passando a função de cima, de somarNotas, e atribuindo valores a ela
    return soma / 4
}

console.log(mediaAluno())