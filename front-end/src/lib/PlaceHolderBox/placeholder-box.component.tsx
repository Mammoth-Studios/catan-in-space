import { FC } from "react";
import "./placeholder-box.style.scss";

interface PlaceHolderBoxProps {
  height: number | string;
  width: number | string;
  title?: string;
  position?: string;
  flip?: boolean;
}

export const PlaceHolderBox: FC<PlaceHolderBoxProps> = ({
  position = "mid",
  height,
  width,
  title = "",
  flip = false,
}) => {
  return (
    <div
      className={`placeholder-box placeholder-box${flip ? "-flip" : ""}`}
      style={{ width, height }}
    >
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        <path d="M391.5 2L0.5 500V2L391.5 500" id="placeholder-box-path" />
      </svg>
      {title && (
        <p className={`placeholder-box-text placeholder-box-text-${position}`}>
          {title}
        </p>
      )}
    </div>
  );
};
