import path from 'path';
import Image from 'next/image';
// utils/loadChessSets.js
// utils/loadChessSets.js
export function loadChessSets(setName) {
  return new Promise((resolve, reject) => {
    const sprite = new window.Image();
    sprite.crossOrigin = 'anonymous';
    sprite.src = `/ChessSets/${setName}.png`;

    sprite.onload = () => {
      const types  = ['queen','king','rook','knight','bishop','pawn'];
      const colors = ['white','black'];
      const cw = sprite.width  / types.length;
      const ch = sprite.height / colors.length;

      const canvas = document.createElement('canvas');
      const ctx    = canvas.getContext('2d');
      canvas.width = cw;
      canvas.height= ch;

      const bitmaps = {};
      colors.forEach((color, row) =>
        types.forEach((type, col) => {
          ctx.clearRect(0, 0, cw, ch);
          ctx.drawImage(sprite, col*cw, row*ch, cw, ch, 0, 0, cw, ch);
          bitmaps[`${color}_${type}`] = ctx.getImageData(0, 0, cw, ch);
        })
      );

      resolve(bitmaps);
    };

    sprite.onerror = reject;
  });
}





export  function divisePiece(piece) {

  /**
* Découpe un ImageData en 4 quadrants.
* @param {ImageData} imageData L'image d'origine.
* @returns {Object} Un objet { topLeft, topRight, bottomLeft, bottomRight }
*/
function splitImageData(imageData) {
  const { width, height } = imageData;
  const w2 = Math.floor(width  / 2);
  const h2 = Math.floor(height / 2);

  // Canvas principal pour contenir l'image d'origine
  const canvas = document.createElement('canvas');
  canvas.width  = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  // On y colle l'ImageData original
  ctx.putImageData(imageData, 0, 0);

  // Fonction qui extrait un sous-ImageData
  function extract(x, y) {
    // Canvas temporaire pour la zone découpée
    const tmp = document.createElement('canvas');
    tmp.width  = w2;
    tmp.height = h2;
    const tctx = tmp.getContext('2d');
    // On dessine la zone (x,y,w2,h2) du canvas principal
    tctx.drawImage(canvas,
      x, y, w2, h2, // source
      0, 0, w2, h2  // destination
    );
    // On récupère l'ImageData de ce canvas temporaire
    return tctx.getImageData(0, 0, w2, h2);
  }

  return {
    topLeft:     extract(   0,    0),
    topRight:    extract(  w2,    0),
    bottomLeft:  extract(   0,   h2),
    bottomRight: extract(  w2,   h2),
  };
}

return splitImageData(piece);  


}