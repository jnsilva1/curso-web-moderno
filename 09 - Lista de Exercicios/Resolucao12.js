/**
 * Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam
cópias de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em
algumas situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o
nome de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a
propriedade especificada no segundo parâmetro.
Exercícios - Curso Fundamentos de Programação 3
Exemplos:
removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}
 */

function removerPropriedade(objeto, propriedade){
   var novoObjeto = Object.create(objeto)
   Object.keys(objeto).filter(prop=> prop != propriedade).forEach(prop=> novoObjeto[prop] = objeto[prop])
   return novoObjeto
}

const objeto1 = {a: 1, b: 2}, objeto2 = {
   id: 20,
   nome: "caneta",
   descricao: "Não preenchido"
   }
console.log(removerPropriedade(objeto1, "a"))
console.log(Object.is( removerPropriedade(objeto1, "a"), objeto1))
console.log(removerPropriedade(objeto2, "descricao"))
console.log(Object.is(removerPropriedade(objeto2, "descricao"),objeto2))