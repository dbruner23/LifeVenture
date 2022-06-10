import React from 'react'
import ProfileSide from '../../components/profileside/ProfileSide'
import './Home.css'

const Home = () => {
  return (
      <div className="Home">
          <ProfileSide/>
          <div className="postSide">Posts</div>
          <div className="RightSide">Content</div>
    </div>
  )
}

export default Home