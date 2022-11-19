/**
 * Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15

 */

const array1 = [10, 5, 35, 65], array2 = [5, -15, 50, 3] 
function menorNumero(array){
    const menor = (x, y) => x < y ? x : y
    return array.reduce(menor)
}

console.log(menorNumero(array1))
console.log(menorNumero(array2))