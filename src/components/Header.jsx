import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div className="flex justify-items-center">
          <HomeIcon
            className="h-6 w-6 text-red-500 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <p className="text-red-500 font-bold ml-2">
            Real<span className="text-black">tor</span>
          </p>
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`p-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}>
              Home
            </li>
            <li
              className={`p-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}>
              Offers
            </li>
            <li
              className={`p-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/sign-in")}>
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
