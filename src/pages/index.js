import React from 'react'
import Layout from '../components/layout'
import About from '../components/About'
import Quote from '../components/Quote'
import Services from '../components/Services'

const IndexPage = () => (
  <Layout>
    <About />
    <Quote />
    <Services />
  </Layout>
)

export default IndexPage
