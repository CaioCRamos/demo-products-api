const express = require("express");

const produtosRouter = require("./src/produtos.router");
const usuariosRouter = require("./src/usuarios.router");

const app = express();
app.use(express.json());

app.use("/api/produtos", produtosRouter);
app.use("/api/login", usuariosRouter);

app.listen(3000);