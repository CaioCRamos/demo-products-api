# Setup do projeto

## Iniciação de um projeto NodeJS
`npm init` ou `npm init -y`

## Instalar dependências
`npm install express --save`

**Express**: framework **HTTP** utilizado para criação e gerenciamento dos endpoints da nossa API.

## Instalar dependências de desenvolvimento

`npm install nodemon --save-dev`

**Nodemon**: ferramenta que interrompe e executa novamente a API a cada modificação salva, garantindo que esteja sempre atualizada, similar ao liveserver que usamos para frontend.

## Configurar package.json
```json
"scripts": {
    "start-dev": "nodemon index.js",
    "start": "node index.js"
},
```

Para executar via `Nodemon` basta `npm run start-dev`.

Para executar via `Node` diretamente basta `npm run start` ou simplemente `node index.js`.