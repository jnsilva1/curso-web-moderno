const log = console.log

const escola = [
    {
        nome: 'Tuma M1',
        alunos: [
            {nome: 'Gustavo', nota: 8.1},
            {nome: 'Ana', nota: 9.3}
        ]
    },
    {
        nome: 'Tuma M2',
        alunos: [
            {nome: 'Rebeca', nota: 8.9},
            {nome: 'Roberto', nota: 7.3}
        ]
    }
]

const getNotaDoAluno = aluno => aluno.nota,
      getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
log(notas1)

Array.prototype.flatMap = function(callbackfn){
    return Array.prototype.concat.apply([], this.map(callbackfn))
}

const notas2 = escola.flatMap(getNotasDaTurma)
log(notas2)