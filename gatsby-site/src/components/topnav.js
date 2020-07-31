import React from "react"
import topnavstyles from "../styles/topnav.module.scss"

const Topnav = () => {
  return (
    <div className={topnavstyles.container}>
      <div className={topnavstyles.logocontainer}>
        <p >Jon L.<br></br>Winek<br></br>P.A.</p>
      </div>
      <div className={topnavstyles.menuspace}>
        <div className={topnavstyles.top}></div>
        <div className={topnavstyles.middle}></div>
        <div className={topnavstyles.bottom}></div>
      </div>
    </div>
  )
}

export default Topnav
