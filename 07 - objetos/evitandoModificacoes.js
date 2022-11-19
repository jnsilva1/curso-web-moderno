const log = console.log
//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
log(pessoa)

//Object.freeze = selado + valores constantes
