import React from "react"
import '../styles/index.scss'
import { Link } from "gatsby"
import styles from '../styles/page404.module.scss'

function Page404() {
  return (
          <div className={styles.container}> 
            <h1>404 Error</h1>
            <h3>No such page exists</h3>
            <Link to="/">Head to home page</Link>
          </div>
  )
}
export default Page404;