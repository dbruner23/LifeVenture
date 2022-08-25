import React from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import { useState, useEffect } from 'react'
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from "../../actions/AuthAction.js";

const InfoCard = () => {
  
  const [modalOpened, setModalOpened] = useState(false)

  const dispatch = useDispatch();
  const params = useParams();
  
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  const { user } = useSelector((state) => state.authReducer.authData)
  
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
  }, [user])

  const handleLogOut = () => {
    dispatch(logOut());
  }

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId ? (<div>
          <UilPen width="2rem" height="1.2rem" onClick={() => setModalOpened(true)} />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data={user} />
        </div>) : ""}
        
      </div>
      <div className="info">
        <span>
          <b>Lives in: </b>
        </span>
        <span>{profileUser.livesin !== undefined ? profileUser.livesin + ", " + profileUser.country : ""}</span>
      </div>
      <div className="info">
        <span>
          <b>Favourite Activities: </b>
        </span>
        <span>{profileUser.favActivities}</span>
      </div>
      <div className="info">
        <span>
          <b>Favourite Adventurers: </b>
        </span>
        <span>{profileUser.favAdventurers}</span>
      </div>
      <button className="button logout-button" onClick={handleLogOut}>Logout </button>
    </div>
  );
};

export default InfoCard;
