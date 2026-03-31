import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/prijzen", element: <Pricing /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faq", element: <FAQ /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
