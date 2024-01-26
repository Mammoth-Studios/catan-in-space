import React from "react";

// routing external modules
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// local modules
import App from "./App.tsx";
import "./index.scss";

// Pages
import { ExampleFeature } from "./domains/example-feature/example-feature.index.tsx";
import { ExampleFeatureTwo } from "./domains/example-feature-two/example-feature-two.index.tsx";
import { ExamplePage } from "./domains/example-page/example.index.tsx";
import { Game } from "./domains/game/game.index.tsx";
import { Landing } from "./domains/landing/landing.index.tsx";
import { LoginSignup } from "./domains/login-signup/login-signup.index.tsx";
import { Profile } from "./domains/profile/profile.index.tsx";
import { Error } from "./domains/error/error.index.tsx";
// routing logic
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        element: <Error />,
      },
      {
        path: "/feature",
        element: <ExampleFeature />,
      },
      {
        path: "/feature2",
        element: <ExampleFeatureTwo />,
      },
      {
        path: "/example",
        element: <ExamplePage />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/login-signup",
        element: <LoginSignup />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
