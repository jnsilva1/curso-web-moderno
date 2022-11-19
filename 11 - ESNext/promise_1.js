let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

function primeiroElemento(array){
    return array[0]
}
let primeiraLetra = primeiroElemento; 
const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
