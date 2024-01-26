import mammoth from "./assets/rock-mammoth.png";
import "./assets/style.scss";
// This will be used to compose all the components from this feature
export const Error = () => (
  <>
    <div className='flexbox-turn-on' id='error-content'>
      <h2>Error: 404</h2>
      <img src={mammoth} id='error-mammoth' className='placeholder-img'></img>
      <h2>Page not found!</h2>
      <h3>Please return to your previous page.</h3>
    </div>
  </>
);
