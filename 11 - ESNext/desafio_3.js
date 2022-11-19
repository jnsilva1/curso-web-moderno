const fs = require('fs')
const path = require('path')

function LerArquivo(caminho = ''){
    return new Promise((resolve, reject)=>{
        fs.readFile(caminho, (erro, conteudo)=>{
            if(erro != null){
                reject(erro)
            }else{
                resolve(conteudo.toString())
            }
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'arquivoLeitura.json')
LerArquivo(caminho).then(console.log)