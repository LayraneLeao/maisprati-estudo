/*
    Um método que corta o conteúdo de um array original e joga isso em outro array, sem alterar o original.
    Neste método eu passo o índice do intervalo de elementos que eu desejo recortar.
*/

//               0    1    2    3    4    5
const letras = ['a', 'b', 'c', 'd', 'e', 'f']

const sliceLetras = letras.slice(3,5)
console.log(sliceLetras)

// Perceba que o último elemento que seria o 'f', ele não trouxe, isso porque eu preciso passar o índice do último elemento do meu intervalo com um '+ 1'

const sliceLetras2 = letras.slice(3, 5+1)
console.log(sliceLetras2)

// Agora e se eu não quiser passar o intervalo de índices, "de tal pra tal"? Eu passo apenas o primeiro que eu desejo buscar e os que vierem adiante ele pega também, até o último.

const sliceLetras3 = letras.slice(1)
console.log(sliceLetras3)
