import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import ChronicListRoute from "./routes/ChronicListRoute.jsx";
import ChronicleDetailRoute from "./routes/ChroniclesDetailRoute";
import ChronicleCreateRoute from "./routes/ChronicleCreateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <ChronicListRoute></ChronicListRoute>,
        loader: ChronicListRoute.loader,
      },
      {
        path: "/chronicles/:id",
        element: <ChronicleDetailRoute />,
        loader: ChronicleDetailRoute.loader,
      },
      {
        path: "/chronicles/create",
        element: <ChronicleCreateRoute />,
        action: ChronicleCreateRoute.action,
        errorElement: <div>Oops! Ein Fehler ist aufgetreten</div>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
