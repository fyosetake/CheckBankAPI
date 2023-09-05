const express = require('express');
const router = express.Router();
const fs = require('fs');

const contaJson = fs.readFileSync('./data/conta.json', 'utf-8');
const saldo = JSON.parse(contaJson);

router.post('/', (req, res) => {
    const { descricao, valor } = req.body;

    const novaTransacao = {
      id: saldo.historicoTransacoes.length + 1,
      data: new Date().toISOString(),
      descricao: descricao,
      valor: valor
    };
  
    saldo.historicoTransacoes.push(novaTransacao);
    saldo.saldoAtual += valor;

    console.log(saldo.saldoAtual);

    fs.writeFileSync('./data/conta.json', JSON.stringify(saldo, null, 2), 'utf-8');
  
    res.status(201).json({ status: "success", message: "Saldo atualizado com sucesso.", novaTransacao: novaTransacao, saldo: saldo });
});

module.exports = router;