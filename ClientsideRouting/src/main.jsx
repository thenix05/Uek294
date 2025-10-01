import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ChronicleListRoute from "@/routes/ChronicleListRoute";
import ChronicleDetailRoute from "@/routes/ChronicleDetailRoute";
import ChronicleEditRoute from "./routes/ChronicleEditRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ChronicleListRoute />,
      },
      {
        path: "/chronicles/:id",
        element: <ChronicleDetailRoute />,
      },
      {
        path: "/chronicles/:id/edit",
        element: <ChronicleEditRoute />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
