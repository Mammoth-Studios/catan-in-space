import { FeatureComponentOne } from "./components/example-page-feature-component-one/feature-component-one.component";
import mammoth from "./assets/rock-mammoth.png";

// This will be used to compose all the components from this feature
export const Error = () => (
  <>
    <img src={mammoth} alt='404' />
    <FeatureComponentOne propCount={1} />
  </>
);
