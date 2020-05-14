import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import useDarkMode from "use-dark-mode"

import * as Icons from "../Icons"

interface ButtonProps {
  icon: React.FC
  href: string
}

const NavButton = ({ icon, href }: ButtonProps) => {
  const IconComponent = icon
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <div className={`NavBar-button ${isActive ? "isActive" : ""}`}>
      <Link href={href}>
        <a>
          <IconComponent />
        </a>
      </Link>
    </div>
  )
}

const DarkModeButton = () => {
  const darkMode = useDarkMode(false)
  
  return (
    <div className="NavBar-button">
      <button className="UnstyledButton" onClick={darkMode.toggle}>
        { darkMode.value ? <Icons.Sun /> : <Icons.Moon />}
      </button>
    </div>
  )
}

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavButton href="/" icon={Icons.Home} />
      <NavButton href="/ratio" icon={Icons.Ratio} />
      <NavButton href="/easing" icon={Icons.Curve} />
      <NavButton href="/letterspacer" icon={Icons.Spacer} />
      <div className="NavBar-flexSpace" />
      <DarkModeButton />
      <NavButton href="/about" icon={Icons.Help} />
    </div>
  )
}

export default NavBar
