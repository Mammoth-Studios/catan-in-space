import mammoth from "@views/assets/mamoth-house.png";

// This will be used to compose all the components from this feature
export const GamePlaceHolder = () => (
  <>
    <div className='flexbox-turn-on placeholder-container'>
      <div className='flip-container'>
        <h2>Game Page</h2>

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
    </div>
  </>
);
