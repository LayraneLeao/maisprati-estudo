// Testando mais funções
const prompt = require("prompt-sync")()

function mensagem(){
    let nome = prompt("Qual nome do seu marido? ")
    console.log(`\nVocê vai se casar com ${nome}, se esta for a vontade de Deus!\n`)
}

mensagem() // Chamando a função

