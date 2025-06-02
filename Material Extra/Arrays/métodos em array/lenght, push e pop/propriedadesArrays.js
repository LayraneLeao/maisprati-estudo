/*
    PRINCIPAIS PROPRIEDADES QUE AJUDAM NA MANIPULAÇÃO DOS ARRAYS:
    1. length:  retorna o tamanho do array
    2. filter: filtra um array baseado em uma condição
    3. find: encontra um elemento dentro do array baseado em uma condição
    4. findIndex: encontra o índice de um elemento dentro do array
    5. forEach : cria um loop para percorrer as opções do array
    6. map: percorre todas as posições do array
    7. push: adicona um novo valor no final do array
    8. pop: remove o último item do array
    9. splice: remove umitem específico do array
    10. reverse: inverte a posição dos elementos do array
*/

// const frutas = ["Banana", "Uva", "Pessego"]

// frutas.push("Outra fruta") // Adiciono um novo valor ao meu array, na ÚLTIMA POSIÇÃO

// for (let fruta of frutas) {
//     console.log(fruta)
// }

// frutas.pop("Banana") // pop() não aceita argumentos. 'Banana' será ignorado;
// //Sempre remove o último item do array;

// console.log("\nNOVO FOR:")
// for (let fruta of frutas) {
//     console.log(fruta)
// }


const numeros = [2, 5, 9]

console.log(numeros.length) // Podemos escrever uma propriedade assim
console.log(numeros['length']) // ou assim!

numeros.pop()

console.log(numeros)

const itemRemovido = numeros.pop() // o 'pop' me permite retorna o valor que você removeu do array

console.log(`Este valor foi removido do meu array: ${itemRemovido}`)

numeros.push(10, 50, 30, 70) // pode adicionar vários valores, desde que você os separe por vírgula

console.log("Novo array, adicionado pelo 'push': "+ numeros)