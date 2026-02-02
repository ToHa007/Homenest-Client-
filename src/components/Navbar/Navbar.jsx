import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "All Properties", path: "/all-properties" },
    { name: "Add Properties", path: "/add-properties" },
    { name: "My Properties", path: "/my-properties" },
    { name: "My Ratings", path: "/my-ratings" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
 
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="w-10 h-10  bg-gray-300 text-gray-600 flex items-center justify-center rounded-full font-bold text-lg"
        >
          H
        </Link>
      </div>

 
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link className="font-medium" to={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>


      <div className="navbar-end gap-2">

        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          title="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

    
        {!user && (
          <>
            <Link to="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-sm">
              Signup
            </Link>
          </>
        )}

  
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="user"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-56 p-2 shadow-lg"
            >
              {/* User Info */}
              <li className="px-2 py-1">
                <span className="font-semibold">
                  {user.displayName || "N/A"}
                </span>
              </li>
              <li className="px-2 py-1 text-sm opacity-70">
                {user.email}
              </li>

              <div className="divider my-1"></div>

              {/* Navigation */}
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>

              {/* Logout */}
              <li>
                <button
                  onClick={() => {
                    logOut()
                      .then(() => console.log("Logged out"))
                      .catch(console.error);
                  }}
                  className="font-semibold text-error"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
