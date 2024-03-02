import { FC } from "react";
import "./placeholder-box.style.scss";

interface PlaceHolderBoxProps {
  height: number | string;
  width: number | string;
  title?: string;
  position?: string;
}

export const PlaceHolderBox: FC<PlaceHolderBoxProps> = ({
  position = "mid",
  height,
  width,
  title = "",
}) => {
  return (
    <div className="placeholder-box">
      <svg width={width} height={height} viewBox="0 0 392 502" fill="none">
        <path d="M391.5 2L0.5 500V2L391.5 500" id="placeholder-box-path" />
      </svg>
      <p className={`placeholder-box-text placeholder-box-text-${position}`}>
        {title}
      </p>
    </div>
  );
};
