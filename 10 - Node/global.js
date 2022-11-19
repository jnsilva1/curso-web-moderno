const log = console.log
//log(global)
global.log = log
global.MinhaApp = Object.freeze({
    saudacao: () => 'Estou em todos os Lugares',
    nome: "Sistema Legal"
})