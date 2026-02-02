import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RootLayout from "./Layouts/RootLayout.jsx";
import Home from "./components/Home/Home.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import AllProperties from "./components/AllProperties/AllProperties.jsx";
import AddProperties from "./components/AddProperties/AddProperties.jsx";
import MyProperties from "./components/MyProperties/MyProperties.jsx";
import MyRatings from "./components/MyRatings/MyRatings.jsx";

import PropertyDetails from "./components/PropertyDetails/PropertyDetails.jsx";

import NotFound from "./components/NotFound/NotFound.jsx"; // 

import { ThemeProvider } from "./context/ThemeContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateProperties from "./components/UpdateProperties/UpdateProperies.jsx";
import MyPropertyDetails from "./components/MyPropertyDetails/MyproperetyDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      {
        path: "all-properties",
        Component: AllProperties,
        loader: () => fetch("http://localhost:3000/all-properties"),
      },
      {
        path: "add-properties",
        Component: () => (
          <PrivateRoute>
            <AddProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "my-properties",
        Component: () => (
          <PrivateRoute>
            <MyProperties />
          </PrivateRoute>
        ),
      },
      {
        path: "my-ratings",
        Component: () => (
          <PrivateRoute>
            <MyRatings />
          </PrivateRoute>
        ),
      },
      {
        path: "update-property/:id",
        Component: () => (
          <PrivateRoute>
            <UpdateProperties></UpdateProperties>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/properties/${params.id}`),
      },
      {
        path: "property-details/:id",
        Component: () => (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-properties/${params.id}`),
      },
      {
        path: "my-property-details/:id",
        Component: () => (
          <PrivateRoute>
           <MyPropertyDetails></MyPropertyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/added-properties/${params.id}`),
      },
    
      { path: "*", Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
