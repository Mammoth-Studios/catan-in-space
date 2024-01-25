// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Routing
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
// import { ExampleFeature } from "./domains/example-feature/example-feature.index";

// This will be used to compose all the components from this feature
// All routing will also live here

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      {/* <ExampleFeature /> */}
    </Provider>
  );
}

export default App;
