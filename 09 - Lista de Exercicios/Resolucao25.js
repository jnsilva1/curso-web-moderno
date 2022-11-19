/**
 * A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array
de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []

 */

const array1 = ["programação", "mobile", "profissional"], array2 = ["javascript", "java", "c++"]
function buscarPalavrasSemelhantes(palavra, lista){
    const palavrasSemelhantes = p => p.indexOf(palavra) != -1
    return lista.filter(palavrasSemelhantes)
}

console.log(buscarPalavrasSemelhantes("pro", array1))
console.log(buscarPalavrasSemelhantes("python", array2))