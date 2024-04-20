import { useCallback, useEffect, useMemo, useState } from "react";

import { hexSize, placeholderBoard, size } from "./game-grid.constant";
import { Grid } from "./game-grid.types";
import { updateGridWithRandomLandTypes } from "./game-grid.utils";

import { GameHex } from "./game-hex.component";

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
export const Board: React.FC<BoardProps> = ({ savedBoard }) => {
  // State to manage the grid representing the game board
  const [grid, setGrid] = useState<Grid>(
    savedBoard ? JSON.parse(savedBoard) : placeholderBoard
  );

  // TODO:
  //[!!!DEBUG!!!] Handle Regenerating the board when R is pressed ===========
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r" || event.key === "R") {
        const updatedGrid = updateGridWithRandomLandTypes(grid);
        setGrid(updatedGrid);
        console.log("Generate New Board ======");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
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
        row.push(
          <GameHex
            key={`${x}-${y}`}
            size={hexSize}
            xPos={x}
            yPos={y}
            gridItem={grid[x][y]}
          />
        );
      }
      matrix.push(row);
    }
    console.log("Rerender Board");
    return matrix;
  }, []);

  // Memoize the board creation
  const memoizedBoard = useMemo(() => createBoard(grid), [createBoard, grid]);

  // Style for the board SVG
  const boardStyle: React.CSSProperties = {
    width: window.innerWidth,
    height: 900,
    inset: 0,
  };

  return <svg style={boardStyle}>{memoizedBoard}</svg>;
};
