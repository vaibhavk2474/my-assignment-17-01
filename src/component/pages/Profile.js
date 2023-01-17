import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { Users } from "../../data/users";
import Avtar from "./ProfileData/Avtar";
import CompanyDetails from "./ProfileData/CompanyDetails";
import UserAddress from "./ProfileData/UserAddress";
import UserPersonalDetails from "./ProfileData/UserPersonalDetails";

function Profile() {
  const { account } = useContext(authContext);
  const [currentUserData, setCurrentUserData] = useState(null);

  useEffect(() => {
    if (account) {
      const currentUser = Users.users.find((user) => user.id === +account);
      setCurrentUserData(currentUser);
    }
  }, [account]);
  return (
    <div className="profile-container flex">
      {currentUserData && (
        <>
          <div className="profile-col-1 w-5/12">
            <div className="avtar text-center">
              <Avtar
                profilepicture={currentUserData?.profilepicture}
                name={currentUserData?.name}
              />
            </div>
            <div className="user-personal-details ">
              <UserPersonalDetails
                userName={currentUserData.username}
                email={currentUserData.email}
                phone={currentUserData.phone}
                website={currentUserData.website}
              />
            </div>
            <div className="company-details">
              <CompanyDetails company={currentUserData.company} />
            </div>
          </div>
          <div className="profile-col-2 border-l-2 w-7/12">
            <UserAddress address={currentUserData.address} />
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
