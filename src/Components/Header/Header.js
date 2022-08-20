import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const [auth] = useAuth();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/login");
  };
  return (
    <div>
      <div class="navbar bg-primary">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              <li>
              <Link
                to="/"
                className="text-white font-bold hover:text-primary hover:bg-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white font-bold  hover:text-primary hover:bg-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-bold  hover:text-primary hover:bg-white"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-bold  hover:text-primary hover:bg-white"
              >
                Contact us
              </Link>
            </li>
            <li className="bottom-1">
              {user ? (
                <button
                  onClick={logout}
                  className="bg-white font-bold text-primary  hover:text-black"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login" className="bg-white font-bold text-primary">
                  LOGIN
                </Link>
              )}
            </li>
            <li className="top-1">
              {user ? (
                <button
                  className="bg-white font-bold text-primary"
                >
                  {user.displayName}
                </button>
              ) : (
                ''
              )}
            </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl text-white">Ed-Tech</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
            <li>
              <Link
                to="/"
                className="text-white font-bold hover:text-primary hover:bg-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white font-bold  hover:text-primary hover:bg-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-bold  hover:text-primary hover:bg-white"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-bold  hover:text-primary hover:bg-white"
              >
                Contact us
              </Link>
            </li>
            <li className="ml-3">
              {user ? (
                <button
                  onClick={logout}
                  className="bg-white font-bold text-primary  hover:text-green-400"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login" className="bg-white font-bold text-primary">
                  LOGIN
                </Link>
              )}
            </li>
            <li className="ml-5">
              {user ? (
                <button
               
                  className="bg-white font-bold text-primary"
                >
                  {user.displayName}
                </button>
              ) : (
                ''
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
