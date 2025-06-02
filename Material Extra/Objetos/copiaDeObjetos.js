/* 
    Método para salvar o conteúdo de um objeto em outro
*/

const estudante = {
    nome: "Giovana",
    idade: 13,
    sexo: "Feminino",
    turma: "3b"
}

const monitor = {
    programa: ["adicionado ao objeto 2"]
}

//          ((onde eu quero salvar), (de onde eu quero copiar))
Object.assign(monitor, estudante) // copia todas as propriedades de 'estudante' para dentro do objeto 'monitor', sem modificar 'estudante'

console.log("\n2. objeto: ", monitor) // o objeto monitor agora tem suas propriedades originais + as propriedades copiadas de 'estudante'

console.log("\n1. objeto: ", estudante) // não foi modificado, continua as as mesmas propriedades