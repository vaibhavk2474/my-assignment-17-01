import React, { useState } from "react";
import { Users } from "../../data/users";
import "./Chat.css";

function Chat() {
  const [show, setShow] = useState(false);
  const onClickChatBox = () => {
    setShow((preState) => !preState);
  };
  return (
    <div className={`chat-widget  ${show ? "active" : ""}`}>
      {/* chatting icon */}
      <div
        className={`bg-[#2C65C8] round-btn flex justify-between items-center `}
        onClick={onClickChatBox}
      >
        <div className="ml-1 flex">
          <div>
            <i className="fa fa-comment-alt text-white"></i>
          </div>
          <div className="ml-1 text-white">chat</div>
        </div>

        <div className="mr-1">
          <i className="fas fa-angle-up text-white"></i>
        </div>
      </div>

      {/* chatting box */}
      {show && (
        <div className="bg-white px-4 pt-2 pb-4 sm:p-6 sm:pb-4 overflow-auto hover:overflow-y-scroll h-80">
          {Users.users.map((user) => {
            return (
              <div className="pb-2" key={user.id}>
                <div
                  className="sm:flex sm:items-start cursor-pointer"
                  // onClick={() => onChangeAccount(user.id)}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-4 h-4 rounded-full"
                      src={user.profilepicture}
                      alt=""
                    />
                    <div className="font-medium text-[#8F8F8F]">
                      <div>{user.name.split(" ")[0]}</div>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Chat;
