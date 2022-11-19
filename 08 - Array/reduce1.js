const log =  console.log
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

log(alunos.map(aluno => aluno.nota))
const resultado = alunos.map(aluno => aluno.nota).reduce((acumulador, atual) => {
    log(acumulador, atual)
    return acumulador + atual
},0)
log(resultado)