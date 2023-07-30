import React from "react";
import { Main } from "../pages/main";
import { RouteObject } from "react-router-dom";
import { Layout } from "./layout";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "*",
        element: <>Not found</>,
      },
    ],
  },
];

