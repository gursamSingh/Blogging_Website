import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="bg-white w-full h-15 flex items-center m-0 pt-4 pb-4 lg:justify-center lg:h-[60px] lg:gap-[48rem]">
      <Link to="/blogs">
        <div className="text-yellow-500 font-sans text-2xl font-semibold p-4">Medium</div>
      </Link>

      <div className="flex justify-center items-center gap-2">
        <div
          className="pointer
          "
        >
          {/* New Blog Button */}
          <Link to="/publish">
            <div
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500
              focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg m-3.5 w-20 text-lg
              dark:focus:ring-yellow-900 text-center"
            >
              {" "}
              New
            </div>
          </Link>
        </div>

        <div
          className="p-4 relative cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 text-gray-500"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              clipRule="evenodd"
            />
          </svg>
          {/* Hover Popup */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Appbar;
