import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Welcome to Rooster Agency!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="randomized unsplash image!"
        src="../images/chet.jpg"
      />
      </Layout>
    </main>
  )
}
export default IndexPage