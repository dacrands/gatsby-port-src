import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Landing = () => (
    <StaticQuery
    query={graphql`
      query {
        bgImage: file(relativePath: { eq: "12.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
    <div className="landing__container">
      <Img
        style={{
          zIndex: "-1",
          position: "absolute",
          top: "0",
          right: "0",
          left: "0",          
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
    }
    />
);

export default Landing;
