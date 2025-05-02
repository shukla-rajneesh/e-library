import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));

export const routesSection = [
  {
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    ),
    children: [{ index: true, element: <HomePage /> }],
  },
  { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
];
