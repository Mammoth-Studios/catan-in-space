import { FC } from "react";
import { Link } from "react-router-dom";
import "./hero-section.scss";
import placeholderimage from "./placeholder-assets/user-image.jpg";

export const HeroSection: FC = () => (
  <section className="hero-section">
    <div className="hero-section-image-div">
      <img className="hero-section-image" src={placeholderimage}></img>
      <p className="hero-section-image-focus">Image focus</p>
    </div>
    <div className="hero-section-div">
      <p className="hero-section-title">
        Play online in browser <br />
        (or tagline goes here!)
      </p>
      <Link to="/game">
        <button className="hero-section-button">PLAY NOW</button>
      </Link>
      <a className="hero-section-signin" href="">
        Or Sign in
      </a>
    </div>
  </section>
);
