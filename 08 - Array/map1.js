const log = console.log,
      nums = [1,2,3,4,5]

//For com propósito
let resultado = nums.map(function(e){
    return e * 2
})
log(resultado)
log(nums)

const soma10 = e => e + 10,
      triplo = e => e * 3
      paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".",",")}`
    
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
log(resultado)
