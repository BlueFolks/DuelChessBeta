const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Game = sequelize.define('Game', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  winner: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  player1: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  player2: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Game;