import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <aside
        className="w-64 h-full bg-[#3F56C8] flex items-center justify-center rounded-2xl"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto rounded bg-[#3F56C8]  w-11/12 h-3/6 m-auto">
          <ul className="space-y-2 w-11/12 h-5/6 m-auto  ">
            <li className="relative">
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 activeClass"
                    : "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              >
                <span className="flex-1 ml-3 whitespace-nowrap text-white hover:text-black">
                  Profile <hr className="mt-1" />
                </span>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 activeClass"
                    : "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              >
                <span className="flex-1 ml-3 whitespace-nowrap text-white hover:text-black">
                  Posts <hr className="mt-1" />
                </span>
              </NavLink>
            </li>{" "}
            <li className="relative">
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 activeClass"
                    : "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              >
                <span className="flex-1 ml-3 whitespace-nowrap text-white hover:text-black">
                  Gallery <hr className="mt-1" />
                </span>
              </NavLink>
            </li>
            <li className="relative">
              <NavLink
                to="/todo"
                className={({ isActive }) =>
                  isActive
                    ? "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 activeClass"
                    : "flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              >
                <span className="flex-1 ml-3 whitespace-nowrap text-white hover:text-black">
                  Todo <hr className="mt-1 hover:text-black" />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
