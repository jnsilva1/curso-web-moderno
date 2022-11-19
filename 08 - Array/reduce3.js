const log =  console.log
Array.prototype.reduce2 = function(callbackfn, valorInicial){
    let acumulador = valorInicial || this[0], indiceInicial = valorInicial ? 0 : 1
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callbackfn(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total +  valor
const nums = [1,2,3,4,5,6]
log(nums.reduce(soma))