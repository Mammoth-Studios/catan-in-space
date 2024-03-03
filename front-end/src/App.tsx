// Redux
import { Provider } from "react-redux";
import { store } from "@redux/store";
import { Footer } from "@lib/Footer";

// Routing
import { Outlet } from "react-router-dom";

// Components
import { Navbar } from "@lib/Navbar";

// This will be used to compose all the components from this feature
// All routing will also live here

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
      <Footer />
    </Provider>
  );
}

export default App;
