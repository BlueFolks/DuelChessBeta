const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const sequelize = require('./models').sequelize;
const { User } = require('./models');
const { Player } = require('./src/models');
const { Board } = require('./src/board');
const { Game } = require('./src/game');
const { Socket } = require('./src/socket');


// Configuração da sessão
app.use(session({
  secret: 'minhaChaveSecreta',
  resave: false,
  saveUninitialized: true
}));

// Configuração do body-parser para aceitar JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inicialização do banco de dados
sequelize.sync();

// Configuração das rotas
app.use('/auth', require('./controllers/auth'));
app.use('/game', require('./controllers/game'));

// Página inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao DuelChess');
});

// Inicia o servidor web
app.listen(3000, () => {
  console.log('Servidor web iniciado na porta 3000');
});

const game = new Game(/* argumentos */);
game.start();
