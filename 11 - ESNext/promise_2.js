/*setTimeout(()=>{
    console.log('Executando Callback...')
    setTimeout(()=>{
        console.log('Executando Callback...')
        setTimeout(()=>{
            console.log('Executando Callback...')
        }, 2000)
    }, 2000)
}, 2000)
*/

function esperarPor(tempo = 2000){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Executando Promise...')
            resolve()
        },tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(esperarPor)