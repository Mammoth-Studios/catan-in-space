import { FC } from "react";
import mammoth from "../assets/mamoth-house.png";
import { Link } from "react-router-dom";
// This will be used to compose all the components from this feature
import "./home-view.style.scss";
import HomeCards from "@domains/home/components/home-cards/home-cards.component";

export const HomeView: FC = () => (
  <div>
    {/* <div>
      <h2>Landing Page</h2>
      <Link to="/fake-page">
        <h2>Test error page</h2>
      </Link>
    </div> */}
    <HomeCards />
  </div>
);
