/**
 * Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
 */

const alunos ={
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}
function recerberMelhorEstudante(alunos){
    const media = (total, nota, indice, self) => (total + nota)  / (indice === self.length - 1 ? self.length  : 1), 
    melhorMedia = (anterior, atual) => anterior > atual ? anterior : atual,
    retornaMedia = aluno => aluno.media,
    alunoMelhorDesempenho = (aluno, indice, array) => retornaMedia(aluno) === array.map(retornaMedia).reduce(melhorMedia),
    aluno = nome => ({ nome, media: alunos[nome].reduce(media) })
    
    return Object.keys(alunos)
        .map(aluno)
        .filter(alunoMelhorDesempenho)[0]
}

console.log(recerberMelhorEstudante(alunos));