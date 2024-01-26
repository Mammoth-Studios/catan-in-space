import { FeatureComponentOne } from "./components/example-page-feature-component-one/feature-component-one.component";
import mammoth from "./assets/mamoth-house.png";
import { Link } from "react-router-dom";
// This will be used to compose all the components from this feature
import "./assets/style.scss";
export const Landing = () => (
  <>
    <div className='flexbox-turn-on placeholder-container'>
      <div className='flip-container'>
        <div className='flexbox-turn-on' id='header'>
          <h2>Landing Page</h2>
          <div id='page-not-found'>
            <Link to='/fake-page'>
              <h2>Test error page</h2>
            </Link>
          </div>
        </div>
        <div className='flipper'>
          <div className='front flexbox-turn-on'>
            <div className='flexbox-turn-on placeholder-content'>
              <img src={mammoth} className='placeholder-img'></img>
              <h2>In Development!</h2>
              <h2>Stay tuned!</h2>
            </div>
          </div>
          <div className='back flexbox-turn-on'>
            <div className='flexbox-turn-on placeholder-content'>
              <img src={mammoth} className='placeholder-img'></img>
              <h2>In Development!</h2>
              <h2>Stay tuned!</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='item'>
        <FeatureComponentOne propCount={1} />
      </div>
    </div>
  </>
);
