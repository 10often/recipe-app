import React from "react";
import { useRoutes } from "react-router-dom";
import { routes as routeList } from "./routes";
import { ApiProvider } from "../shared/providers/api-provider";

export const App = () => {
  const routes = useRoutes(routeList);

  return (
    <ApiProvider>
      <div className="h-screen w-screen bg-pastel-gray overflow-auto font-sans">
        {routes}
      </div>
    </ApiProvider>
  );
};
