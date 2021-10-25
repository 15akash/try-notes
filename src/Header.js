import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="bg-gray-800 w-auto h-30 px-12 space-x-5 grid grid-cols-6 gap-4">
      <NavLink
        to="/"
        className="text-yellow-50 py-4 text-3xl font-black px-3 flex justify-items-start"
      >
        Notes App
      </NavLink>
      <div className=" rounded-3xl p-2 m-3 col-span-3"></div>
      <div className="text-yellow-50 text-2xl px-6 col-span-2 font-bold space-x-7 flex">
        <NavLink
          to="add-notes"
          className="hover:bg-gray-600 py-4 px-2 active:bg-gray-600"
        >
          Add Notes
        </NavLink>
        <NavLink to="/" className="hover:bg-gray-600 py-4 px-2">
          My Notes
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
