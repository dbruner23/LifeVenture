import React from "react";
import { useState } from 'react';
import "./RightSide.css";
import TrendCard from "../TrendCard/TrendCard.jsx";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import ShareModal from "../ShareModal/ShareModal";
import { Link } from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <div className="RightSide">
      <div className="navIcon">
        <Link to = '/home'>
          <img src={Home} />
        </Link>
        <UilSetting />
        <img src={Noti} />
        <img src={Comment} />
      </div>
      <TrendCard />
      <button className="button r-button" onClick={() => setModalOpened(true)}>Share</button>
      <ShareModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
    </div>
  );
};

export default RightSide;
