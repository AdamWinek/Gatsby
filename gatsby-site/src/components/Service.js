import React from "react"
import styles from "../styles/service.module.scss"


function Service() {
  return (
    <div className={styles.container}>

      <div>

        <h1>Services </h1>

        <p className={styles.blocktext}>
          Dr. Winek treats families, couples, and individuals from a systemic
          perspective. His work is informed by both empirical studies and
          theoretical models. He assists clients with a variety of emotional,
          personal, and relationship problems.
        </p>
        <h2>Services Offered</h2>
        <ul>
          <li className={styles.blocktext}>
            Family Therapy
            </li>
          <li className={styles.blocktext}>
            Couples Therapy
            </li>
          <li className={styles.blocktext}>
            Individual Therapy
            </li>
        </ul>
        <p className={styles.blocktext}>
          Dr. Winek does not discriminate or refuse professional services to
          anyone on the basis of race, gender, religion, national origin, sexual
          orientation or identity. If you need care at a greater level than can
          be provided in an outpatient practice, Dr. Winek will make a referral
          for appropriate care.
        </p>

        <p className={styles.blocktext}>
          Because of COVID-19, Dr. Winek is currently seeing clients on
          <a href="https://doxy.me/winekclinic"> https://doxy.me/winekclinic</a>
        </p>
      </div>
    </div>
  )
}
export default Service
