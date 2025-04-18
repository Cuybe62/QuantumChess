
import {loadChessSets} from '../api/BitMap'
import { ListPieces } from './../Models/Piece'

// Spécification
export const CaseSize = 80;
export const BoardSize = 8;
export let ChessSets = 1;
export let bitmaps = null;
export let LstPieces = null;

export default function Global() {
    
    bitmaps = loadChessSets(ChessSets);
    LstPieces = new ListPieces();


}