import { DefaultSeo } from "next-seo"
import Head from "next/head"
import { useRouter } from "next/router"

import "../styles/main.scss"

export default function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  const ogImageUrl =
    pathname === "/" ? "img/og-image.jpg" : `img${pathname}-og-image.jpg`

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />  
      </Head>
      <DefaultSeo
        title="Tiny Tools"
        description="Tools to solve tiny repetitive design problems"
        cannonical="https://tinytools.design"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: `https://tinytools.design${pathname}`,
          site_name: "Tiny Tools",
          images: [
            {
              url: ogImageUrl,
            },
          ],
        }}
        twitter={{ handle: "@jmegs", cardType: "summary_large_image" }}
      />
      <Component {...pageProps} />
    </>
  )
}
