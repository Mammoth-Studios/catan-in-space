import { FC } from "react";
import "./home-about-panel.style.scss";
import { PlaceHolderBox } from "@lib/PlaceHolderBox";

interface AboutPanelProps {
  title: string;
  content: string;
  position?: "left" | "right";
}

const AboutPanel: FC<AboutPanelProps> = ({
  title,
  content,
  position = "left",
}) => {
  return (
    <div className={`about-panel-container about-panel-container-${position}`}>
      <h2 className="about-panel-title">{title}</h2>
      <div className={`about-panel-content about-panel-content-${position}`}>
        <p className={`about-panel-text about-panel-text-${position}`}>
          {content}
        </p>
        <PlaceHolderBox height="100%" width="30%" />
      </div>
    </div>
  );
};

export default AboutPanel;
