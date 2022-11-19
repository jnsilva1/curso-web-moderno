const log = console.log
log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
log(aprovados)

aprovados = ['Bia', 'Calos', 'Ana']
log(aprovados[0])
log(aprovados[1])
log(aprovados[2])
log(aprovados[3])

aprovados[3] = 'Paulo'
log(aprovados[3])

aprovados.push('Abia')
log(aprovados.length)

aprovados[9] = 'Rafael'
log(aprovados.length)
log(aprovados[8] === undefined)

log(aprovados)
aprovados.sort()
log(aprovados)

delete aprovados[1]
log(aprovados[1])
log(aprovados[2])

aprovados = ['Bia', 'Calos', 'Ana']
aprovados.splice(1, 1)
log(aprovados)

