import React from 'react'

import Layout from '../components/layout'
import Landing from '../components/landing'
import Info from '../components/info'
import Projects from '../components/projects/projects'
import Contact from '../components/contact'

const IndexPage = () => (
  <Layout>
    <Landing />
    <Info />   
    <Projects />     
    <Contact />  
  </Layout>
)

export default IndexPage
