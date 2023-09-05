const express = require('express');
const router = express.Router();
const fs = require('fs');

const contaJson = fs.readFileSync('./data/conta.json', 'utf-8');
const saldo = JSON.parse(contaJson);

router.get('/', (req, res) => {
    res.status(200).json({ status: "success", saldo });
});

module.exports = router;