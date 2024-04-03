import { Route, RouteObject } from "react-router-dom";
import Layout from "layout/Layout";
import { AuthGuard, GuestGuard } from "layout/guards";
import LoginPage from "pages/authentication/LoginPage";
import RegisterPage from "pages/authentication/RegisterPage";
import LogoutPage from "pages/authentication/LogoutPage";
import LogConsumptionPage from "pages/water-drink-water/LogConsumptionPage";
import React from "react";

type Route = RouteObject & {
  title?: string;
};

export function renderRoutes(routes: Route[]) {
  return routes.map((route, i) => {
    const { title, children, ...routeProps } = route;
    return (
      <Route key={i} {...routeProps}>
        {children && renderRoutes(children)}
      </Route>
    );
  });
}

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <Layout />
      </AuthGuard>
    ),
    children: [
      {
        path: "logConsumption",
        element: <LogConsumptionPage />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <GuestGuard>
        <LoginPage />
      </GuestGuard>
    ),
  },
  {
    path: "/logout",
    element: (
      <GuestGuard>
        <LogoutPage />
      </GuestGuard>
    ),
  },
  {
    path: "/register",
    element: (
      <GuestGuard>
        <RegisterPage />
      </GuestGuard>
    ),
  },
];

export default routes;
