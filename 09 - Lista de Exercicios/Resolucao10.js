/**
 * Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
 */
function simboloMais(quantidade){
    let simbolo  = ""
    for(let i = 0; i < quantidade; i++)
        simbolo += "+"
    return simbolo
}

console.log(simboloMais(2))
console.log(simboloMais(4))