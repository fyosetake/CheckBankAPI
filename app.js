const express = require('express');
const app = express();
const port = 3000;

let saldo = {
  nome: "Fernando Yosetake",
  numeroConta: "90.890-900",
  saldoAtual: 5000.00,
  historicoTransacoes: [
    {
      data: "2023-08-26",
      descricao: "Crédito",
      valor: 1000.00
    },
    {
      data: "2023-08-27",
      descricao: "Débito",
      valor: -300.00
    },
  ]
};

app.use(express.json());

app.get('/consultaSaldo', (req, res) => {
  res.json(saldo);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
