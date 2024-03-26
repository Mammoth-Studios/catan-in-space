import {GameHex} from "./game-hex.component";
import React from "react";

type Node = {
  type: NodeType;
}

type NodeType = "water" | "space" | "concrete" | "fuel" | "food" | "player" | "metal" | "empty";
const landTypes: NodeType[] = ["water", "concrete", "fuel", "food", "metal"];

type Grid = Node[][];

interface BoardProps {
  savedBoard?: string;
}
export const Board: React.FC<BoardProps> = ({savedBoard}) => {
  //If Saved Board is sent in load that, if not use placeholder board
  const grid = (savedBoard)? JSON.parse(savedBoard) : placeholderBoard;

  function createBoard(size: number, hexSize: number) {
    const matrix = [];
    for (let x = 0; x <= size; x++) {
      const row = [];
      
      for (let y = 0; y <= size; y++) {
        if(grid[x][y].type != "empty" && grid[x][y].type != "space" && grid[x][y].type != "player") {
          const type = landTypes[Math.floor(Math.random() * landTypes.length)];
          row.push(<GameHex key={`${x}-${y}`} size={hexSize} xPos={x} yPos={y} type={type}/>);
        } else {
          row.push(<GameHex key={`${x}-${y}`} size={hexSize} xPos={x} yPos={y} type={grid[x][y].type}/>);
        }
      }
      matrix.push(row);
    }

    return matrix;
  }
  const boardStyle: React.CSSProperties = {
    width: window.innerWidth,
    height: 1000,
    position: "absolute",
    inset: 0,
  };

  return (
    <svg style={boardStyle}>
      {createBoard(10, 55)}
    </svg>
  );
};

const placeholderBoard: Grid = [
  [
    {type: "empty"}, // (0,0)
    {type: "space"}, // (0,1)
    {type: "space"}, // (0,2)
    {type: "space"}, // (0,3)
    {type: "empty"}, // (0,4)
    {type: "empty"}, // (0,5)
    {type: "empty"}, // (0,6)
    {type: "empty"}, // (0,7)
    {type: "empty"}, // (0,8)
    {type: "empty"}, // (0,9)
    {type: "empty"}, // (0,10)
  ],
  [
    {type: "space"}, // (1,0)
    {type: "water"}, // (1,1)
    {type: "food"}, // (1,2)
    {type: "food"}, // (1,3)
    {type: "space"}, // (1,4)
    {type: "space"}, // (1,5)
    {type: "empty"}, // (1,6)
    {type: "empty"}, // (1,7)
    {type: "empty"}, // (1,8)
    {type: "empty"}, // (1,9)
    {type: "empty"}, // (1,10)
  ], [
    {type: "space"}, // (2,0)
    {type: "concrete"}, // (2,1)
    {type: "fuel"}, // (2,2)
    {type: "concrete"}, // (2,3)
    {type: "water"}, // (2,4)
    {type: "concrete"}, // (2,5)
    {type: "space"}, // (2,6)
    {type: "empty"}, // (2,7)
    {type: "empty"}, // (2,8)
    {type: "empty"}, // (2,9)
    {type: "empty"}, // (2,10)
  ],
  [
    {type: "space"}, // (3,0)
    {type: "fuel"}, // (3,1)
    {type: "metal"}, // (3,2)
    {type: "player"}, // (3,3)
    {type: "metal"}, // (3,4)
    {type: "concrete"}, // (3,5)
    {type: "space"}, // (3,6)
    {type: "space"}, // (3,7)
    {type: "empty"}, // (3,8)
    {type: "empty"}, // (3,9)
    {type: "empty"}, // (3,10)
  ],
  [
    {type: "space"}, // (4,0)
    {type: "water"}, // (4,1)
    {type: "food"}, // (4,2)
    {type: "metal"}, // (4,3)
    {type: "concrete"}, // (4,4)
    {type: "food"}, // (4,5)
    {type: "water"}, // (4,6)
    {type: "water"}, // (4,7)
    {type: "space"}, // (4,8)
    {type: "empty"}, // (4,9)
    {type: "empty"}, // (4,10)
  ],
  [
    {type: "space"}, // (5,0)
    {type: "fuel"}, // (5,1)
    {type: "food"}, // (5,2)
    {type: "metal"}, // (5,3)
    {type: "metal"}, // (5,4)
    {type: "fuel"}, // (5,5)
    {type: "fuel"}, // (5,6)
    {type: "metal"}, // (5,7)
    {type: "space"}, // (5,8)
    {type: "empty"}, // (5,9)
    {type: "empty"}, // (5,10)
  ],
  [
    {type: "space"}, // (6,0)
    {type: "metal"}, // (6,1)
    {type: "concrete"}, // (6,2)
    {type: "water"}, // (6,3)
    {type: "fuel"}, // (6,4)
    {type: "metal"}, // (6,5)
    {type: "concrete"}, // (6,6)
    {type: "food"}, // (6,7)
    {type: "space"}, // (6,8)
    {type: "empty"}, // (6,9)
    {type: "empty"}, // (6,10)
  ],
  [
    {type: "space"}, // (7,0)
    {type: "water"}, // (7,1)
    {type: "player"}, // (7,2)
    {type: "concrete"}, // (7,3)
    {type: "food"}, // (7,4)
    {type: "player"}, // (7,5)
    {type: "concrete"}, // (7,6)
    {type: "space"}, // (7,7)
    {type: "space"}, // (7,8)
    {type: "empty"}, // (7,9)
    {type: "empty"}, // (7,10)
  ],
  [
    {type: "space"}, // (8,0)
    {type: "food"}, // (8,1)
    {type: "fuel"}, // (8,2)
    {type: "metal"}, // (8,3)
    {type: "concrete"}, // (8,4)
    {type: "fuel"}, // (8,5)
    {type: "water"}, // (8,6)
    {type: "space"}, // (8,7)
    {type: "empty"}, // (8,8)
    {type: "empty"}, // (8,9)
    {type: "empty"}, // (8,10)
  ],
  [
    {type: "space"}, // (9,0)
    {type: "space"}, // (9,1)
    {type: "food"}, // (9,2)
    {type: "water"}, // (9,3)
    {type: "metal"}, // (9,4)
    {type: "food"}, // (9,5)
    {type: "concrete"}, // (9,6)
    {type: "space"}, // (9,7)
    {type: "empty"}, // (9,8)
    {type: "empty"}, // (9,9)
    {type: "empty"}, // (9,10)
  ],
  [
    {type: "empty"}, // (10,0)
    {type: "empty"}, // (10,1)
    {type: "space"}, // (10,2)
    {type: "space"}, // (10,3)
    {type: "space"}, // (10,4)
    {type: "space"}, // (10,5)
    {type: "space"}, // (10,6)
    {type: "empty"}, // (10,7)
    {type: "empty"}, // (10,8)
    {type: "empty"}, // (10,9)
    {type: "empty"}, // (10,10)
  ],
];
