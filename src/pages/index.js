import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
    
    <div
    className="projects"
      style={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "1rem",
        paddingBottom: "1rem"
      }}
    >

      <ProjectOne />
      <ProjectFour />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFive />
      {/* <ProjectThree />
      <ProjectThree /> */}
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