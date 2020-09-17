import React from "react"
import NavWrapper from "../components/NavWrapper"
import Head from "../components/Head"

import '../styles/index.scss'

export default function Home() {
  return (
          <div>
            <Head title="Home"></Head>
            <NavWrapper  type="LandingPage"/>
          </div>
  )
}
