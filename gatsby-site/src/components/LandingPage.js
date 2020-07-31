import React from "react"
import '../styles/index.scss'

import style from "../styles/LandingPage.module.scss"
function LandingPage() {

    return (
        <div className={style.mainBox}>
            <div className="header">

            </div>
            <div className={style.missionDiv}>
                <h1 className={style.missionH1}> Mission Statement</h1>
                <div className={style.missionBox}>
                    <p className={style.missionP}> My mission is to provide quality therapeutic services to families, couples and individuals. I assist my clients in improving their relationships and creating positive changes in their lives. Working from a holistic and developmental perspective, I assist clients to develop their full potential in order to thrive.
                    </p>
                </div>
                <button className={style.button}>
                    Get in Contact
                </button>



            </div>

        </div>



    )


} export default LandingPage