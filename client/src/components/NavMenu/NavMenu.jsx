import React from 'react'
import './NavMenu.css'
import {useState} from 'react'

const NavMenu = () => {
    const [dashList, setDashList] = useState(false)
    const [exploreList, setExploreList] = useState(false)
    const [supportList, setSupportList] = useState(false)  

  return (
    <div className="NavOptions">
          <div className={dashList===true ? "ActiveNavMenu" : "NavMenu"} onMouseEnter={() => setDashList(true)} onMouseLeave={() => setDashList(false)}>
            <div className="ListHeader" >
              Dashboard <i class="fa fa-caret-down"></i>
            </div>
            <div className="Dropdown" onMouseLeave={() => setDashList(false)} style={dashList ? { display: 'flex' } : { display: 'none' }}>
              <div className="DropItem">
                LifeVentures
              </div>
              <div className="DropItem">
                My Map
              </div>
              <div className="DropItem">
                My Plans
              </div>
            </div>
        </div>
          <div className={exploreList === true ? "ActiveNavMenu" : "NavMenu"} onMouseEnter={() => setExploreList(true)} onMouseLeave={() => setExploreList(false)}>
            <div className="ListHeader">
              Explore <i class="fa fa-caret-down"></i>
            </div>
            <div className="Dropdown" onMouseLeave={() => setExploreList(false)} style={exploreList ? { display: 'flex' } : { display: 'none' }}>
              <div className="DropItem">
                Search Map
              </div>
              <div className="DropItem">
                Feautred
              </div>
              <div className="DropItem">
                Groups
              </div>
            </div>
        </div>
          <div className={supportList === true ? "ActiveNavMenu" : "NavMenu"} onMouseEnter={() => setSupportList(true)} onMouseLeave={() => setSupportList(false)}>
            <div className="ListHeader">
              About <i class="fa fa-caret-down"></i>
            </div>
            <div className="Dropdown" onMouseLeave={() => setSupportList(false)} style={supportList ? { display: 'flex' } : { display: 'none' }}>
              <div className="DropItem">
                About Us
              </div>
              <div className="DropItem">
                Community
              </div>
              <div className="DropItem">
                Contact
              </div>
            </div>
        </div>
    </div>        
  )
}

export default NavMenu