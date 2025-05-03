import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

const HomePage = lazy(() => import("@/pages/HomePage"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));

export const routesSection = [
  {
    element: (
      <DashboardLayout>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </DashboardLayout>
    ),
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
];
