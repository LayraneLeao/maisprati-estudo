/*
    Crie um array chamado 'numeros contendo 10 valores númericos á sua escolha
    
    Use métodos de array para calcular:
        1. A soma de todos os elementos
        2. A média dos elementos
        3. Gerar um novo array chamado pares que contenha apenas os números pares de 'numeros'
    Imprima no console:
        - O array original
        - A soma
        - A média
        - O array pares    
*/

const numeros = [20, 4, 50, 37, 51, 12, 3, 9, 11, 16]
let soma = numeros.reduce(function (acumulador, numero) {
    return acumulador + numero
}, 0)

const media = soma / numeros.length

// o array que eu vou salvar = o array que eu to tirando a informação . método (um único elemento do meu array => condicao)
let pares = numeros.filter(numero => numero % 2 === 0) // no meu 'filter' eu estou testando numero por numero do meu array 'numeros'

console.log(`\nArray original : ${numeros}`)
console.log(`Soma : ${soma}`)
console.log(`Média : ${media}`)
console.log(`Array de pares : ${pares}\n`)

// Ordene o array numeros em ordem crescente(Do menor para o maior) antes de calcular a soma e a média

let valor
const numbers = [8, 1, 9, 3, 7, 2, 18]
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
            valor = numbers[j]
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = valor
        }
    }
}

console.log(numbers)

for (let i = 0; i < (numbers.length + numbers.length); i++) {
    if (numbers[i] > numbers[i + 1]) {
        valor = numbers[i]
        numbers[i] = numbers[i + 1]
        numbers[i + 1] = valor
    }
}

console.log(numbers)