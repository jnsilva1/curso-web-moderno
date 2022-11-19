/**
 * 
 Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
 */

function receberSomenteOsParesDeIndicesPares(array){
    const ehPar = valor => (valor % 2) === 0
    return array.filter((valor, indice)=> ehPar(valor) && ehPar(indice))
}

const array1 = [1, 2, 3, 4], array2 = [10, 70, 22, 43]
console.log(receberSomenteOsParesDeIndicesPares(array1))
console.log(receberSomenteOsParesDeIndicesPares(array2))