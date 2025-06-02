
/*
    O indexOf me retorna o índice de onde está o argumento que eu passei pra ele
*/

// L  a  y  r  a  n  e
// 0  1  2  3  4  5  6

const nome = "Layrane"

console.log(nome.indexOf("y")) //  me retorna '2', porque começa no 0

console.log(nome.indexOf("z")) // me retorna '-1' porque não existe esta letra na minha string

console.log(`\nNovo teste: ${nome.indexOf("a")}\n`) // mesmo que tenha outro "a" no índice 4, o indexOf() só retorna o primeiro que ele encontrar.