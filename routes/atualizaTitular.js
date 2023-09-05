const express = require('express');
const router = express.Router();
const fs = require('fs');

const contaJson = fs.readFileSync('./data/conta.json', 'utf-8');
const saldo = JSON.parse(contaJson);

router.post('/', (req, res) => {
    const { novoNome } = req.body;
  
    saldo.nome = novoNome;

    fs.writeFileSync('./data/conta.json', JSON.stringify(saldo, null, 2), 'utf-8');
  
    res.status(200).json({ status: "success", message: "Nome do titular atualizado com sucesso.", novoNome: novoNome });
  });

  module.exports = router;