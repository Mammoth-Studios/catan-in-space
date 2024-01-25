// external modules
import { Link } from "react-router-dom";

// local modules
import "./navbar.style.scss";

const Navbar = () => {
  return (
    <nav className='flexbox-turn-on'>
      <Link to='/'>Home</Link>
      <Link to='/feature'>Feature</Link>
      <Link to='/feature2'>Feature 2</Link>
      <Link to='/example'>Example</Link>
      <Link to='/game'>Game</Link>
      {/* TODO- \/ conditional rendering after auth added \/ */}
      {/* ------------------------------------------- */}
      <Link to='/login-signup'>Login/Signup</Link>
      <Link to='/profile'>Profile</Link>
      {/* ------------------------------------------- */}
    </nav>
  );
};

export default Navbar;
