import React from "react"
import NavWrapper from "../components/NavWrapper"
import Head from "../components/Head"

import '../styles/index.scss'

export default function publications() {
  return (
          <div>
            <Head title="Publications page"></Head>
            <NavWrapper  type="Publications"/>
          </div>
  )
}