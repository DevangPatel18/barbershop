import React from 'react'

import Layout from '../components/layout'
import SectionHeader from '../components/SectionHeader'

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <SectionHeader headerTitle={'About'} content={'lorem ipsum'} />
    </div>
  </Layout>
)

export default IndexPage
