import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./AppRoutes.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);
