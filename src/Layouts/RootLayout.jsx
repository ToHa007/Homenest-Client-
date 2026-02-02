import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import GlobalSpinner from "../components/Spinner/GlobalSpinner.jsx";

const RootLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading"; // true when loader or navigation is active

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Global Spinner overlay */}
      <GlobalSpinner loading={loading} />

      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
