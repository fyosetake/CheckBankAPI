const express = require('express');
const app = express();
const port = 3000;

let teste = {
  teste: "teste",
};

app.use(express.json());

app.get('/teste', (req, res) => {
  res.json(teste);
});

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
