import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Forms from "./Forms";
import Browser from "./Browser";

const Routing = () => {
  const appRouting = createBrowserRouter([
    { path: "/", element: <Forms /> },
    { path: "/browser", element: <Browser /> },
  ]);

  return <RouterProvider router={appRouting} />
};

export default Routing;
