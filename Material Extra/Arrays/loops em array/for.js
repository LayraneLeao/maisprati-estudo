// For normal e for...of, usado para percorrer arrays
const usuarios = ["João", "Priscila", "Layrane", "Micael", "Aurora"]

for (let i = 0; i < usuarios.length; i++) {
    console.log(`Listando os usuários: ${usuarios[i]}`)
}

for(let usuario of usuarios){
    console.log(`Relistando os usuários: ${usuario}`)
}


// For...in, usado para interar chaves, portanto, percorrer objetos
const pessoas = {
    nome: "Aurora",
    idade: "6 meses",
    sexo: "Feminino"
}

for(let pessoa in pessoas){
    console.log(`${pessoa}: ${pessoas[pessoa]}`)
}