import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Void } from "./pages/Void";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Void />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
