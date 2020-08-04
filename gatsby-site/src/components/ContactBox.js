import React from "react"
import styles from "../styles/contact.module.scss"



function ContactBox(props){

    let other = null;
    if(props.other !== ""){
        other = <p className={styles.infoText}> {props.other}</p>
    }


    return(
        <div className={styles.contactDiv}>
            {props.icon}
            <div className={styles.infoDiv}>
                <h1 className={styles.infoTitle}>{props.title}</h1>
                <p className={styles.infoText}>{props.info}</p>
                {other}
            </div>

        </div>
    )

} export default ContactBox