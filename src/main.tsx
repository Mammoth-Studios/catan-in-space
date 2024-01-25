import React from "react";

// routing external modules
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// local modules
import App from "./App.tsx";
import "./index.scss";

// Pages
import { ExampleFeature } from "./domains/example-feature/example-feature.index";
import LandingPage from "./pages/LandingPage/index.tsx";

// routing logic
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className='display-2'>Placeholder for 404 page</h1>,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/example",
        element: <ExampleFeature />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
