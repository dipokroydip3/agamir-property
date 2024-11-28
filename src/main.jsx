import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import ErrorPage from "./Pages/Others/ErrorPage.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Register from "./Pages/Auth/Register.jsx";
import { PrimeReactProvider } from "primereact/api";
import AllPlot from "./Pages/AllPlot/AllPlot.jsx";
import VisitScheduled from "./Pages/VisitSchiduled/VisitScheduled.jsx";
import PostProperty from "./Pages/PostProperty/PostProperty.jsx";
import ProductDetails from "./Pages/ProductsDetails/ProductDetails.jsx";
import BlockPage from "./Pages/Block/BlockPage.jsx";
import BlogDetails from "./Pages/Block/BlogDetails.jsx";
import BlockWays from "./Pages/Block/BloksWays/BlockWays.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/all-plot",
        element: <AllPlot></AllPlot>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/visitScheduled",
        element: <VisitScheduled></VisitScheduled>,
      },
      {
        path: "/postProperty",
        element: <PostProperty></PostProperty>,
      },
      {
        path: "/productDetails",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "blockPage",
        element: <BlockPage></BlockPage>,
      },
      {
        path: "blogDetails",
        element: <BlogDetails></BlogDetails>
      },
      {
        path: "blockWays",
        element: <BlockWays></BlockWays>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: true }}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </PrimeReactProvider>
  </StrictMode>
);
