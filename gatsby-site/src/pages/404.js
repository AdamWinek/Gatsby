import React from "react"
import NavWrapper from "../components/NavWrapper"
import Head from "../components/Head"

import '../styles/index.scss'

export default function Page404() {
  return (
          <div>
            <Head title="Page not found"></Head>
            <NavWrapper  type="404Page"/>
          </div>
  )
}


