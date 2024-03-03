import { FC } from "react";
import "./home-about.style.scss";
import { aboutPanels } from "./home-about.constant";
import AboutPanel from "../home-about-panel/home-about-panel.component";

const HomeAbout: FC = () => {
  return (
    <div className="home-about">
      <h1>About the Game</h1>
      {aboutPanels.map(({ title, content }, index) => (
        <AboutPanel
          key={index}
          title={title}
          content={content}
          position={index % 2 ? "left" : "right"}
        />
      ))}
    </div>
  );
};

export default HomeAbout;
