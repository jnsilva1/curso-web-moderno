/**
 * 
 * Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60
 */

function somarNumeros(array){
    const soma = (total, valor) => total + valor
    return array.reduce(soma)
}

const array1 = [10, 10, 10], array2 =[15, 15, 15, 15]
console.log(somarNumeros(array1))
console.log(somarNumeros(array2))