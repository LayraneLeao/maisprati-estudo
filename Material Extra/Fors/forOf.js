/*
    Este tipo de for é nativo do JavaScript, mas não nasceu com ele.
    O `for...of` foi introduzido oficialmente em 2015 com a especificação ES6 (ECMAScript 2015).
*/

const users = ['João', 'Maria', 'Layrane', 'Giovanna']

console.log("Array original: ")
for (let name of users){
    console.log("\t",name)
}

users.unshift("Aurora") // Adicionando um novo nome ao ínicio do meu array
users.push("Cristina") // Adicionando um novo nome ao final do meu array

console.log("\nArray alterado: ") 

for (let name of users){
    console.log("\t",name)
}

/*
    Perceba que eu não preciso acessar o índice manualmente.
    O `for...of` percorre automaticamente todos os elementos do array, atribuindo cada valor (neste caso, os nomes) à variável temporária `name`. Com isso, todos os nomes são impressos um por um, linha por linha.
*/
