import React, {useState} from "react";

// type Node = {
//   type: NodeType;
// }

type NodeType = "water" | "space" | "concrete" | "fuel" | "food" | "player" | "metal" | "empty";
// const landTypes: NodeType[] = ["water", "concrete", "fuel", "food", "metal"];

function typeToColor(type: NodeType): string {
  switch (type) {
    case "water":
      return "#4040ff"; // Blue
    case "space":
      return "#000000"; // Black
    case "concrete":
      return "#808080"; // Grey
    case "fuel":
      return "#8d8b43"; // Yellow
    case "food":
      return "#008000"; // Green
    case "player":
      return "#FFFFFF"; // White
    case "metal":
      return "#A52A2A"; // Brown
    default:
      return "#000000"; // Default Space (Black)
  }
}

interface HexProps {
  size: number,
  xPos: number,
  yPos: number,
  type: NodeType,
}
export const GameHex: React.FC<HexProps> = ({size, xPos, yPos, type}) => {
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
    console.log(`clicked ${type} at (${xPos},${yPos})`);
  }

  return (
    type !== "empty" && (
      <svg x={cordX} y={cordY} height="140" width="140" viewBox="0 0 270 220" xmlns="http://www.w3.org/2000/svg">
        <g onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>
          <polygon
            points={scaledPoints}
            style={{
              fill: typeToColor(type),
              stroke: "black",
              strokeWidth: 10,
              transform: `scale(${scale})`,
              transformOrigin: "center"
            }}
          />
          <text fill="white" fontSize="20" x="50%" y="50%" textAnchor="middle" dx="-1em" dy="1.5em">
            {`(${xPos}, ${yPos})`}
          </text>
          <text fill="white" fontSize="20" x="50%" y="50%" textAnchor="middle" dx="-1em" dy="0em">
            {`${type}`}
          </text>
        </g>
      </svg>
    )
  );
};
