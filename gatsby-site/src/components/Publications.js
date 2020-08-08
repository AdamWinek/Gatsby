import React from "react"
import styles from "../styles/publications.module.scss"

function Publications() {

  return (
    <div className={styles.fullBox}>
      <h1 className={styles.publicationsH1}>Publications</h1>

      <div className={styles.bookBox}>
        <div className={styles.book}>
          <div className={styles.divImg}>
            <img
              className={styles.bookImg}
              src={require("../images/GroupActivities.jpg")}
            />
          </div>
          <div className={styles.booktextdiv}>
            <h1 className={styles.title}>
              {" "}
              Group Activities For Families in Recovery
            </h1>

            <p className={styles.authors}>Joan Zimmerman</p>
            <p className={styles.authors}> Jon Winek</p>
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionText}>
            Group Activities for Families in Recovery offers therapists a wealth
            of activities designed to help families struggling with addiction
            address problem areas of functioning, and ultimately shift from
            dysfunctional patterns to healthy living. Written by expert
            practitioners in family-oriented substance abuse treatment programs,
            this text focuses on group therapy as a key component to treatment.
          </p>
        </div>
      </div>
      <div className={styles.bookBox}>
        <div className={styles.book}>
          <div className={styles.divImg}>
            <img
              className={styles.bookImg}
              src={require("../images/FamilyTherapy.jpg")}
            />
          </div>
          <div className={styles.booktextdiv}>
            <h1 className={styles.title}>
              {" "}
              Family Therapy From Theory to Practice
            </h1>
            <p className={styles.authors}> Jon Winek</p>
          </div>
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionText}>
            Family Therapy: From Theory to Practice discusses relevant theories within their historical and philosophical contexts, explores the relationships of these theories to one another, and links them to their applications in family therapy practice.
            <br></br>
            The book begins by examining the 
            shift from linear to systemic, 
            and modern to post-modern epistemology
            in the field. Subsequent sections address 
            first generation, systemic, and post-modern models
              of therapy. Specific family therapy theories discussed include psychodynamic, Bowen family systems therapy, Satir transformational and symbolic-experiential, Mental Research Institute, structural, strategic, Milan, solution-focused brief and constructivist therapy, narrative, behavioral, and cognitive-behavioral family therapy. The final section is devoted to professional processes and research and outcomes.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Publications
