import React from "react"
import topnavstyles from "./topnav.module.scss"

const Topnav = () => {
  return (
    <div className={topnavstyles.container}>
      <div>
        <p >"Jon L. Winek"</p>
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
