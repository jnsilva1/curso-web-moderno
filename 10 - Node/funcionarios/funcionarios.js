const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = funcionario => funcionario.pais === 'China', 
      mulheres = funcionario => funcionario.genero === 'F',
      getSalario = funcionario => funcionario.salario,
      menorSalario = (funcionario,funcionarioAtual) => getSalario(funcionario) < getSalario(funcionarioAtual) ? funcionario: funcionarioAtual

axios.get(url).then(response=>{
    const funcionarios = response.data
    //console.log(funcionarios)

    /// Mulher chinesa com o menor salário
    const funcionaria = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(funcionaria)
})


