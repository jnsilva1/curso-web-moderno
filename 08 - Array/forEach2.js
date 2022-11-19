const log = console.log
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']
function ForEach(callback){
    if(typeof callback === "function")
        for(let indice = 0; indice < this.length; indice++){
            callback(this[indice], indice, this)
        }
}
Array.prototype.forEach2 = ForEach

aprovados.forEach2(function(nome, indice){
    log(`${indice + 1}) ${nome} `)
})

aprovados.forEach2()//Nothing to do