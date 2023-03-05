const Game = require('../src/models/Game');

// Exibir todos os jogos
exports.index = async (req, res) => {
  try {
    const games = await Game.find();
    res.render('game/index', { games });
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
};

// Exibir página para criação de jogo
exports.create = (req, res) => {
  res.render('game/create');
};

// Criar um novo jogo
exports.store = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const game = await Game.create({ name, description, price });
    res.redirect(`/game/${game._id}`);
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
};

// Exibir detalhes de um jogo
exports.show = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.render('game/show', { game });
  } catch (err) {
    console.error(err);
    res.render('error/404');
  }
};

// Exibir página para atualização de jogo
exports.edit = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.render('game/update', { game });
  } catch (err) {
    console.error(err);
    res.render('error/404');
  }
};

// Atualizar informações de um jogo
exports.update = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    await Game.findByIdAndUpdate(req.params.id, { name, description, price });
    res.redirect(`/game/${req.params.id}`);
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
};

// Deletar um jogo
exports.destroy = async (req, res) => {
  try {
    await Game.findByIdAndRemove(req.params.id);
    res.redirect('/game');
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
};
