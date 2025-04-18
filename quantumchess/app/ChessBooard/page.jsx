'use client'

// components
import BoardView from "./Board/boardView";


// ressource
import Global from "./Global";
export default function ChessBooard() {
    
    Global();

    return (
        <>
            <div>
                <BoardView />
            </div>
        </>
    );
}