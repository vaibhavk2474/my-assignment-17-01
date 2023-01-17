import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { authContext } from "../../../context/AuthContext";
import { Users } from "../../../data/users";
import firstLetterUppercaseHandler from "../../../helper/FirstLetterUppercase";

function Navbar({}) {
  const { account } = useContext(authContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(null);
  const { onChangeAccount } = useContext(authContext);
  const { pathname } = useLocation();
  const page = firstLetterUppercaseHandler(pathname.split("/")[1]);

  const onShowDownHandler = () => {
    setShowDropdown((preState) => !preState);
  };
  const signOutHandler = () => {
    onChangeAccount("");
  };

  useEffect(() => {
    if (account) {
      const cData = Users.users.find((user) => user.id === +account);
      setCurrentUserData(cData);
    }
  }, [currentUserData]);
  return (
    <div className=" mx-1 mt-1 mb-1">
      <div className="flex items-center justify-between my-2 border-b-2  ">
        <div className="mb-1">{page}</div>
        <div className="mb-1">
          <div className="sm:flex sm:items-start cursor-pointer">
            <div
              className="flex items-center space-x-4"
              onClick={onShowDownHandler}
            >
              <img
                className="w-10 h-10 rounded-full"
                src={currentUserData?.profilepicture}
                alt=""
              />
              <div className="font-medium ">
                <div>{currentUserData?.name}</div>
                <div
                  className={`${
                    showDropdown ? "" : "hidden"
                  } absolute  z-50  my-4 text-base list-none bg-white  divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <img
                    type="button"
                    className="w-2/6 h-2/6 m-auto  mt-1 mb-1 rounded-full cursor-pointer text-center"
                    src={currentUserData?.profilepicture}
                    alt="User profile pic"
                  />
                  <h1 className=" text-center ">{currentUserData?.name}</h1>
                  <h3 className="text-center text-[#8F8F8F]">
                    {currentUserData?.email}
                  </h3>
                  <ul
                    className="py-1 text-center"
                    aria-labelledby="user-menu-button"
                  >
                    <li>
                      <span
                        className="border-t-2 rounded block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={signOutHandler}
                      >
                        Sign out
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
