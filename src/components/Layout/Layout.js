import React from "react"
import NavBar from "../NavBar"

const Layout = ({ children }) => {
  return (
    <main className="Container">
      <NavBar />
      {children}
    </main>
  )
}

export default Layout
