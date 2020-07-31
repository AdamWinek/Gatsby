import React from "react"
import Topnav from './Topnav'
import fullnavstyles from "../styles/fullnav.module.scss"

const Fullnav = ( props) => {
  return (
    <div className={fullnavstyles.container}>
        <Topnav  setIsNav={() => props.setIsNav()} isNav={props.isNav}/>
        <div className={fullnavstyles.menucontainer}>
            <div className={fullnavstyles.primary}>
                <ul>
                    <li>Contact</li>
                    <li>Bio</li>
                    <li>Qualifications</li>
                    <li>Credentials</li>
                    <li>Link to ...</li>
                </ul>
            </div>
            <div className={fullnavstyles.secondary}>
                <ul>
                    <li>Publications</li>
                    <li>Speaking</li>
                    <li>Payment</li>
                    <li>CV</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Fullnav
