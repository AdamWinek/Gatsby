import React from "react"
import aboutstyles from "../styles/about.module.scss"

const About = props => {
  return (
    <div className={aboutstyles.container}>
      <h1>About </h1>
      <h2 className={aboutstyles.name}>Dr. Winek</h2>
      <div className={aboutstyles.bio}>


        <div className={aboutstyles.content}>
          <div className={aboutstyles.profile}></div>
          <h2>Bio</h2>
          <p>
            Jon Winek is a Marriage and Family Therapist and a Professor in the
            Department of Human Development and Psychological Counseling at
            Appalachian State University. Dr. Winek received his PhD from the
            University of Southern California and has practiced
            family therapy since 1988. He is licensed as both a Marriage and
            Family Therapist and Professional Counselor in North Carolina. He is
            a Clinical Fellow and Approved Supervisor in the American
            Association for Marriage and Family Therapy.
          </p>
        </div>
      </div>
      <div className={aboutstyles.credentials}>
        <h3>Credentials</h3>
        <div>
          <ul>
            <li>
              <p className={aboutstyles.description}>
                Licensed Professional Counselor. North Carolina license number
                3515
              </p>
              <p className={aboutstyles.time}>May 2000 - Present</p>
            </li>
            <li>
              <p className={aboutstyles.description}>
                Licensed Marriage and Family Therapist. North Carolina license
                number 605
              </p>
              <p className={aboutstyles.time}>June 1995 - Present</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default About
