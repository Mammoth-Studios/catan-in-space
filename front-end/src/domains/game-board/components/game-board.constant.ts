export enum NodeType {
  LAND = "LAND",
  PLAYER = "PLAYER",
  SPACE = "SPACE",
  EMPTY = "EMPTY"
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
  METAL = "METAL"
}

const Colors: { [key: string]: string } = {
  water: "#4040ff",
  space: "#000000",
  concrete: "#808080",
  fuel: "#8d8b43",
  food: "#008000",
  player: "#FFFFFF",
  metal: "#A52A2A",
  error: "#df61f3"
};

export interface GridItem {
  type:NodeType;
  landType?: LandType;
  spaceType?: SpaceType;
}
export type Grid = GridItem[][];
export function gridItemToColor(gridItem: GridItem): string {
  const { type, landType } = gridItem;

  switch (type) {
    case NodeType.LAND:
        return landType? Colors[landType.toLowerCase()] : "#000000";
      case NodeType.SPACE:
          return Colors.space;
      case NodeType.PLAYER:
          return Colors.player;
      default:
          return Colors.error;
  }
}

export function getTradeString(space: SpaceType): string {
  const parts = space.split(":"); // Split by colon
  const resource = parts[0];
  const ratio = parts[1].split("-").join(":"); // Replace '-' with ':' for the ratio

  // Construct the decoded string
  return `${resource} ${ratio}`;
}