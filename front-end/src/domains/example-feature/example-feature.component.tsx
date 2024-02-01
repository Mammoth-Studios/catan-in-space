import { FeatureComponentOne } from "./components/feature-component-one/feature-component-one.component";
import mammoth from "./assets/mamoth-house.png";
// This will be used to compose all the components from this feature
export const ExampleFeature = () => (
  <>
    <div className='flexbox-turn-on placeholder-container'>
      <div className='flip-container'>
        <h2>Example Feature Page</h2>

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
