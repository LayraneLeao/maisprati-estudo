// Itera/percorre objetos

const pessoa ={ // Isto é um objeto
    nome: "Layrane",
    idade: 22,
    sexo: 'F'
}
 // 'nome', 'idade' e 'sexo' são chaves do meu objeto (ou seja, os nomes das propriedades do objeto "pessoa") 

for (let chave in pessoa){
    console.log(`${chave} : ${pessoa[chave]}`)
}

/* 
    💬 Resumindo:
    A chave é o "nome da gaveta".

    O valor é o que está dentro da gaveta.

    Um objeto é um conjunto dessas gavetas.
*/