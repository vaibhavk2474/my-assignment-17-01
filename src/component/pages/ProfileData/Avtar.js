import React from "react";

function Avtar({ profilepicture, name }) {
  return (
    <>
      <img
        type="button"
        className="w-4/12 h-4/12 m-auto rounded-full cursor-pointer text-center"
        src={profilepicture}
        alt="User profile pic"
      />
      <div className="font-medium text-[#8F8F8F]">{name}</div>
    </>
  );
}

export default Avtar;
