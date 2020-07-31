import React from "react"
import LandingPage from "../components/LandingPage"
import Topnav from "../components/topnav"
import Fullnav from '../components/full-nav'
import '../styles/index.scss'

export default function Home() {
  return (
          <div>
            <Topnav />
            <LandingPage />
            <Fullnav />
          </div>
  )
}
