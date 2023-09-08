const express = require('express');
const router = express.Router();
const fs = require('fs');

const contaJson = fs.readFileSync('./data/conta.json', 'utf-8');
const saldo = JSON.parse(contaJson);

router.delete('/:id', (req, res) => {
    const idTransacao = parseInt(req.params.id);

    try{

      const transacaoExcluida = saldo.historicoTransacoes.find(transacao => transacao.id === idTransacao);

      if (!transacaoExcluida) {
        return res.status(404).json({ status: "error", message: 'Transação não encontrada.' });
      }

      saldo.saldoAtual -= transacaoExcluida.valor;
      saldo.historicoTransacoes = saldo.historicoTransacoes.filter(transacao => transacao.id !== idTransacao);

      fs.writeFileSync('./data/conta.json', JSON.stringify(saldo, null, 2), 'utf-8');

      res.status(200).json({ status: "success", message: 'Transação excluída com sucesso.' });

    } catch (error) {
      throw new Error("Não possível excluir a transação", error.message);
    }
  });

  module.exports = router;