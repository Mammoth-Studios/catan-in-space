// external modules
import { Link } from "react-router-dom";

// local modules
import "./style.scss";

const Navbar = () => {
  return (
    <nav className='flexbox-turn-on'>
      <Link to='/'>Home</Link>
      <Link to='/example'>Example</Link>
    </nav>
  );
};

export default Navbar;
