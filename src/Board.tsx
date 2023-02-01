import './App.css' ;
import React,{useState, useRef} from 'react' ;
import { isDisabled } from '@testing-library/user-event/dist/utils';

// import {combination} from 'js-combinatorics'

const winCombos = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]



// function handler(event){
// check if first chance using useRef
// call setBoard to update board using 0 if first chance or X if odd value of useRef
// call switch player function
// check if winning combo/255a118f56f5346b97e56325a1217a16.svg
// }

function Board(){

    const [board,setBoard] = useState([
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"],
      ]);
    const [currentPlayer,setCurrentPlayer] = useState(1)
    // const chance = useRef(1)

    // immutable react library : use list
    // use immutable collection - immutable js
     const evalCurrentPlayer = (row: number,column: number) => {
        // console.log(chance.current)
        // chance.current = chance.current+1
        setCurrentPlayer(3 - currentPlayer)
        let newBoard = board
        newBoard[row][column] = currentPlayer === 1 ? "O" : "X"
        setBoard(newBoard)

        // if ( currentPlayer % 2 != 0 ){
        //     setCurrentPlayer(1)
        //     let newBoard = board
        //     newBoard[row][column]="X"
        //     setBoard(newBoard)
        //    } else {
        //     setCurrentPlayer(2)
        //     let newBoard = board
        //     newBoard[row][column]="O"
        //     setBoard(newBoard)
        // }
       }

    // const updateBoardState = (row:number,column:number) => {
    //       if ( currentPlayer === 1) {
    //         console.log("Check if winner is O")
    //         // setBoard([row][column])
    //       } else {
    //         console.log("update with X")
    //       }
    //  }

    const checkWinner = () => {
       console.log("Check winner for " + {currentPlayer})
        console.log(board)
       console.log(board.flat())
        const r = board.flat()
       const currentPlayerSymbol = currentPlayer === 1 ? "O" : "X";
       const hasWon = winCombos.some((winCombo) => winCombo.every((position) => r[position - 1] === currentPlayerSymbol));

    }

    // const disableButton = (row: number,column: number) => {

    // }

    const handler = (row: number,column: number) => {

        evalCurrentPlayer(row, column);
        // updateBoardState(row,column);

        checkWinner()
        // disableButton(row,column)
        console.log(board)

    }



    return(
        <>
          <p> Player {currentPlayer} - Go ! </p>
          <div className="container">
          {board.flatMap((row, rowNo) => row.map((cell, colNo) => <button key={3 * rowNo + colNo} onClick={() => handler(rowNo, colNo)}>{ cell }</button>))}
          {/* <button onClick={()=> handler(0,0)}>{ board[0][0] }</button>
          <button onClick={()=> handler(0,1)}>{ board[0][1] }</button>
          <button onClick={()=> handler(0,2)}>{ board[0][2] }</button>
          <button onClick={()=> handler(1,0)}>{ board[1][0] }</button>
          <button onClick={()=> handler(1,1)}>{ board[1][1] }</button>
          <button onClick={()=> handler(1,2)}>{ board[1][2] }</button>
          <button onClick={()=> handler(2,0)}>{ board[2][0] }</button>
          <button onClick={()=> handler(2,1)}>{ board[2][1] }</button>
          <button onClick={()=> handler(2,2)}>{ board[2][2] }</button> */}
          </div>
        </>
    )
}




export default Board;