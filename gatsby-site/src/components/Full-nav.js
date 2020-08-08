import React from "react"
import Topnav from './Topnav'
import fullnavstyles from "../styles/fullnav.module.scss"
import { Link } from "gatsby"


const Fullnav = ( props) => {
  return (

    <div className={fullnavstyles.container}>
        <Topnav  setIsNav={() => props.setIsNav()} isNav={props.isNav}/>
        <div className={fullnavstyles.menucontainer}>
            <div className={fullnavstyles.primary}>
                <ul>
                    <Link className={fullnavstyles.links} to="/contact" ><li>Contact</li></Link>
                    <Link  className={fullnavstyles.links} to="/about" ><li>About</li></Link>
                    <Link className={fullnavstyles.links} to="/services"><li>Services</li></Link>
                </ul>
            </div>
            <div className={fullnavstyles.secondary}>
                <ul>
                    <Link  className={fullnavstyles.links} to="/publications"><li>Publications</li></Link>
                    {/* <Link className={fullnavstyles.links} to="/payment"><li>Payment</li></Link> */}
                    <a  className={fullnavstyles.links} href="/cv.pdf"><li>CV</li></a>
                </ul>
            </div>
        </div>
    </div>
   
  )
}

export default Fullnav
