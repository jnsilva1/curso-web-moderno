/**
 * 
 *Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade
indeterminada de números e retorne a média simples desses números.
💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
Exemplos:
calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3
 */

const nums1 = [0, 10], nums2 = [1, 2, 3, 4, 5]
function calcularMedia(nums){
    const soma = (total, valor) => total + valor
    return nums.reduce(soma) / (nums.length || 1)
} 

console.log(calcularMedia(nums1))
console.log(calcularMedia(nums2))
