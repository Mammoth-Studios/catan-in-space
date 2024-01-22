import { Provider } from "react-redux";
import { ExampleFeature } from "./domains/example-feature/example-feature.index";
import { store } from "./redux/store";

// This will be used to compose all the components from this feature
// All routing will also live here

function App() {
  return (
    <Provider store={store}>
      <ExampleFeature />
    </Provider>
  );
}

export default App;