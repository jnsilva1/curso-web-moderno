/**
 * Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.
Exemplos:
filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1]
 */

const nums1 = [38, 2, 365, 10, 125, 11], nums2 = [5, 9, 1, 125, 11]
function filtrarPorQuantidadeDeDigitos(nums, digitos){
    const filtrarDigitos = num => num.toString().length === digitos
    return nums.filter(filtrarDigitos)
}

console.log(filtrarPorQuantidadeDeDigitos(nums1,2))
console.log(filtrarPorQuantidadeDeDigitos(nums2, 1))