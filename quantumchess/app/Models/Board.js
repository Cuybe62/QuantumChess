export class Board {
  constructor(board) {
    this.Board = board ?? this.initBoard;
  }

  initBoard() {
    let Board = [];

    for (let i = 0; i < 8; i++) {
      Board[i] = [];
      for (let j = 0; j < 8; j++) {
        Board[i][j] = null;
      }
    }
    return Board;
  }
}
