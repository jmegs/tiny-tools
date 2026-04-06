"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useSyncExternalStore } from "react"
import * as Icons from "./Icons"

function NavButton({ icon: IconComponent, href }: { icon: React.FC; href: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <div className={`NavBar-button ${isActive ? "isActive" : ""}`}>
      <Link href={href}>
        <IconComponent />
      </Link>
    </div>
  )
}

function useDarkMode() {
  const subscribe = useCallback((callback: () => void) => {
    // Listen for storage changes and class mutations
    const observer = new MutationObserver(callback)
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  const getSnapshot = useCallback(() => {
    return document.body.classList.contains("dark-mode")
  }, [])

  const getServerSnapshot = useCallback(() => false, [])

  const isDark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const toggle = useCallback(() => {
    const next = !document.body.classList.contains("dark-mode")
    document.body.classList.toggle("dark-mode", next)
    document.body.classList.toggle("light-mode", !next)
    try {
      localStorage.setItem("darkMode", JSON.stringify(next))
    } catch {}
  }, [])

  return { value: isDark, toggle }
}

function DarkModeButton() {
  const darkMode = useDarkMode()

  return (
    <div className="NavBar-button">
      <button className="UnstyledButton" onClick={darkMode.toggle}>
        {darkMode.value ? <Icons.Sun /> : <Icons.Moon />}
      </button>
    </div>
  )
}

export default function NavBar() {
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
