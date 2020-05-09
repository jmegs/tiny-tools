import React from "react"

import "../../styles/main.scss"

import NavBar from "../NavBar"


const Layout = ({ children }) => {
  return (
    <main className="Container">
      <NavBar />
      { children }
    </main>
  )
}

export default Layout
