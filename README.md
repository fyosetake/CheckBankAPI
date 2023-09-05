# CheckBankAPI

Bem-vindo ao CheckBankAPI, um sistema simples de gerenciamento de contas bancárias construído em Node.js. Este projeto permite o gerenciamento de contas bancárias, consultas de saldo, atualização de saldo, consulta de transações e exclusão de transações.

### Pré-requisitos

- Node.js instalado no seu sistema:

```sudo apt install nodejs```

### Instalação

1. Clone este repositório para o seu sistema local.

2. Navegue até o diretório raiz do projeto.

3. Instale as dependências do projeto usando npm: 

```npm install```

### Iniciando o Servidor

Para iniciar o servidor da API, execute o seguinte comando:

```node app.js```

Isso iniciará o servidor na porta 3000.

### Rotas da API
A API possui as seguintes rotas:

1. Consulta de Saldo
    Rota: /consultaSaldo
    Método: GET
    Exemplo de Uso: 

    ```curl http://localhost:3000/consultaSaldo```

2. Atualização de Saldo
    Rota: /atualizaSaldo
    Método: POST
    Exemplo de Uso: 
    
    ```curl -X POST -H "Content-Type: application/json" -d '{"descricao":"Crédito","valor":100}' http://localhost:3000/atualizaSaldo```

3. Atualização do Nome do Titular
    Rota: /atualizaTitular
    Método: PUT
    Exemplo de Uso: 
    
    ```curl -X PUT -H "Content-Type: application/json" -d '{"novoNome":"Novo Titular"}' http://localhost:3000/atualizaTitular```

4. Exclusão de Transação
    Rota: /excluirTransacao/:id
    Método: DELETE
    Exemplo de Uso: 
    
    ```curl -X DELETE http://localhost:3000/excluirTransacao/1```

### Contribuições

Se você deseja contribuir para este projeto, sinta-se à vontade para criar um fork deste repositório e enviar uma solicitação de pull com suas alterações.

### Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.
