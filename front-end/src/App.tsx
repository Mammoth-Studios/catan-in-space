// Redux
import { Provider } from "react-redux";
// import { ExampleFeature } from "./domains/example-feature/example-feature.index";
import { store } from "./redux/store";
import { GameView } from "./views/game-view";
// import { Footer } from "@lib/Footer";

// Routing
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./lib/navbar/navbar.index";

// This will be used to compose all the components from this feature
// All routing will also live here

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      {/* <ExampleFeature /> */}
      {/* <Footer /> */}
      <GameView />
    </Provider>
  );
}

export default App;
