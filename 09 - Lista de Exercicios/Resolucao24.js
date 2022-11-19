/**
 * 
 * Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de
vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar
maiúsculas de minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1

 */

const frase1= "A sorte favorece os audazes", frase2 = "Conhece-te a ti mesmo"
function contarCaractere(caractere,frase){
    return (frase || "").split("").filter(char => caractere === char).length
}

console.log(contarCaractere("r", frase1))
console.log(contarCaractere("c", frase2))