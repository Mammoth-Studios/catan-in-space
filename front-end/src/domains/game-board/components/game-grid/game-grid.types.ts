/**
 * The Board component renders the game board.
 * It takes a savedBoard prop, which is a JSON string representing the initial state of the board.
 * If no saved board is provided, it falls back to a placeholder board.
 */
export interface BoardProps {
  savedBoard?: string; // Optional prop for the initial state of the board
}

export enum NodeType {
  LAND = "LAND",
  PLAYER = "PLAYER",
  SPACE = "SPACE",
  EMPTY = "EMPTY",
}

export enum SpaceType {
  EMPTY = "EMPTY",
  TRADE_ALL = "Any:3-1",
  TRADE_WATER = "Water:2-1",
  TRADE_CONCRETE = "Concrete:2-1",
  TRADE_FUEL = "Fuel:2-1",
  TRADE_FOOD = "Food:2-1",
  TRADE_METAL = "Metal:2-1",
}
export enum LandType {
  WATER = "WATER",
  CONCRETE = "CONCRETE",
  FUEL = "FUEL",
  FOOD = "FOOD",
  METAL = "METAL",
}

export interface GridItem {
  type: NodeType;
  landType?: LandType;
  spaceType?: SpaceType;
}
export type Grid = GridItem[][];
