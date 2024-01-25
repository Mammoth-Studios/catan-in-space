import "./style.scss";
import { ExampleFeature } from "../../domains/example-feature/example-feature.index";
// import * as LibComponents from "../../lib/lib-component-example/lib-component-one.index";
const LandingPage = () => {
  return (
    <div id='landing'>
      <ExampleFeature />
      LandingPage
      {/* <LibComponents.FeatureTwoComponentOne propCount={1} /> */}
    </div>
  );
};

export default LandingPage;
