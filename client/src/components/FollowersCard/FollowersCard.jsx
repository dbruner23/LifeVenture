import React from "react";
import "./FollowersCard.css";
import User from "../User/User"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../api/UserRequest";

const FollowersCard = () => {
  const [persons, setPersons] = useState([])
  const { user } = useSelector((state) => state.authReducer.authData)

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUsers();
      setPersons(data);
    };
    fetchPersons()
  }, []);
  
  return (
    <div className="FollowersCard">
      <h3>Fellow Adventurers...</h3>

      {persons.map((person, id) => {
           if (person._id !== user._id) {
             return <User person={person} key={id} />;
           }
      })};
    </div>
  );
};

export default FollowersCard;
