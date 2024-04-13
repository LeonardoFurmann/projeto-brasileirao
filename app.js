import tabela2024 from "./tabela.js";
import express from 'express'

const app = express();

app.get('/', (request, response) =>  {
    response.send(tabela2024)
})

app.listen(3000, () => console.log('servidor rodando com sucesso'));
