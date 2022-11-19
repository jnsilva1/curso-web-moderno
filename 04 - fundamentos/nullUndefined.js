let valor //não inicializada
console.log(valor);
//console.log(valor2); //is not defined

valor = null //ausência de valor
console.log(valor);

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

//Evite usar essa sintaxe
produto.preco = undefined;
console.log(!!produto.preco);
console.log(produto);

delete produto.preco;
console.log(produto);

produto.preco = null; //Sem preço
console.log(!!produto.preco);
console.log(produto);
