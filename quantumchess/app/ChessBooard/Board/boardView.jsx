'use client'

import { useState, useEffect, useRef } from "react"
import { getPieceAt,DivisePiece} from "../../api/actions"
import { LstPieces } from "../Global"

// Petit composant dédié au dessin d’une image (ImageData, ImageBitmap ou HTMLImageElement)
function PieceCanvas({ index, image }) {
  const canvasRef = useRef(null)



  const dblclick = (element) => {
    const id = element.target.id;
    console.log(id);

    // TODO : Permet de choisir une pièce
    if (!id) return;
    
    divisePiece(LstPieces.Pieces[id]);
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !image) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // On fixe les dimensions du canvas à celles de l’image
    canvas.width = image.width
    canvas.height = image.height

    // Selon le type, on utilise putImageData ou drawImage
    if (image instanceof ImageData) {
      ctx.putImageData(image, 0, 0)
    } else {
      ctx.drawImage(image, 0, 0)
    }
  }, []) // <- vide : on dessine qu’une fois, au montage

  const x = index % 8
  const y = Math.floor(index / 8)




  return (
    <div id={index} onDoubleClick={dblclick}>
    <canvas  
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }} id={index}
      />
      </div>
  )
}

export default function BoardView() {
  // boardData[row][col] vaudra soit null, soit { …les props de la pièce…, image }
  const [boardData, setBoardData] = useState(
    () => Array.from({ length: 8 }).map(() => Array(8).fill(null))
  )


  useEffect(() => {
    let cancelled = false

    async function loadBoard() {
      const rows = await Promise.all(
        Array.from({ length: 8 }).map(async (_, row) => {
          return Promise.all(
            Array.from({ length: 8 }).map(async (_, col) => {
              const piece = await getPieceAt(col, 7 - row)
              if (piece?.bitmap) {
                try {
                  const img = await piece.bitmap
                  return { ...piece, image: img }
                } catch (err) {
                  console.error("Erreur bitmap:", err)
                  return piece
                }
              }
              return piece
            })
          )
        })
      )

      if (!cancelled) {
        setBoardData(rows)
      }
    }

    loadBoard()
    return () => {
      cancelled = true
    }
  }, []) // <- vide : on charge le board qu’une seule fois

  return (
    <div
      className="grid grid-cols-8 grid-rows-8"
      style={{ width: 480, height: 480 }}
    >
      {boardData.map((rowArr, row) =>
        rowArr.map((cell, col) => {
          const isLight = (row + col) % 2 === 0
          return (
            <div
              key={`${row}-${col}`}
              className="w-16 h-16"
              style={{
                backgroundColor: isLight ? "#f0d9b5" : "#b58863",
                position: "relative",
              }}
            >
              {cell?.image && <PieceCanvas index={cell.id} image={cell.image} />}
            </div>
          )
        })
      )}
    </div>
  )
}
