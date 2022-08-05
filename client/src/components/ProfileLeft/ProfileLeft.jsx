import React from "react";
import "../ProfileSide/ProfileSide.css";
import LogoSearch from "../LogoSearch/LogoSearch.jsx";
import InfoCard from "../InfoCard/InfoCard.jsx";
import FollowersCard from "../FollowersCard/FollowersCard.jsx";

const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
