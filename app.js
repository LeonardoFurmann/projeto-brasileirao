import tabela2024 from "./tabela.js";
import express from 'express'

const app = express();

app.get('/', (request, response) =>  {
    response.send(tabela2024)
});

app.get('/:sigla', (request, response) => {
    const sigla = request.params.sigla.toUpperCase();
    const time = tabela2024.find((time) => time.sigla === sigla);
    response.send(time)
});

app.listen(3000, () => console.log('servidor rodando com sucesso'));
