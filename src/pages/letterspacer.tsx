import React from 'react'
import Layout from "../components/Layout"
import LetterSpacer from "../components/LetterSpacer/LetterSpacer"
import { NextSeo } from 'next-seo'

const LetterSpacingPage = () => {
  return(
    <Layout>
      <NextSeo
        title="Spacer • Tiny Tools"
        description="Letterspace text with unicode spaces"
      />
      <LetterSpacer />
    </Layout>
    
  )
}

export default LetterSpacingPage