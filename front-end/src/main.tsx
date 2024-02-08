import React from "react";

// routing external modules
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// local modules
import App from "./App.tsx";
import "./index.scss";

// Pages
import { GameView } from "@views/game-view";
import { LandingView } from "@views/landing-view";
import { LoginSignupView } from "@views/login-signup-view";
import { ProfileView } from "@views/profile-view";
import { ErrorView } from "@views/error-view";

// routing logic
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <LandingView />,
      },
      {
        path: "/game",
        element: <GameView />,
      },
      {
        path: "/login-signup",
        element: <LoginSignupView />,
      },
      {
        path: "/profile",
        element: <ProfileView />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />{" "}
  </React.StrictMode>
);
