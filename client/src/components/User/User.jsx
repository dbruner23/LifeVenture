import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userAction';


const User = ({ person }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.authReducer.authData);
    const [following, setFollowing] = useState(user.following.includes(person._id))
    const s3url = `https://${process.env.REACT_APP_BUCKET_NAME}.s3-${process.env.REACT_APP_BUCKET_REGION}.amazonaws.com/`

    const handleFollow = () => {
        following ?
            dispatch(unfollowUser(person._id, user)) :
            dispatch(followUser(person._id, user));
        
        setFollowing((prev)=>!prev)
    }

    return (
        <div className="follower">
            <div>
                <img src={person.profilePicture ? s3url + person.profilePicture : s3url + "defaultProfile.png"} alt="" className="followerImg" />
                <div className="name">
                    <span>{person.name}</span>
                    <span>{person.username}</span>
                </div>
            </div>
            <button className={following? "button fc-button UnfollowButton": "button fc-button"} onClick={handleFollow}>{following?"Unfollow":"Follow"}</button>
        </div>
    )
};

export default User;