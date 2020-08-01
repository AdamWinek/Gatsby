
import React, { useState } from "react"
import '../styles/index.scss'
import { useTransition, animated, config } from 'react-spring'
import Topnav from "./Topnav"
import Fullnav from '../components/Full-nav'



import style from "../styles/LandingPage.module.scss"
function LandingPage() {

    const [isNav, setIsNav] = useState(false)


    const NavTransitions = useTransition(isNav, null, {
        from: { position: 'absolute', opacity: 0, transform: "translateX(100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(100%)" },
        config: config.slow,

    })
    const LandingTransitions = useTransition(!isNav, null, {
        from: { position: 'absolute', opacity: 0, transform: "translateY(100%)" },
        enter: { opacity: 1, transform: "translateY(0%)" },
        leave: { opacity: 0 },
        config: config.slow,

       
    })



    return (



        < div className={style.mainBox} >
            {
                NavTransitions.map(({ item, key, props }) =>
                    item && <animated.div key={key} style={props}>

                        <Fullnav  setIsNav={() => setIsNav(false) } isNav={isNav}/>

                    </animated.div>
                )
            }
            {LandingTransitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props}>
                    <Topnav setIsNav={() => setIsNav(true) } isNav={isNav} />
                    <div className="header">

                    </div>
                    <div className={style.missionDiv}>
                        <h1 className={style.missionH1}> Mission Statement</h1>
                        <div className={style.missionBox}>
                            <p className={style.missionP}> My mission is to provide quality therapeutic services to families, couples and individuals. I assist my clients in improving their relationships and creating positive changes in their lives. Working from a holistic and developmental perspective, I assist clients to develop their full potential in order to thrive.
                    </p>
                        </div>
                        <button className={style.button} >
                            Get in Contact
                </button>



                    </div>



                </animated.div>
            )}


        </div >



    )


} export default LandingPage