/*
    Split: Divide uma string em um array, através de separadores em comum
*/

const nomeCompleto = "Layrane Dantas Pinheiro Leão"

console.table(nomeCompleto.split(" ")) // eu estou dizendo a ele, que o critério de separação da minha string em um array será o espaço

const frutas = "Maça, Uva, Banana, Pera, Tangerina" // deste vez eu dei uma vírgula e um espaço como separador comum entre as frutas que eu listei

const frutasSeparas = frutas.split(", ")
console.table(frutasSeparas)


/*
    Join: une um array em uma string com base em um separador comum
*/

console.log(`String reconstruida: ${frutasSeparas.join(", ")}`)

const arrayFrutas = ["Banana", "Uva", "Tangerina", "Pessego"]

console.log(`\nTransformando em uma String: ${arrayFrutas.join(", ")}\n`)