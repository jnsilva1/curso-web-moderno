const log = console.log
log(this === global)
log(this === module)

log(this === module.exports)
log(this === exports)

function logThis(){
    log('Dentro de uma função...')
    
    log(this === exports)
    log(this === module.exports)
    log(this === global)
    this.perigo = '...'
}
logThis()