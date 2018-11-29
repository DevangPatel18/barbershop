import React from 'react'
import Layout from '../components/layout'
import About from '../components/About'
import Quote from '../components/Quote'
import Services from '../components/Services'
import Reservations from '../components/Reservations'
import Gallery from '../components/Gallery'

const IndexPage = () => (
  <Layout>
    <About />
    <Quote />
    <Services />
    <Reservations />
    <Gallery />
  </Layout>
)

export default IndexPage
