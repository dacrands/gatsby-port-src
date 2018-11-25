import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Saturn from '../images/saturn.svg'
import Satellite from '../images/satellite.svg'

import Layout from '../components/layout'
import Info from '../components/info'
import ProjectOne from '../components/projects/projectOne'
import ProjectTwo from '../components/projects/projectTwo'
import ProjectThree from '../components/projects/projectThree'
import ProjectFour from '../components/projects/projectFour'
import ProjectFive from '../components/projects/projectFive'


const IndexPage = ({ data }) => (
  <Layout>
    <div className="landing__container">
      <Img
        style={{
          zIndex: "-1",
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",
          // transform: "rotateY(1s0deg)"
          bottom: "0"
        }}
        fluid={data.bgImage.childImageSharp.fluid} />
      <div className="landing">
        <div>
          <h1>David Crandall</h1>
          <h3>React / Flask developer</h3>
          <p>
            From responsive web-design to user authentication,
            I love all aspects of building a website.
          {/* I mostly use <strong>React</strong> and <strong>Flask</strong>. */}
          </p>

          <small class="cite">
            <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by Vectorpocket - Freepik.com</a>
          </small>
        </div>

        <div className="landing__center">
          <div className="landing__link">
            <a href="https://dacrands.github.io" >
              Blog <span>&rsaquo;</span>
            </a>
            <a href="https://github.com/dacrands">
              Github <span>&rsaquo;</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <Info />

    <div className="projects__container">
      <div className="projects__desc">
        <div className="container">
          <h1>Projects</h1>
          <h3>These are some of the projects I have built.</h3>
        </div>
      </div>
      <div className="projects container">
        <ProjectOne />
        <ProjectFour />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFive />
      </div>
    </div>

    <div className="contact__container">
      <Saturn className="contact__svg saturn" />
      <Satellite className="contact__svg satellite" />
      <div className="contact">
        <h1>Contact me</h1>
        <form action="">
          <label htmlFor="name">
            Name
          <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="email">
            Email
          <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="message">
            message
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          </label>
        </form>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    bgImage: file(relativePath: { eq: "12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contactImage: file(relativePath: { eq: "saturn.svg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


// *****************
// QUERY ALL IMAGES
// *****************
// export const query = graphql`
//   query imgsQuery {
//     images: allFile(filter: { relativePath: {regex:"/projects/"} }) {
//       edges {
//         node {
//           childImageSharp {
//             fluid(maxWidth: 2000) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
// }
// `