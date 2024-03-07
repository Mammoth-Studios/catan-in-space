import { FC } from "react";
import { homeCardTitles } from "./home-cards.contant";
import "./home-cards.style.scss";
import { PlaceHolderBox } from "@lib/PlaceHolderBox";

const HomeCards: FC = () => {
  return (
    <div id="home-cards">
      {homeCardTitles.map((title, index) => (
        <PlaceHolderBox
          key={index}
          height="100%"
          width="100%"
          position={index % 2 ? "top" : "bottom"}
          title={title}
        />
      ))}
    </div>
  );
};

export default HomeCards;
