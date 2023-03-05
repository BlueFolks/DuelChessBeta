// Player class
class Player {
    constructor(id, name, color) {
      this.id = id;
      this.name = name;
      this.color = color;
      this.pieces = [];
    }
  }
  
  // Game class
  class Game {
    constructor(id, players, board) {
      this.id = id;
      this.players = players;
      this.board = board;
      this.turn = players[0];
    }
  
    switchTurn() {
      const index = this.players.indexOf(this.turn);
      this.turn = this.players[(index + 1) % 2];
    }
  
    isGameOver() {
      // Implement game over logic here
    }
  
    toJSON() {
      return {
        id: this.id,
        players: this.players.map(player => ({
          id: player.id,
          name: player.name,
          color: player.color
        })),
        board: this.board.toJSON(),
        turn: this.turn.id
      };
    }
  }
  
  // Piece class
  class Piece {
    constructor(id, type, position, color) {
      this.id = id;
      this.type = type;
      this.position = position;
      this.color = color;
    }
  }
  