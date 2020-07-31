import React from "react"
import topnavstyles from "../styles/topnav.module.scss"

const Topnav = (props) => {
  let navColor = "black";


  if (props.isNav) {
    navColor = "white";
  }


  return (
    <div className={topnavstyles.container}  >
      <div className={topnavstyles.logocontainer}>
        <p
          style={{ color: navColor }}

        > Jon L.<br></br>Winek<br></br>P.A.</p>
      </div>
      <div className={topnavstyles.menuspace} onClick={() => props.setIsNav()}>
        <div
          style={{ backgroundColor: navColor  }}
          className={topnavstyles.top}></div>
        <div
          style={{ backgroundColor: navColor }}

          className={topnavstyles.middle}></div>
        <div
          style={{ backgroundColor: navColor  }}

          className={topnavstyles.bottom}></div>
      </div>
    </div>
  )
}

export default Topnav
