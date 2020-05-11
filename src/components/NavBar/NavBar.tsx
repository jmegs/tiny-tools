import React, { ReactElement, FC } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ArrowLeft, Info } from "react-feather"

interface ButtonProps {
  icon: React.FC
  href: string
}
const NavButton = ({ icon, href }: ButtonProps) => {
  const IconComponent = icon
  return (
    <div className="NavBar-button">
      <Link href={href}>
        <a>
          <IconComponent />
        </a>
      </Link>
    </div>
  )
}

const NavTitle = () => (
  <div className="NavBar-title">
    <h1>Name Plz</h1>
  </div>
)

const NavBar = () => {
  const router = useRouter()
  const areWeHome = router.pathname === "/"
  return (
    <div className="NavBar">
      {areWeHome ? <NavTitle /> : <NavButton icon={ArrowLeft} href="/" />}
      <NavButton icon={Info} href="/about" />
    </div>
  )
}

export default NavBar
