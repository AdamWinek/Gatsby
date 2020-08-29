import React from "react"
import ContactBox from "./ContactBox"
import styles from "../styles/contact.module.scss"
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';

function Contact(props) {
    return (
        <div>
            <h1 className={styles.header}>Contact Me</h1>
            <div className={styles.contactsDiv}>
                <a href="tel:8282601860" className={styles.contactLink}> <ContactBox
                    icon={<PhoneOutlinedIcon className={styles.icon} />}
                    title="Phone"
                    info="828-260-1864"
                    other="Call or Text" /> </a>
                <a className={styles.contactLink} href="mailto:jwinek@charter.net"> <ContactBox
                    icon={<EmailOutlinedIcon className={styles.icon} />}
                    title="Email"
                    info="Jwinek@charter.net" /></a>
                <a className={styles.contactLink} href="https://goo.gl/maps/rJQg3iCEssGTqLWN7"><ContactBox
                    icon={<MapOutlinedIcon className={styles.icon} />}
                    title="Mailing Address"
                    info="895 State Farm Road Suite 103 Boone, North Carolina 28607" /> </a>
            </div>
            <div style={{ width: "90%", margin: "auto" }}>
                <iframe className={styles.map} title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1609.736354036707!2d-81.65685010627756!3d36.203703698470036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8850fa4f1624c4ad%3A0x51cb7fbe249e820!2sOak%20Summit%20office%20Park!5e0!3m2!1sen!2sus!4v1596515310941!5m2!1sen!2sus"  ></iframe>
            </div>
        </div>


    )

} export default Contact