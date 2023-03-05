class Board {
    constructor() {
      this.tiles = this.createBoard();
    }
  
    createBoard() {
      const tiles = [];
      for (let i = 0; i < 8; i++) {
        tiles[i] = [];
        for (let j = 0; j < 8; j++) {
          tiles[i][j] = null;
        }
      }
      return tiles;
    }
  }
  