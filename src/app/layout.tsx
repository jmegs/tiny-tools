import type { Metadata } from "next"
import Script from "next/script"
import NavBar from "@/components/NavBar"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Tiny Tools",
    template: "%s • Tiny Tools",
  },
  description:
    "Tools to solve tiny repetitive design problems including an aspect ratio calculator, easing curve reference, and letterspacing utility.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tinytools.design",
    siteName: "Tiny Tools",
  },
  twitter: {
    creator: "@jmegs",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noflashScript }} />
      </head>
      <body>
        <main className="Container">
          <NavBar />
          {children}
        </main>
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://cdn.usefathom.com/script.js"
            data-site="TQRPEHPT"
            data-spa="auto"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}

const noflashScript = `
(function() {
  var storageKey = 'darkMode';
  var classNameDark = 'dark-mode';
  var classNameLight = 'light-mode';

  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight);
    document.body.classList.remove(darkMode ? classNameLight : classNameDark);
  }

  var preferDarkQuery = '(prefers-color-scheme: dark)';
  var mql = window.matchMedia(preferDarkQuery);
  var supportsColorSchemeQuery = mql.media === preferDarkQuery;
  var localStorageTheme = null;
  try {
    localStorageTheme = localStorage.getItem(storageKey);
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null;
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme);
  }

  if (localStorageExists) {
    setClassOnDocumentBody(localStorageTheme);
  } else if (supportsColorSchemeQuery) {
    setClassOnDocumentBody(mql.matches);
    localStorage.setItem(storageKey, mql.matches);
  } else {
    var isDarkMode = document.body.classList.contains(classNameDark);
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
  }
})();
`
