const app = require("./src/app");

const door = 3030;

app.listen(door, () => {
    console.log(`Servidor rodando com sucesso na porta ${door}!`);
});