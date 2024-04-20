import { Colors, size } from "./game-grid.constant";
import {
  Grid,
  GridItem,
  LandType,
  NodeType,
  SpaceType,
} from "./game-grid.types";

export function gridItemToColor(gridItem: GridItem): string {
  const { type, landType } = gridItem;

  switch (type) {
    case NodeType.LAND:
      return landType ? Colors[landType.toLowerCase()] : "#000000";
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

/**
 * Updates the provided grid by randomly assigning land types to nodes of type LAND.
 * @param grid The grid to update with random land types.
 * @returns The updated grid with random land types assigned.
 */
export function updateGridWithRandomLandTypes(grid: Grid): Grid {
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
