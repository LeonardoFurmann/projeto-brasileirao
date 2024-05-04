import tabela2024 from "./tabela.js";
import express from 'express'

const app = express();

app.get('/', (request, response) => {
    response.status(200).send(tabela2024)
});

app.use(express.json());

app.get('/:sigla', (request, response) => {
    const sigla = request.params.sigla.toUpperCase();
    const time = tabela2024.find((time) => time.sigla === sigla);

    if (!time) {
        response.status(404).send('Não existe na série A do Brasileirão um time com a sigla informada!')
        return;
    }
    response.status(200).send(time)
});

app.put('/:sigla', (request, response) => {
    const sigla = request.params.sigla.toUpperCase();
    const time = tabela2024.find((time) => time.sigla === sigla);

    if (!time) {
        response.status(404).send('Não existe na série A do Brasileirão um time com a sigla informada!')
        return;
    }

    const campos = Object.keys(request.body);

    try {
        campos.forEach((campo) => {
            time[campo] = request.body[campo]
        });
        response.status(200).send(request.body)
    } catch {
        response.status(400).send('Naõ foi possível atualizar o time')
    }


});

app.listen(3000, () => console.log('servidor rodando com sucesso'));
