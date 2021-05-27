import "./Board.css";
import Knight from "./Knight.jsx";
import {useState} from 'react';

const Board = () => {
  let verticalAxis= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let horizantalAxis = ["a", "b", "c", "g", "h", "i", "j", "k", "l", "m"];
  let board = [];
  const [knight,setKnight] = useState("");
  for(let i = 0; i < horizantalAxis.length; i++) {
    for(let j = 0; j < verticalAxis.length; j++) {
      if(i % 2 === 0 &&
        j % 2 !== 0) {
          let square = [horizantalAxis[i] + verticalAxis[j], "black"];
          board.push(square);
        } else if(i % 2 !== 0 &&
          j % 2 === 0) {
            let square = [horizantalAxis[i] + verticalAxis[j], "black"];
            board.push(square);
        } else {
          let square = [horizantalAxis[i] + verticalAxis[j], "white"];
          board.push(square);
        }
    }
  }
  const placeKnight = (square) => {
    setKnight(square);
  }

  return (
    <div className="board">
      {board.map((elm, index) =>
        <div className="square" style={{backgroundColor: `${elm[1]}`}} onClick={() => placeKnight(elm[0])} key={index}>{(knight === elm[0])? <Knight />: elm[0]}</div>
      )}
    </div>
  )
}


export default Board;