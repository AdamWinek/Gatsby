import React from "react"
import NavWrapper from "../components/NavWrapper"
import Head from "../components/Head"

import '../styles/index.scss'

export default function about() {
  return (
          <div>
            <Head title="About page"></Head>
            <NavWrapper  type="About"/>
          </div>
  )
}