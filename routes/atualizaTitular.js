const express = require('express');
const router = express.Router();
const fs = require('fs');

const contaJson = fs.readFileSync('./data/conta.json', 'utf-8');
const saldo = JSON.parse(contaJson);

router.put('/', (req, res) => {
    const { novoNome } = req.body;
  
    saldo.nome = novoNome;

    try {

      fs.writeFileSync('./data/conta.json', JSON.stringify(saldo, null, 2), 'utf-8');

      res.status(200).json({ status: "success", message: "Nome do titular atualizado com sucesso.", novoNome: novoNome });

    } catch (error) {
      throw new Error("Não foi possível atualizar o nome do Titular", error.message);
    }
  });

  module.exports = router;