/* eslint-disable */

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as BeginTrainingImport } from "./routes/begin-training";

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const BeginTrainingRoute = BeginTrainingImport.update({
  path: "/begin-training",
  getParentRoute: () => rootRoute,
} as any);

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/begin-training": {
      id: "/begin-training";
      path: "/begin-training";
      fullPath: "/begin-training";
      preLoaderRoute: typeof BeginTrainingImport;
      parentRoute: typeof rootRoute;
    };
  }
}

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  BeginTrainingRoute,
});
