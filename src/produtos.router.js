const express = require("express");
const produtos = require("../data/produtos.json");

const router = express.Router();

router.get("/", function (request, response) {
    response.status(200).json({
        mensagem: "Aqui vc recebe a sua listagem com todos os produtos",
        produtos: produtos
    });
});

router.get("/:id", function (request, response) {
    const { id } = request.params;

    const produto = produtos.find((produto) => produto.id === parseInt(id));

    if (!produto) {
        response.status(404).json({
            mensagem: `O produto com ID ${id} não foi encontrado`
        });
    } else {
        response.status(200).json({
            mensagem: `Aqui vc recebe apenas o produto com o ID ${id}`,
            produto: produto
        });
    }
});

router.post("/", (request, response) => {
    const { nome, preco } = request.body;

    const id = produtos.length + 1;

    produtos.push({
        id: id,
        nome: nome,
        preco: preco
    });

    response.status(201).json({
        mensagem: "Produto cadastrado com sucesso"
    });
});

module.exports = router;