/**
 * Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0
 */

function multiplicar(x, y){
    let resultado = x
    for(let i = 1; i < y; i++){
        resultado += x
    }
    return resultado
}

console.log(multiplicar(5,5))
console.log(multiplicar(0,7))
console.log(multiplicar(3,5))