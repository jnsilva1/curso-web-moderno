/**
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril" 
 */

function nomeDoMes(mes){
    const nomeMeses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", " setembro", "outubro", "novembro", "dezembro"];
    return nomeMeses[mes-1] || null; 
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))