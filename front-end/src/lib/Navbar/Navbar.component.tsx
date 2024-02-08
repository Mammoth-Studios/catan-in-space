import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.style.scss";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Function to calculate the number of hexagons needed to fill the viewport width
  const calculateHexCount = () => {
    const viewportWidth = window.innerWidth;
    const hexWidth = 14; // Width of a hexagon
    const margin = 0.5; // Adjust margin as needed
    const availableWidth = viewportWidth - 2 * margin; // Subtract margins
    return Math.floor(availableWidth / hexWidth);
  };

  // Function to generate a row of hexagons
  const generateHexagonRow = () => {
    const hexCount = calculateHexCount();
    const hexagons = [];
    for (let j = 0; j < hexCount; j++) {
      hexagons.push(
        <div className="hexagon" key={`hex-${j}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            fill="#242424"
          >
            {/* Your hexagon SVG path here */}
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" />
          </svg>
        </div>
      );
    }
    return hexagons;
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="hexagon-container">
      <div id="hex-animation">
        <div className="hexagon-row" id="first-row">
          {generateHexagonRow()}
        </div>
        <div className="hexagon-row" id="second-row">
          {generateHexagonRow()}
        </div>
        <div className="hexagon-row" id="third-row">
          {generateHexagonRow()}
        </div>
        <div className="hexagon-row" id="fourth-row">
          {generateHexagonRow()}
        </div>
        <div className="hexagon-row" id="fifth-row">
          {generateHexagonRow()}
        </div>
        <div className="hexagon-row" id="sixth-row">
          {generateHexagonRow()}
        </div>
      </div>
      {window.innerWidth > 768 && (
        <ul id="nav-ul" className={menuVisible ? "active" : ""}>
          <li
            className={`nav-button ${isActiveLink("/") ? "active-link" : ""}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`nav-button ${
              isActiveLink("/game") ? "active-link" : ""
            }`}
          >
            <Link to="/game">Game</Link>
          </li>
          {/* TODO: @Mary - navbar-routing */}
          {/* ------------------------------------------- */}
          <li
            className={`nav-button ${
              isActiveLink("/login-signup") ? "active-link" : ""
            }`}
          >
            <Link to="/login-signup">Login/Signup</Link>
          </li>
          <li
            className={`nav-button ${
              isActiveLink("/profile") ? "active-link" : ""
            }`}
          >
            <Link to="/profile">Profile</Link>
          </li>
          {/* ------------------------------------------- */}
        </ul>
      )}
      {window.innerWidth <= 768 && (
        <>
          <div
            id="hamburger"
            className={`menu-toggle nav-button ${menuVisible ? "active" : ""}`}
            onClick={toggleMenu}
          >
            {/* Hamburger icon */}
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>{" "}
          <div
            id="modal-background"
            className={menuVisible ? "active" : ""}
            onClick={toggleMenu}
          >
            <ul id="nav-ul media-query" className={menuVisible ? "active" : ""}>
              <li
                className={`nav-button ${
                  isActiveLink("/") ? "active-link" : ""
                }`}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={`nav-button ${
                  isActiveLink("/feature") ? "active-link" : ""
                }`}
              >
                <Link to="/feature">Feature</Link>
              </li>
              <li
                className={`nav-button ${
                  isActiveLink("/feature2") ? "active-link" : ""
                }`}
              >
                <Link to="/feature2">Feature 2</Link>
              </li>
              <li
                className={`nav-button ${
                  isActiveLink("/example") ? "active-link" : ""
                }`}
              >
                <Link to="/example">Example</Link>
              </li>
              <li
                className={`nav-button ${
                  isActiveLink("/game") ? "active-link" : ""
                }`}
              >
                <Link to="/game">Game</Link>
              </li>
              {/* TODO- \/ conditional rendering after auth added \/ */}
              {/* ------------------------------------------- */}
              <li
                className={`nav-button ${
                  isActiveLink("/login-signup") ? "active-link" : ""
                }`}
              >
                <Link to="/login-signup">Login/Signup</Link>
              </li>
              <li
                className={`nav-button ${
                  isActiveLink("/profile") ? "active-link" : ""
                }`}
              >
                <Link to="/profile">Profile</Link>
              </li>
              {/* ------------------------------------------- */}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};
