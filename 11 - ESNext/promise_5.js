function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        if(Math.random() < chanceErro){
            reject('Ocorreu um erro')
        }else{
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(valor => console.log(`Valor: ${valor}`))
    .then(
        valor=> console.log(valor),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(console.log('Quase Fim!')) 
    .catch(err => console.log('Erro: ' + err))
    .then(()=>  console.log('Fim!'))