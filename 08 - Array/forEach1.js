const log = console.log
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    log(`${indice + 1}) ${nome} `)
})

log()
aprovados.forEach(nome => log(nome))
log()
const exibirAprovado = aprovado => log(aprovado)
aprovados.forEach(exibirAprovado)