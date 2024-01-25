import React from "react";
import { Link } from "react-router-dom";
import "./navbar.style.scss";

const Navbar = () => {
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
        <div className='hexagon' key={`hex-${j}`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
            fill='#242424'
          >
            {/* Your hexagon SVG path here */}
            <polygon points='50,5 95,25 95,75 50,95 5,75 5,25' />
          </svg>
        </div>
      );
    }
    return hexagons;
  };

  return (
    <nav className='hexagon-container'>
      <div id='hex-animation'>
        <div className='hexagon-row' id='first-row'>
          {generateHexagonRow()}
        </div>
        <div className='hexagon-row' id='second-row'>
          {generateHexagonRow()}
        </div>
        <div className='hexagon-row' id='third-row'>
          {generateHexagonRow()}
        </div>
        <div className='hexagon-row' id='fourth-row'>
          {generateHexagonRow()}
        </div>
        <div className='hexagon-row' id='fifth-row'>
          {generateHexagonRow()}
        </div>
        <div className='hexagon-row' id='sixth-row'>
          {generateHexagonRow()}
        </div>
      </div>
      <ul id='nav-ul'>
        <li className='nav-button'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-button'>
          <Link to='/feature'>Feature</Link>
        </li>
        <li className='nav-button'>
          <Link to='/feature2'>Feature 2</Link>
        </li>
        <li className='nav-button'>
          <Link to='/example'>Example</Link>
        </li>
        <li className='nav-button'>
          <Link to='/game'>Game</Link>
        </li>
        {/* TODO- \/ conditional rendering after auth added \/ */}
        {/* ------------------------------------------- */}
        <li className='nav-button'>
          <Link to='/login-signup'>Login/Signup</Link>
        </li>
        <li className='nav-button'>
          <Link to='/profile'>Profile</Link>
        </li>
        {/* ------------------------------------------- */}
      </ul>{" "}
    </nav>
  );
};

export default Navbar;
