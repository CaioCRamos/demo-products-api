const express = require("express");
const usuarios = require("../data/usuarios.json");

const router = express.Router();

router.post("/", (request, response) => {
    const { login, senha } = request.body;

    const usuario = usuarios.find((usuario) => usuario.login === login && usuario.senha == senha);

    if (usuario) {
        response.status(200).json({
            mensagem: "Usuário logado"
        });
    } else {
        response.status(404).json({
            mensagem: "Usuário ou senha incorretos"
        });
    }
});

module.exports = router;