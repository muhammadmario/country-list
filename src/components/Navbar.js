import React from "react";

function Navbar() {
  return (
    <nav className="border-b border-slate-900/10 flex justify-between items-center h-16 px-10 md:px-24">
      <h1 className="font-bold text-2xl">Where in the world?</h1>

      <div className="flex gap-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        Dark Mode
      </div>
    </nav>
  );
}

export default Navbar;
