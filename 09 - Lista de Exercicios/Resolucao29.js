/**
 * Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
Exemplos:
segundoMaior([12, 16, 1, 5]) // retornará 12
segundoMaior([8, 4, 5, 6]) // retornará 6

 */

const nums1 = [12, 16, 1, 5], nums2 = [8, 4, 5, 6]
function segundoMaior(nums){
    const maior = (x, y) => x > y ? x : y, abaixoDoMaior = valor => valor < nums.reduce(maior)
    return nums.filter(abaixoDoMaior).reduce(maior)
}

console.log(segundoMaior(nums1))
console.log(segundoMaior(nums2))