const log = console.log
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.9}',
    '{"nome": "Kit de Lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]

//Retornar um array apenas com os preços
const toObject = JSON.parse,
      getPreco = objeto => objeto["preco"],
      paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`
    
const resultado = carrinho.map(toObject).map(getPreco).map(paraDinheiro)
log(resultado)