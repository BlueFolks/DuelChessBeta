class Player {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
  }
  
  class Game {
    constructor(player1, player2) {
      this.board = new Board();
      this.player1 = player1;
      this.player2 = player2;
      this.currentPlayer = player1;
    }
  }
  