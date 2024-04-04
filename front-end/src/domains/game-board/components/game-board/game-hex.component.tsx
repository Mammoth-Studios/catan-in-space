import React, {useState} from "react";
import {getTradeString, GridItem, gridItemToColor, NodeType, SpaceType} from "../game-board.constant";

interface HexProps {
  size: number,
  xPos: number,
  yPos: number,
  gridItem: GridItem,
}
export const GameHex: React.FC<HexProps> = ({size, xPos, yPos, gridItem}) => {
  const [scale, setScale] = useState(1);

  const anchorX = 500;
  const anchorY = 100;

  const cordX = anchorX + (size * Math.sqrt(3) * (xPos + 0.5 * (yPos & 1)));
  const cordY = anchorY + (size * 3 / 2 * yPos);

  const scaleFactorWidth = 270 / 360; // Calculate scaled ratio for Width
  const scaleFactorHeight = 220 / 280; // Calculate scaled ratio for Height

  const scaledPoints = ` 
    ${150 * scaleFactorWidth},${15 * scaleFactorHeight} 
    ${258 * scaleFactorWidth},${77 * scaleFactorHeight} 
    ${258 * scaleFactorWidth},${202 * scaleFactorHeight} 
    ${150 * scaleFactorWidth},${265 * scaleFactorHeight} 
    ${42 * scaleFactorWidth},${202 * scaleFactorHeight} 
    ${42 * scaleFactorWidth},${77 * scaleFactorHeight}
  `;


  function handleMouseEnter() {
    setScale(1.1);
  }

  function handleMouseLeave() {
    setScale(1);
  }

  function handleClick() {
    if(gridItem.landType){
      console.log(`clicked ${gridItem.landType} at (${xPos},${yPos})`);
    } else if(gridItem.spaceType){
      console.log(`clicked ${gridItem.spaceType} at (${xPos},${yPos})`);
    } else {
      console.error("You shouldn't be able to click this")
    }
  }

  function getText (item : GridItem) {
    if (item.type === NodeType.LAND) {
      return item.landType;
    } else if (item.type === NodeType.SPACE && item.spaceType) {
      return item.spaceType == SpaceType.EMPTY? "" : getTradeString(item.spaceType);
    } else {
      return "";
    }
  }


  return (
    gridItem.type !== NodeType.EMPTY && (
      <svg x={cordX} y={cordY} height="140" width="140" viewBox="0 0 270 220" xmlns="http://www.w3.org/2000/svg">
        <g onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
          <polygon
            points={scaledPoints}
            style={{
              fill: gridItemToColor(gridItem),
              stroke: "black",
              strokeWidth: 10,
              transform: `scale(${scale})`,
              transformOrigin: "center"
            }}
          />
          <text fill="white" fontSize="20" x="50%" y="50%" textAnchor="middle" dx="-1em" dy="1.5em">
            {gridItem.spaceType == SpaceType.EMPTY? "" : `(${xPos}, ${yPos})`}
          </text>
          <text fill="white" fontSize="20" x="50%" y="50%" textAnchor="middle" dx="-1em" dy="0em">
            {`${getText(gridItem)}`}
          </text>
        </g>
      </svg>
    )
  );
};
