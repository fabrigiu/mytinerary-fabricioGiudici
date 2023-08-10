import React from "react";
import Menu2 from "./Menu2";
import Menu from "./Menu";

function Header() {

  return (
    <header className="navbar flex justify-between items-center text-base pt-1 pb-1 w-full font-semibold font-custom">
      <h1 className="text-xl sm:text-xl">My Tinerary</h1>
      <nav className="flex justify-between items-center">
        <Menu />
        <button className="flex items-center gap-3">
          <svg
            viewBox="0 0 900 1000"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M800 50c28 0 51.667 9.667 71 29s29 43 29 71v700c0 26.667-9.667 50-29 70s-43 30-71 30H350c-26.667 0-49.667-10-69-30s-29-43.333-29-70V750h98v100h450V150H350v150h-98V150c0-28 9.667-51.667 29-71s42.333-29 69-29h450M450 720V600H0V450h450V330l200 194-200 196" />
          </svg>
        </button>
        <Menu2 />
      </nav>
    </header>
  );
}

export default Header;
