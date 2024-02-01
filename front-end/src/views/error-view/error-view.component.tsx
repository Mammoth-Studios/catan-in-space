import mammoth from "../assets/rock-mammoth.png";
import { Link } from "react-router-dom";
import "./error-view.style.scss";
// This will be used to compose all the components from this feature
export const ErrorView = () => (
  <>
    <div className="flexbox-turn-on" id="error-content">
      <h2>An Error Occured</h2>
      <img src={mammoth} id="error-mammoth" className="placeholder-img"></img>
      <h2>Page not found!</h2>
      <h3>
        Please return to the <Link to="/">Main</Link> page.
      </h3>
    </div>
  </>
);
