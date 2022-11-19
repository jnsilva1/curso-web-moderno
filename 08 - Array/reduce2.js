const log =  console.log
const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

const InformacaoBolsistas = aluno => aluno.bolsista,
      TodosBolsistas = (left, right) => left && right,
      AlgumBolsista = (left, right) => left || right

//Desafio 1: Todos os alunos são bolsistas?
log(alunos.map(InformacaoBolsistas).reduce(TodosBolsistas))

//Desafio 2: Algum aluno é bolsista?
log(alunos.map(InformacaoBolsistas).reduce(AlgumBolsista))