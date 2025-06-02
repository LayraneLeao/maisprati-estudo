/* 
    unshift: adiciona valores ao ínicio do array
    shift: remove valores do ínicio do array

    IMPORTANTE: Tanto o .shift() quanto o .unshift() **modificam o array original** 
*/

const letras = ['b', 'c']

letras.unshift('a')

letras.unshift(2, 'z') // Consigo passar vários valores, e de tipos diferentes também

console.log(letras)

const letraRemovida = letras.shift()

console.log(`\nEste número foi removido do meu array: ${letraRemovida}\n`)

letras.shift() // removi o 'z'

console.log(letras)