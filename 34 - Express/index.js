const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Antes...");
  next(); // irá rodar neste método (e nada mais)
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
