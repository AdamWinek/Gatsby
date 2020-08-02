import React from "react";
import styles from "../styles/publications.module.scss";
import topnav from "../components/topnav";
import Topnav from "../components/topnav";


function Publications() {



    return (
        <div className={styles.fullBox}>
            <Topnav />

            <h1
                className={styles.publicationsH1}
            >Publications</h1>

            <div className={styles.bookBox}>
                <div className={styles.book}>
                    <img className={styles.bookImg} src={require("../images/GroupActivities.jpg")} />
                    <div>
                        <h1 className={styles.title}> Group Activities For Families in Recovery</h1>

                        <p className={styles.authors}>Joan Zimmerman</p>
                        <p className={styles.authors}> Jon Winek</p>


                    </div>
                </div>
                <div className={styles.description}>
                    <p className={styles.descriptionText}>Group Activities for Families in Recovery offers therapists a wealth of activities designed to help families struggling with addiction address problem areas of functioning, and ultimately shift from dysfunctional patterns to healthy living. Written by expert practitioners in family-oriented substance abuse treatment programs, this text focuses on group therapy as a key component to treatment.</p>
                </div>

            </div>


        </div>


    )



} export default Publications