
import React, { useState } from "react"
import '../styles/index.scss'
import {useTransition, animated} from 'react-spring'


import style from "../styles/LandingPage.module.scss"
function LandingPage() {

    const [isNav, setIstNav] = useState(false)
    const transitions = useTransition(isNav, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })



    return (


        
        < div className = { style.mainBox } >
            {
            transitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={props}>✌️</animated.div>
            )
            }
            <div className="header">

            </div>
            <div className={style.missionDiv}>
                <h1 className={style.missionH1}> Mission Statement</h1>
                <div className={style.missionBox}>
                    <p className={style.missionP}> My mission is to provide quality therapeutic services to families, couples and individuals. I assist my clients in improving their relationships and creating positive changes in their lives. Working from a holistic and developmental perspective, I assist clients to develop their full potential in order to thrive.
                    </p>
                </div>
                <button className={style.button} onClick={() => setIstNav(!isNav)}>
                    Get in Contact
                </button>



            </div>

        </div >



    )


} export default LandingPage