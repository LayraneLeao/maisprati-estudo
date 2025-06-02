const frutas = ["Banana", "Uva", "Tangerina", "Pessego"]

console.log("\n") // apenas para pular 1 linha

for (let fruta of frutas){
    if(fruta === "Uva" || fruta === "Pessego"){
        continue; // Vai pular apenas as frutas 'uva' e 'pessego'
    }
    console.log(fruta)
}

// Um array também pode ser preenchido com dados de tipos diferentes

const array = ['Juliana', 12, true, 'Priscila']

console.log("\n") // Pular linha

console.log(`Meu array é: ${typeof(array)}`) // me retorna um object
let i = 1

for(let arr of array){
    console.log(`Tipo de dado ${i}: ${typeof(arr)}`) // me retorna cada tipo de dado do array
    i++
}