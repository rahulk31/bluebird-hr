import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

const routes = [
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <Suspense fallback={<h3>Loading...</h3>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
