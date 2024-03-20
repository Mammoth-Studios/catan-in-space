import { FC } from "react";
import "./background.style.scss";
import TEMP_UI from "./Temp-UI.png";

export const Background: FC = () => (
  <div className="background">
    <img src={TEMP_UI} alt={"Temp UI For Game Page"}/>
  </div>
);
