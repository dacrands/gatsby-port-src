import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Img from 'gatsby-image'

const IndexPage = ({data}) => (
  <Layout>
    <Img fluid={data.bgImage.childImageSharp.fluid} />
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
    bgImage: file(relativePath: { eq: "fabrizio-verrecchia.jpg" }) {
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