/*
    A mutação é a criação de um objeto a partir de outro.
    O novo objeto não é "novo", mas sim uma referência do primeiro. Portanto, as mudanças dele, irão afetar a cópia e vice_versa
*/

const a = {
    idade: 22
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

b.nome = "Layrane" // Mesmo eu estando atribuindo apenas a 'b' uma nova propriedade, os dois irão receber a mesma propriedade

console.log(a)
console.log(b)

// PERCEBA QUE EU PASSEI O OBJETO 'A' E NÃO 'B'
delete a.nome // Os dois perderão a mesma propriedade

console.log(a)
console.log(b)