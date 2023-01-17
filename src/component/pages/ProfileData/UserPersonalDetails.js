import React from "react";

function UserPersonalDetails({ userName, email, phone, website }) {
  return (
    <div className="flex m-1 border-b-2 p-1">
      <div className="text-right text-[#9C9C9C] w-2/4">
        <div className="m-1">Username : </div>
        <div className="m-1">E-mail : </div>
        <div className="m-1">Phone : </div>
        <div className="m-1">Website : </div>
      </div>
      <div className="w-2/4">
        <div className="m-1">{userName}</div>
        <div className="m-1">{email}</div>
        <div className="m-1">{phone}</div>
        <div className="m-1">{website}</div>
      </div>
    </div>
  );
}

export default UserPersonalDetails;
