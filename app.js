const express = require('express');
const app = express();
const port = 3000;

let saldo = {
  nome: "Fernando Yosetake",
  numeroConta: "90.890-900",
  saldoAtual: 5000.00,
  historicoTransacoes: [
    {
      id: 1,
      data: "2023-08-26",
      descricao: "Crédito",
      valor: 1000.00
    },
    {
      id: 2,
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
  const { descricao, valor } = req.body;

  const novaTransacao = {
    id: saldo.historicoTransacoes.length + 1,
    data: new Date().toISOString(),
    descricao: descricao,
    valor: valor
  };

  saldo.historicoTransacoes.push(novaTransacao);
  saldo.saldoAtual += valor;

  res.json({ message: "Saldo atualizado com sucesso.", novaTransacao: novaTransacao, saldo: saldo });
});


app.put('/atualizaNomeTitular', (req, res) => {
  const { novoNome } = req.body;

  saldo.nome = novoNome;

  res.json({ message: "Nome do titular atualizado com sucesso.", novoNome: novoNome });
});

app.delete('/excluirTransacao/:id', (req, res) => {
  const idTransacao = parseInt(req.params.id);

  const transacaoExcluida = saldo.historicoTransacoes.find(transacao => transacao.id === idTransacao);

  if (!transacaoExcluida) {
    return res.json({ message: 'Transação não encontrada.' });
  }

  saldo.saldoAtual -= transacaoExcluida.valor;
  saldo.historicoTransacoes = saldo.historicoTransacoes.filter(transacao => transacao.id !== idTransacao);

  res.json({ message: 'Transação excluída com sucesso.' });
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
