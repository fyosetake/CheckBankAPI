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

app.post('/atualizaSaldo', (req, res) => {
  const { descricao, valor } = req.body

  saldo.historicoTransacoes.push({
    data: new Date().toISOString(),
    descricao: descricao,
    valor: valor
  });

  saldo.saldoAtual += valor;

  res.json({ message: "Saldo atualizado com sucesso.", saldo: saldo });
});

app.put('/atualizaNomeTitular', (req, res) => {
  const { novoNome } = req.body;

  saldo.nome = novoNome;

  res.json({ message: "Nome do titular atualizado com sucesso.", novoNome: novoNome });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
