import React, {useRef} from "react"
import topnavstyles from "../styles/topnav.module.scss"
import { animated, useSpring, config, useChain } from "react-spring";

const Topnav = (props) => {
  let navColor = "black";


  if (props.isNav) {
    navColor = "white";
  }

  const fadeProps = useSpring({
    from:{opacity: 1, background: 'black'},
    to:[{background: props.isNav? 'white' :'black'}, {opacity: props.isNav ? 0 : 1, background: props.isNav? 'white':'black'}],
    
    
  })

  const rotateUp = useSpring({
    from: { transform : 'rotate(0deg)  translateX(0px) translateY(0px)', background: 'black'},
    to:[{background: props.isNav? 'white':'black'}, {position: "absolute",  transform : props.isNav? 'rotate(-45deg)  translateX(7.1px) translateY(-7.1px)' : 'rotate(0deg)   translateX(0px) translateY(0px)'}] ,
    config: config.slow
  })

  
  const rotateDown = useSpring({
    from: { transform : 'rotate(0deg)  translateX(0px) translateY(0px)', background: 'black'},
    to: [{background: props.isNav? 'white':'black'},{ position: "absolute",  transform : props.isNav? 'rotate(45deg) translateY(7.1px) translateX(7.1px)' : 'rotate(0deg)  translateY(0px) translateX(0px)' }],
    config: config.slow

  })
  

  return (
    <div className={topnavstyles.container}  >
      <div className={topnavstyles.logocontainer}>
        <p
          style={{ color: navColor }}

        > Jon L.<br></br>Winek<br></br>P.A.</p>
      </div>
      <div className={topnavstyles.menuspace} onClick={() => props.setIsNav()}>
        
        <animated.div
          className={topnavstyles.top}
          style={rotateDown}
        >

        </animated.div>
         
         
         <animated.div 
         style={fadeProps}
         className={topnavstyles.middle}
         >

        </animated.div>

        <animated.div
        
        className={topnavstyles.bottom}
        style={rotateUp}>

        </animated.div>
        
       
      </div>
    </div>
  )
}

export default Topnav
