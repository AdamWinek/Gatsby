import React, { useState } from "react"
import "../styles/index.scss"
import { useTransition, animated, config } from "react-spring"
import Topnav from "./Topnav"
import Fullnav from "./Full-nav"
import About from "./About"
import Publications from "../components/Publications"
import style from "../styles/LandingPage.module.scss"
import LandingPage  from "../components/LandingPage"
import Contact from "../components/Contact"
function NavWrapper(props) {
  const [isNav, setIsNav] = useState(false)

  const NavTransitions = useTransition(isNav, null, {
    from: { position: "absolute", opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(100%)" },
    config: config.slow,
  })
  const LandingTransitions = useTransition(!isNav, null, {
    from: { position: "absolute", opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0 },
    config: config.slow,
  })
  let inside;

  switch (props.type){
    case "LandingPage":
      inside = (<LandingPage />);
      break;
    case "Publications":
      inside = (<Publications  />);
      break;
    case "About":
      inside =  (<About />);
      break;
    case "Contact":
      inside = (<Contact />)
      break;
  
    }


  return (
    <div className={style.mainBox}>
      {NavTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <Fullnav setIsNav={() => setIsNav(false)} isNav={isNav} />
            </animated.div>
          )
      )}
      {LandingTransitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className={style.animated}>
              <div className={style.center}>
                <Topnav setIsNav={() => setIsNav(true)} isNav={isNav} />
                {inside}
              </div>
            </animated.div>
          )
      )}
    </div>
  )
}
export default NavWrapper
