const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const saudacao = require("./saudacaoMid");
const usuarioApi = require("./api/usuario");
require("./api/produto")(app, "com param!");

app.post("/usuario", usuarioApi.salvar);
app.get("/usuario", usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(saudacao("José Silva"));

app.use((req, res, next) => {
  console.log("Antes...");
  next(); // irá rodar neste método (e nada mais)
});

app.get("/cliente/relatorio", (req, res) => {
  res.send(
    `Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`
  );
});

app.post("/corpo", (req, res) => {
  let corpo = "";
  req.on("data", (parte) => (corpo += parte)); //captura partes do corpo do cliente e guarda em uma variável (que vai ter vários chunks de cliente) e depois envio de cada parte.
  req.on("end", () => res.send(req.body)); //faz o envio de cada parte do corpo, e “finaliza” a resposta. Nada mais a ser feito, pois estamos tratando todo o corpo do client
});

app.get("/cliente/:id", (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get("/opa", (req, res, next) => {
  console.log("Durante...");
  res.json({
    data: [
      {
        id: 7,
        name: "Ana",
        position: 1,
      },
      {
        id: 34,
        name: "Bia",
        position: 2,
      },
      {
        id: 73,
        name: "Carlos",
        position: 3,
      },
    ],
    count: 3,
    skip: 0,
    limite: 3,
    status: 200,
  });
  // res.json({
  //   name: "IPad 32Gb",
  //   price: 1899,
  //   discount: 0.12,
  // });
  //res.send("<h1>Estou bem!</h1><br><h2>Tipo é HTML</h2>");
  next();
});

app.use((req, res, next) => {
  console.log("Depois...");
  next(); // irá rodar neste método (e nada mais)
});

const Http = app.listen(3000);
Http.on("listening", function () {
  console.clear();
  var port = /[:]+(\d+)/.exec(Http._connectionKey)[1];
  console.log("Backend executando na porta " + port + "....");
});
