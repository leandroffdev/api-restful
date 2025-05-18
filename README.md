# 📦 API RESTful com Node.js, Express, MongoDB e Mongoose (MVC)

Este projeto é uma API RESTful construída com **Node.js**, **Express.js**, **MongoDB** e **Mongoose**, seguindo o padrão de arquitetura **MVC (Model-View-Controller)**.

## 🚀 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- Arquitetura MVC
- [Nodemon](https://nodemon.io/) (para desenvolvimento)

## 🧱 Estrutura de Pastas

backend/
├── controllers/
├── models/
├── routes/
├── db/
└── app.js
frontend/


- **controllers/**: lógica das requisições e respostas.
- **models/**: definição dos schemas Mongoose.
- **routes/**: definição das rotas da API.
- **db/**: configuração do MongoDB.
- **middlewares/**: funções intermediárias como validação e autenticação. (Não implementada nesse projeto)
- **app.js**: ponto de entrada da aplicação.

## ⚙️ Como Executar o Projeto

1. Clone o repositório:
   > git clone https://github.com/leandroffdev/api-restful.git

2. Instale as dependências:

>  npm install
3. Crie um arquivo .env com as variáveis de ambiente:

> PORT=3000
> MONGODB_URI=mongodb://localhost:27017/nome-do-banco
4. Inicie o servidor:

> npm start