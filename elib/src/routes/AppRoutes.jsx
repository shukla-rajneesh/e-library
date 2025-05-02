import { createBrowserRouter, Outlet } from "react-router-dom";
import { routesSection } from "./sections";
import App from "@/App";

const router = createBrowserRouter([
  {
    Component: () => (
      <App>
        <Outlet />
      </App>
    ),
    children: routesSection,
  },
]);

export default router;
