import { LstPieces } from "../ChessBooard/Global";
import { sousPieces } from "../Models/Piece";
import {divisePiece} from '../api/BitMap';

//Todo : récupéré un pièce selon sa position
export  function getPieceAt(x, y) {

  return  LstPieces.Pieces.find(p => p.position.x == x && p.position.y == y);
    
}
export default function DivisePiece(piece) {
  // 1. On divise le bitmap en 4 parties
  const parts = divisePiece(piece.bitmap);

  // 2. On crée les sous‑pièces
  const pece1 = new sousPieces(piece.type, piece.color, piece.position, 25, parts.topLeft);
  const pece2 = new sousPieces(piece.type, piece.color, piece.position, 25, parts.topRight);
  const pece3 = new sousPieces(piece.type, piece.color, piece.position, 25, parts.bottomLeft);
  const pece4 = new sousPieces(piece.type, piece.color, piece.position, 25, parts.bottomRight);

  // 3. On ajoute les sous‑pièces
  LstPieces.Pieces.push(pece1, pece2, pece3, pece4);

  // 4. On localise l'index de la pièce à supprimer
  const idx = LstPieces.Pieces.indexOf(piece);
  if (idx > -1) {
    // 5. On la supprime du tableau
    LstPieces.Pieces.splice(idx, 1);
  }
}


//Todo : permet de récupéré la position d'une pièce
export  function GetPosition() {
    
}

// TODO : permet de faire bouger les pions selon leurs movememnt possible 
export  function Move() {
    
}


// TODO : Permet de manger les pions adverses
export  function Eat() {
   
}

//TODO Rock : Permet de faire un grand rock ou un petit rock
export  function Rock() {
    
}