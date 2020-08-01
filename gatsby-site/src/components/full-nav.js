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
                    <li>About</li>
                    <li>Speaking</li>
                </ul>
            </div>
            <div className={fullnavstyles.secondary}>
                <ul>
                    <li>Publications</li>
                    <li>Payment</li>
                    <li>CV</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Fullnav
