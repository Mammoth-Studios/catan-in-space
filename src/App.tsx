// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
    </Provider>
  );
}

export default App;
