const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const consultaSaldoRouter = require('./routes/consultaSaldo');
const atualizaSaldoRouter = require('./routes/atualizaSaldo');
const atualizaTitularRouter = require('./routes/atualizaTitular');
const excluirTransacaoRouter = require('./routes/excluirTransacao');

app.use(express.json());

app.use('/consultaSaldo', consultaSaldoRouter);
app.use('/atualizaSaldo', atualizaSaldoRouter);
app.use('/atualizaTitular', atualizaTitularRouter);
app.use('/excluirTransacao', excluirTransacaoRouter);

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
