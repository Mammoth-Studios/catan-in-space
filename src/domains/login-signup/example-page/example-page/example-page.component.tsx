import { FeatureComponentOne } from "./components/example-page-feature-component-one/feature-component-one.component";

// This will be used to compose all the components from this feature
export const ExampleFeature = () => <FeatureComponentOne propCount={1} />;
