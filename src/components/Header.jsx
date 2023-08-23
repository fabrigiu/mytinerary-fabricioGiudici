import React from "react";
import Menu2 from "./Menu2";
import Menu from "./Menu";

function Header() {
  
  return (
    <header className="navbar flex justify-between items-center text-base pt-1 pb-1 w-full font-semibold font-custom">
      <h1 className="text-xl sm:text-xl">My Tinerary</h1>
      <nav className="flex justify-between items-center gap-3">
        <Menu />
        <button className="flex items-center hover:animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"
            />
          </svg>
        </button>
        <Menu2 />
      </nav>
    </header>
  );
}

export default Header;
