import { FC } from "react";
import "./home-about.style.scss";
import { aboutPanels, credits } from "./home-about.constant";
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
      <div className="home-about-credits">
        <h2>Credits</h2>
        <div className="home-about-credits-container">
          {credits.map(({ department, roles }, index) => (
            <div key={index} className="home-about-credits-department">
              <h3>{department}</h3>
              <ul>
                {roles.map(({ name, role }, index) => (
                  <li key={index}>
                    {name} - {role}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
