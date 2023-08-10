import React from "react";
import Menu2 from "./Menu2";
import Menu from "./Menu";

function Header() {
  return (
    <header className="navbar flex justify-between items-center text-base pt-1 pb-1 w-full font-semibold font-custom">
      <h1 className="text-xl sm:text-xl">My Tinerary</h1>
      <nav className="flex justify-between items-center">
        <Menu />
        <button className="flex items-center gap-3 hover:animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
        </button>
        <Menu2 />
      </nav>
    </header>
  );
}

export default Header;
