import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
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
          <h3>Full-stack developer</h3>
          <p>
            From responsive web-design to user authentication,
            I love all aspects of building a website.
          My primary tools are <strong>React</strong> and <strong>Flask</strong>.
          Thanks for stopping by!</p>
        </div>

        

        {/* <h3>I build websites that are out 
          of this world
        </h3> */}
        
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

    <div className="info">
          <div className="info__item">
            <h1>Frontend</h1>
            <p>
              My sites are fast, responsive, and
              accessible.
              I spend most of time developing
              with <strong>React.</strong> This
              site uses <strong>GatsbyJS</strong>,
              a React static site generator. I 
              also use templates, e.g., <strong>Jinja2.</strong>
            </p>
          </div>
          <div className="stick"></div>
          <div className="info__item">
            <h1>Backend</h1>
            <p>
              I build <strong>Flask</strong> apps that
              use <strong>postgresql</strong> databases. 
              My applications 
              feature <strong>email-authentication (sendgrid), JSON Web Tokens,
              </strong> and <strong>Bcrypt.</strong> 

            </p>
          </div>
        </div>
    <div
      style={{
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#f1f1f1",
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
    {/* {
        data.images.edges.map(node => {

          return <Img 
          fluid={node.node.childImageSharp.fluid} />
        })
      }                  */}
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