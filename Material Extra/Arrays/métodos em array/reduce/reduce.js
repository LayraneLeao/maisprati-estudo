// Método utilizado pra somar números em um array

const letras = ['a', 'b', 'c', 'd']

const somaLetras = letras.reduce(function(acumulador, letraPorLetra){
    return acumulador + letraPorLetra
})

console.log(somaLetras)