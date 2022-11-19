const log = console.log
const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //massa quebrou o carro!
log(pilotos)

pilotos.push('Verstappen')
log(pilotos)

pilotos.shift() //remove o primeiro!
log(pilotos)

pilotos.unshift('Hamilton')
log(pilotos)

//splice pode adicionar e/ou remover

//adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
log(pilotos)

//remover
pilotos.splice(3,1) //Massa quebrou de novo ;(
log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Novo Array
log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
log(algunsPilotos2)