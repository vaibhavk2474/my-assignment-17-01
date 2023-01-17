import React, { useContext } from "react";
import { authContext } from "../../../context/AuthContext";
import { Users } from "../../../data/users";

function Account({ user }) {
  const { onChangeAccount } = useContext(authContext);
  return (
    <div className="pb-2">
      <div
        className="sm:flex sm:items-start cursor-pointer"
        onClick={() => onChangeAccount(user.id)}
      >
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={user.profilepicture}
            alt=""
          />
          <div className="font-medium text-[#8F8F8F]">
            <div>{user.name}</div>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Account;
