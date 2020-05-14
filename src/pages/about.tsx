import React from "react"
import Layout from "../components/Layout"
import { NextSeo } from "next-seo"

const AboutPage = () => {
  return (
    <Layout>
      <NextSeo title="About" titleTemplate="%s • Tiny Tools" />
      <div className="Grid About">
        <div className="About-blurb">
          <p>
            Product designers encounter little moments of friction every day –
            figuring out the height of that 16x9 image, remembering what
            "ease-in-expo" looks like, formatting text in Google Slides. Tiny
            Tools is my attempt to solve those little moments of friction.
          </p>
        </div>
        <div className="About-credits">
          <div>
            made by <a href="https://johnmeguerian.com">John Meguerian</a>
          </div>
          <div>
            with <a href="https://nextjs.org">Next</a> and ♥️
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
