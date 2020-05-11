import React from "react"
import Layout from "../components/Layout"
import NavBar from "../components/NavBar"

const AboutPage = () => {
  return (
    <Layout>
      <div className="Grid About">
        <div className="About-blurb">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            sapiente officiis adipisci minus obcaecati delectus rerum enim,
            iusto repellat tenetur laboriosam. Aspernatur officiis placeat
            cupiditate possimus magnam obcaecati, illo deserunt.
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
