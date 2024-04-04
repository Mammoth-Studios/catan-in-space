import {GameHex} from "./game-hex.component";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Grid, LandType, NodeType, SpaceType} from "../game-board.constant";

/**
 * Constants defining the size of the game grid and hexagons.
 *  NOTE : These fit the current screen size but will need to be changes when we make the component responsive
 */
const size = 10; // The size of the grid (number of rows/columns).
const hexSize = 55; // The size of each hexagon in pixels.

/**
 * The Board component renders the game board.
 * It takes a savedBoard prop, which is a JSON string representing the initial state of the board.
 * If no saved board is provided, it falls back to a placeholder board.
 */
interface BoardProps {
  savedBoard?: string; // Optional prop for the initial state of the board
}

/**
 * The Board component is a functional component that renders the game board.
 * It handles board creation, updates, and keyboard events for regenerating the board.
 */
export const Board: React.FC<BoardProps> = ({savedBoard}) => {
  // State to manage the grid representing the game board
  const [grid, setGrid] = useState<Grid>(savedBoard ? JSON.parse(savedBoard) : placeholderBoard);

  //[!!!DEBUG!!!] Handle Regenerating the board when R is pressed ===========
  useEffect(()=>{
    const handleKeyDown = (event: KeyboardEvent) => {
      if(event.key === "r" || event.key === "R") {
        const updatedGrid = updateGridWithRandomLandTypes(grid);
        setGrid(updatedGrid);
        console.log("Generate New Board ======");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return() => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [grid]);
  //[!!!DEBUG!!!]=============================================================

  // Callback function to create the board
  const createBoard = useCallback((grid: Grid) => {
    const matrix = [];
    for (let x = 0; x <= size; x++) {
      const row = [];

      for (let y = 0; y <= size; y++) {
        row.push(<GameHex key={`${x}-${y}`} size={hexSize} xPos={x} yPos={y} gridItem={grid[x][y]}/>);
      }
      matrix.push(row);
    }
    console.log("Rerender Board");
    return matrix;
  }, []);

  // Memoize the board creation
  const memoizedBoard = useMemo(() => createBoard(grid), [createBoard, grid])

  // Style for the board SVG
  const boardStyle: React.CSSProperties = {
    width: window.innerWidth,
    height: 1000,
    position: "absolute",
    inset: 0,
  };

  return (
    <svg style={boardStyle}>
      {memoizedBoard}
    </svg>
  );
};

/**
 * Updates the provided grid by randomly assigning land types to nodes of type LAND.
 * @param grid The grid to update with random land types.
 * @returns The updated grid with random land types assigned.
 */
function updateGridWithRandomLandTypes(grid: Grid): Grid {
  const updatedGrid = [...grid];
  for (let x = 0; x <= size; x++) {
    for (let y = 0; y <= size; y++) {
      if (updatedGrid[x][y].type === NodeType.LAND) {
        updatedGrid[x][y].landType = getRandomLandType();
      }
    }
  }
  return updatedGrid;
}

/**
 * Generates a random SpaceType from the SpaceType enum. (Currently commented out)
 * @returns {SpaceType} A random SpaceType.
 */
// function getRandomSpaceType(): SpaceType {
//   const spaceTypes = Object.values(SpaceType);
//   const randomIndex = Math.floor(Math.random() * spaceTypes.length);
//   return spaceTypes[randomIndex];
// }

/**
 * Generates a random LandType from the LandType enum.
 * @returns {LandType} A random LandType.
 */
function getRandomLandType(): LandType {
  const landTypes = Object.values(LandType);
  const randomIndex = Math.floor(Math.random() * landTypes.length);
  return landTypes[randomIndex];
}

/**
 * Placeholder grid representing a preset game board.
 * Each element in the grid represents a tile on the game board
 * with its type (NODE_TYPE) and additional properties such as landType or spaceType.
 * The grid is used for generating a preset board or initializing the game state.
 */
const placeholderBoard: Grid = [
  [
    {type: NodeType.EMPTY}, // (0,0)
    {type: NodeType.SPACE, spaceType: SpaceType.EMPTY}, // (0,1)
    {type: NodeType.SPACE, spaceType: SpaceType.TRADE_ALL}, // (0,2)
    {type: NodeType.SPACE, spaceType: SpaceType.EMPTY}, // (0,3)
    {type: NodeType.EMPTY}, // (0,4)
    {type: NodeType.EMPTY}, // (0,5)
    {type: NodeType.EMPTY}, // (0,6)
    {type: NodeType.EMPTY}, // (0,7)
    {type: NodeType.EMPTY}, // (0,8)
    {type: NodeType.EMPTY}, // (0,9)
    {type: NodeType.EMPTY}, // (0,10)
  ],
  [
    {type: NodeType.SPACE, spaceType: SpaceType.EMPTY}, // (1,0)
    {type: NodeType.LAND, landType: LandType.WATER}, // (1,1)
    {type: NodeType.LAND, landType: LandType.FOOD}, // (1,2)
    {type: NodeType.LAND, landType: LandType.FOOD},// (1,3)
    {type: NodeType.SPACE, spaceType: SpaceType.EMPTY}, // (1,4)
    {type: NodeType.SPACE, spaceType: SpaceType.EMPTY}, // (1,5)
    {type: NodeType.EMPTY}, // (1,6)
    {type: NodeType.EMPTY}, // (1,7)
    {type: NodeType.EMPTY}, // (1,8)
    {type: NodeType.EMPTY}, // (1,9)
    {type: NodeType.EMPTY}, // (1,10)
  ], [
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (2,0)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (2,1)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (2,2)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (2,3)
    { type: NodeType.LAND, landType: LandType.WATER }, // (2,4)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (2,5)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (2,6)
    { type: NodeType.EMPTY }, // (2,7)
    { type: NodeType.EMPTY }, // (2,8)
    { type: NodeType.EMPTY }, // (2,9)
    { type: NodeType.EMPTY }, // (2,10)
  ],
  [
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (3,0)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (3,1)
    { type: NodeType.LAND, landType: LandType.METAL }, // (3,2)
    { type: NodeType.PLAYER}, // (3,3)                              ============ PLAYER ===============
    { type: NodeType.LAND, landType: LandType.METAL }, // (3,4)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (3,5)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (3,6)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (3,7)
    { type: NodeType.EMPTY }, // (3,8)
    { type: NodeType.EMPTY }, // (3,9)
    { type: NodeType.EMPTY }, // (3,10)
  ],
  [
    { type: NodeType.SPACE, spaceType: SpaceType.TRADE_ALL }, // (4,0)
    { type: NodeType.LAND, landType: LandType.WATER }, // (4,1)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (4,2)
    { type: NodeType.LAND, landType: LandType.METAL }, // (4,3)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (4,4)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (4,5)
    { type: NodeType.LAND, landType: LandType.WATER }, // (4,6)
    { type: NodeType.LAND, landType: LandType.WATER }, // (4,7)
    { type: NodeType.SPACE, spaceType: SpaceType.TRADE_FUEL }, // (4,8)
    { type: NodeType.EMPTY }, // (4,9)
    { type: NodeType.EMPTY }, // (4,10)
  ],
  [
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (5,0)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (5,1)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (5,2)
    { type: NodeType.LAND, landType: LandType.METAL }, // (5,3)
    { type: NodeType.LAND, landType: LandType.METAL }, // (5,4)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (5,5)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (5,6)
    { type: NodeType.LAND, landType: LandType.METAL }, // (5,7)
    { type: NodeType.SPACE, spaceType: SpaceType.TRADE_FOOD }, // (5,8)
    { type: NodeType.EMPTY }, // (5,9)
    { type: NodeType.EMPTY }, // (5,10)
  ],
  [
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (6,0)
    { type: NodeType.LAND, landType: LandType.METAL }, // (6,1)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (6,2)
    { type: NodeType.LAND, landType: LandType.WATER }, // (6,3)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (6,4)
    { type: NodeType.LAND, landType: LandType.METAL }, // (6,5)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (6,6)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (6,7)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (6,8)
    { type: NodeType.EMPTY }, // (6,9)
    { type: NodeType.EMPTY }, // (6,10)
  ],
  [
    { type: NodeType.SPACE, spaceType: SpaceType.TRADE_METAL }, // (7,0)
    { type: NodeType.LAND, landType: LandType.WATER }, // (7,1)
    { type: NodeType.PLAYER}, // (7,2)                              ============ PLAYER ===============
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (7,3)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (7,4)
    { type: NodeType.PLAYER}, // (7,5)                              ============ PLAYER ===============
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (7,6)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (7,7)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (7,8)
    { type: NodeType.EMPTY }, // (7,9)
    { type: NodeType.EMPTY }, // (7,10)
  ],
  [
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (8,0)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (8,1)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (8,2)
    { type: NodeType.LAND, landType: LandType.METAL }, // (8,3)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (8,4)
    { type: NodeType.LAND, landType: LandType.FUEL }, // (8,5)
    { type: NodeType.LAND, landType: LandType.WATER }, // (8,6)
    { type: NodeType.SPACE, spaceType: SpaceType.TRADE_ALL }, // (8,7)
    { type: NodeType.EMPTY }, // (8,8)
    { type: NodeType.EMPTY }, // (8,9)
    { type: NodeType.EMPTY }, // (8,10)
  ],
  [
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (9,0)
    { type: NodeType.SPACE, spaceType: SpaceType.TRADE_CONCRETE }, // (9,1)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (9,2)
    { type: NodeType.LAND, landType: LandType.WATER }, // (9,3)
    { type: NodeType.LAND, landType: LandType.METAL }, // (9,4)
    { type: NodeType.LAND, landType: LandType.FOOD }, // (9,5)
    { type: NodeType.LAND, landType: LandType.CONCRETE }, // (9,6)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (9,7)
    { type: NodeType.EMPTY }, // (9,8)
    { type: NodeType.EMPTY }, // (9,9)
    { type: NodeType.EMPTY }, // (9,10)
  ],
  [
    { type: NodeType.EMPTY }, // (10,0)
    { type: NodeType.EMPTY }, // (10,1)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (10,2)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (10,3)
    { type: NodeType.SPACE, spaceType: SpaceType.TRADE_WATER }, // (10,4)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (10,5)
    { type: NodeType.SPACE, spaceType: SpaceType.EMPTY }, // (10,6)
    { type: NodeType.EMPTY }, // (10,7)
    { type: NodeType.EMPTY }, // (10,8)
    { type: NodeType.EMPTY }, // (10,9)
    { type: NodeType.EMPTY }, // (10,10)
  ],
];
