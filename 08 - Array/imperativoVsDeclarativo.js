const log = console.log
const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

//Imperativa
let total1 = 0
for(let i = 0; i< alunos.length; i++)
    total1 += alunos[i].nota
log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota,
      soma = (total, atual) => total + atual,
      total2 = alunos.map(getNota).reduce(soma)
log(total2 / alunos.length)

// select codigo, nome, email from clientes 