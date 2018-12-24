import React from 'react'
import Layout from '../components/layout'
import About from '../components/About'
import Amenities from '../components/Amenities'
import Services from '../components/Services'
import Reservations from '../components/Reservations'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Services />
    <Amenities />
    <About />
    <Reservations />
    <Gallery />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
