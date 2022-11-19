/**
 * 
 * Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"

 */

function removerVogais(texto){
    const vogais =["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"], eliminaVogal = letra => vogais.indexOf(letra) === -1
    return texto.split("").filter(eliminaVogal).join("")
}

console.log(removerVogais("Cod3r"))
console.log(removerVogais("Fundamentos"))