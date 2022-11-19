/**
 * Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao
ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme
exemplo a seguir:
Exemplo:
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}
 */

function inverter(objeto){
    const novoObjeto = {}
    Object.keys(objeto).forEach(chave=> novoObjeto[objeto[chave]] = chave)
    return novoObjeto
}

console.log(inverter({ a: 1, b: 2, c: 3}))