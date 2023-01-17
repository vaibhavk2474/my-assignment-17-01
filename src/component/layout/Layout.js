import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Chat from "../chat/Chat";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function Layout({ Widget }) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/profile`);
  }, []);

  // const handleNewUserMessage = () => {
  //   console.log("welcome");
  // };
  return (
    <div className="w-10/12 bg-white-500 m-auto h-screen flex">
      <div className="h-5/6 w-11/12 m-auto bg-white-500 ">
        <div className="flex h-full ">
          <div className="h-full w-1/4">
            <Sidebar />
          </div>
          <div className=" w-3/4 relative">
            <Navbar />
            <Outlet />
            <Chat />
            {/* <Widget
              handleNewUserMessage={handleNewUserMessage}
              // profileAvatar={logo}
              title="My new awesome title"
              subtitle="And my cool subtitle"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
