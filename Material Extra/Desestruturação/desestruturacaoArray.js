//                                                     Desestruturação em Array

// Usa a ordem dos elementos, não os nomes (porque array não tem chaves nomeadas).

const veiculos = ["Carro", "Moto", "Trem", "Ônibus"]

const [veiculoA, , veiculoC, veiculoD] = veiculos

console.log(`${veiculoA}\n${veiculoC}\n${veiculoD}\n`)

// Perceba que eu pulei um elemento do array, que seria a 'Moto'. Isso porque a desestruturação busca pelos indices, então se eu não quero extrair o índice 1, eu apenas passo a virgula para vir o próximo

// Caso eu desejasse, também poderia pegar apenas um elemento do array, não tenho a obrigação de extrair todos e armazenar nas variáveis

const [elemento0] = veiculos

console.log(elemento0)



//                                                      -- Usando Res Operator

const [primeiro, ...restantes] = veiculos;
console.log(primeiro);   // Carro

// Quando você usa o ...restantes na desestruturação de um array, ele mantém os valores restantes como um novo array.

console.log(restantes);  // [ 'Moto', 'Trem', 'Ônibus' ]