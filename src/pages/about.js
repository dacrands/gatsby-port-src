import React from 'react'
import { StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'


const SecondPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
      query {
        aboutImage: file(relativePath: { eq: "11.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
      render={data =>
        <div className="about">
          <div className="about__img">
            <Img
              className="about__img-img"
              style={{                              
                position: "absolute",
                zIndex: "-1",
                top: "0",                
                right: "0",
                left: "0",
              }}
              fluid={data.aboutImage.childImageSharp.fluid} />
          </div>
          <div className="about__text">
            <div>
            <h1>Hello</h1>
            <h3>I love to program</h3>
            <p>
              I've always been mystified by the
              browser. How does it work? 
              What is a website?
              Ultimately, it is this curiosity 
              with the enigmatic nature of the internet that drives
              me to build websites.
            </p>
            <h1>Full stack developer</h1>
            <h3>React/Flask</h3>
            <p>
              I really wanted to be a either a backend 
              developer or a frontend developer. 
              I was hoping somewhere along my programming journey
              I'd fall in love with one over the other, but no 
              such luck. That's why I am a full-stack developer &mdash; 
              because it's too much fun doing both.
            </p>
            <h1>Skills</h1>
            <h3>What I do</h3>
            <ul>
              <li>
                <strong>General:</strong> Ajax, RESTful APIs, 
                Responsive web-design, 
                public-speaking
              </li>
              <li>
                <strong>Languages:</strong> Python, JavaScript, CSS, HTML
              </li>
              <li>
                <strong>Libraries:</strong> React, Flask, Redux, Webpack
              </li>
              <li>
                <strong>Tools/Hosting:</strong> Git/Github, 
                Postman, Digitalocean, Heroku, Gitpages, Netlify
              </li>
            </ul>
            </div>          
          </div>
        </div>
      }
    />
  </Layout>
)

export default SecondPage
