import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const AboutStyles = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 760px) {
    height: 100%;
    flex-direction: column;
  }

  @media (min-width: 761px) {
    min-height: 100vh;
  }
`

const AboutBackgroundStyles = styled(Img)`
  width: 50%;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 180%
      ),
      linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 95%
      );
    border-right: 1px solid white;
  }

  @media (max-width: 760px) {
    width: 100%;
    min-height: 300px;

    ::after {
      background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 60%,
          rgba(255, 255, 255, 1) 150%
        ),
        linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 60%,
          rgba(255, 255, 255, 1) 95%
        );

      border-right: none;
      border-bottom: 1px solid white;
    }
  }
`

const AboutContainerStyles = styled.div`
  width: 50%;
  background: white;
  margin: 0 auto;
  padding: 6rem 0;
  display: flex;
  align-items: center;
  transition: all 0.5s;

  .about-content {
    max-width: 600px;
    margin-left: 4rem;
    margin-right: 2rem;
  }

  @media (max-width: 760px) {
    width: 100%;
    height: 100%;
    bottom: 0;
    padding: 0;
    align-items: flex-start;

    .about-content {
      margin: 0;
    }
  }
`

const About = () => (
  <StaticQuery
    query={graphql`
      query HomepageQuery {
        file(relativePath: { eq: "about.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AboutStyles id="about">
        <AboutBackgroundStyles fluid={data.file.childImageSharp.fluid} />
        <AboutContainerStyles>
          <div className="about-content">
            <SectionHeader
              headerTitle={'Our Story'}
              content={
                'Officia ea ea minim veniam non tempor do pariatur fugiat. Minim dolor enim veniam proident cupidatat quis anim culpa minim sit labore et Lorem. Ad ex consectetur elit irure ex sint nostrud consectetur proident. Reprehenderit non incididunt consequat minim exercitation reprehenderit. Ea pariatur et aliqua et enim esse in. Laboris ut eiusmod veniam consectetur eu consectetur sunt pariatur laboris. Velit ut ea irure ad et duis.'
              }
            />
          </div>
        </AboutContainerStyles>
      </AboutStyles>
    )}
  />
)

export default About
