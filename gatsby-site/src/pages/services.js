import React from "react"
import NavWrapper from "../components/NavWrapper"
import Head from "../components/Head"
import '../styles/index.scss'

export default function services() {
    return (
            <div>
              <Head title="Services page"></Head>
              <NavWrapper  type="Services"/>
            </div>
    )
  }