function salvar(req, res, next) {
  res.res(`Usuário > salvar`);
  next();
}

function obter(req, res) {
  res.send(`Usuário > obter`);
}

module.exports = { salvar, obter };
