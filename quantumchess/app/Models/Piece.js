import { bitmaps } from "../ChessBooard/Global";
import { v4 as uuidv4 } from 'uuid';

export class ListPieces {
  constructor(Pieces) {
    this.Pieces = Pieces ?? this.initPieces();
  }

  initPieces() {
    let ps = [];
    // pawns
    for (let i = 0; i < 8; i++) {
      ps.push(
        new Pawns(
          "pawn",
          "white",
          { x: i, y: 1 },
          100,
          bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_pawn';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
        )
      );
      ps.push(
        new Pawns(
          "pawn",
          "black",
          { x: i, y: 6 },
          100,
          bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_pawn';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
        )
      );
    }

    // rooks
    ps.push(
      new Rooks(
        "rook",
        "white",
        { x: 0, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_rook';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Rooks(
        "rook",
        "black",
        { x: 7, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_rook';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );


    ps.push(
      new Rooks(
        "rook",
        "white",
        { x: 7, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_rook';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Rooks(
        "rook",
        "black",
        { x: 0, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_rook';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );

    // knights
    ps.push(
      new Knights(
        "knight",
        "white",
        { x: 1, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_knight';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Knights(
        "knight",
        "black",
        { x: 6, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_knight';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );

    // knights
    ps.push(
      new Knights(
        "knight",
        "white",
        { x: 6, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_knight';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Knights(
        "knight",
        "black",
        { x: 1, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_knight';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );


    // bishops
    ps.push(
      new Bishops(
        "bishop",
        "white",
        { x: 2, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_bishop';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Bishops(
        "bishop",
        "black",
        { x: 5, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_bishop';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );

    // bishops
    ps.push(
      new Bishops(
        "bishop",
        "white",
        { x: 5, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_bishop';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Bishops(
        "bishop",
        "black",
        { x: 2, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_bishop';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );

    // queens
    ps.push(
      new Queens(
        "queen",
        "white",
        { x: 3, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_queen';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Queens(
        "queen",
        "black",
        { x: 4, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_queen';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );

    // kings
    ps.push(
      new Kings(
        "king",
        "white",
        { x: 4, y: 0 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'white_king';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );
    ps.push(
      new Kings(
        "king",
        "black",
        { x: 3, y: 7 },
        100,
        bitmaps.then(pieceBitmaps => {
            // Ici pieceBitmaps est l’objet résolu par la promise
            const key = 'black_king';     // ex. "white_queen"
            const bitmap = pieceBitmaps[key];
      
            if (!bitmap) {
              console.error(`Pièce introuvable : ${key}`);
              return;
            }
      
            return bitmap;
          })
      )
    );

    return ps;
  }
}

export class Piece {
  constructor(type, color, position, Percentage, bitmap) {
    this.type = type;
    this.color = color;
    this.position = position;
    this.Percentage = Percentage;
    this.bitmap = bitmap;
    this.id = uuidv4();;
  }
}

export class sousPieces extends Piece {
  constructor() {
    this.idParent = this.id;
    this.sousPiecesid = uuidv4();
  }
}

export class Pawns extends Piece {

}

export class Rooks extends Piece {

}

export class Knights extends Piece {}

export class Bishops extends Piece {}

export class Queens extends Piece {}

export class Kings extends Piece {}
