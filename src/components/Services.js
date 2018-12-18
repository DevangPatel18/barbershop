import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ServicesStyles = styled.section`
  display: flex;
  flex-direction: row;

  @media (max-width: 760px) {
    height: 100%;
    flex-direction: column-reverse;
  }

  @media (min-width: 761px) {
    min-height: 100vh;
  }
`

const ServicesContainerStyles = styled.div`
  position: relative;
  width: 50%;
  background: white;
  margin: 0 auto;
  padding: 6rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  ::before {
    display: none;
  }

  .services-content {
    max-width: 450px;
    margin-left: 4rem;
    margin-right: 2rem;
  }

  @media (max-width: 760px) {
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 0;

    ::before {
      display: block;
      position: absolute;
      top: -1px;
      content: '';
      width: 100%;
      border-top: 3px solid white;
      z-index: 1;
    }

    .services-content {
      margin: 0;
    }
  }
`

const ServicesBackgroundStyles = styled(Img)`
  width: 50%;
  filter: saturate(0);

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-image: radial-gradient(
      ellipse closest-side,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1) 100%
    );
    transition: all 0.5s;

    width: 100%;
    height: 100%;
    border-left: 1px solid white;
  }

  @media (max-width: 760px) {
    width: 100%;
    height: 300px;

    ::after {
      border-left: none;
    }
  }
`

const ServicesMenuStyles = styled.ul`
  max-width: 400px;
  font-family: 'Roboto';
  font-size: 24px;
  color: black;
  overflow-x: hidden;
  list-style: none;
  margin: 0;
  padding-top: 1em;

  span:first-child {
    padding-right: 0.33em;
    background: white;
  }

  span + span {
    float: right;
    padding-left: 0.33em;
    background: white;
    font-weight: 600;
  }
`

const ServicesMenuItemStyles = styled.li`
  :before {
    float: left;
    width: 0;
    white-space: nowrap;
    color: #af9300;
    font-size: 1em;
    font-weight: 600;
    content: '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . ';
  }

  margin-bottom: 1.2em;

  @media (max-width: 760px) {
    max-width: 310px;
    font-size: 14px;
    margin-bottom: 0em;
  }

  @media (min-width: 761px) {
    font-size: calc(14px + ((1vw - 7.61px) * 2.71));
    margin-bottom: calc((1vw - 7.61px) * 6.5041);
  }

  @media (min-width: 1130px) {
    font-size: 24px;
    margin-bottom: 1.2em;
  }
`

const Menu = [
  { service: 'Cleanup', cost: '$15' },
  { service: 'Cut & Beard', cost: '$25' },
  { service: 'Style & Beard', cost: '$27' },
  { service: 'Cut & Shave', cost: '$35' },
  { service: 'Hot Towel Shave', cost: '$20' },
]

const Services = () => (
  <StaticQuery
    query={graphql`
      query ServicesBgQuery {
        file(relativePath: { eq: "services.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <ServicesStyles id="services">
        <ServicesContainerStyles>
          <div className="services-content">
            <SectionHeader
              headerTitle="Services"
              content="Culpa ipsum nostrud mollit velit eu adipisicing. Nisi culpa cillum tempor culpa sit amet laboris."
            >
              <ServicesMenuStyles>
                {Menu.map(x => (
                  <ServicesMenuItemStyles key={x.service}>
                    <span>{x.service}</span>
                    <span>{x.cost}</span>
                  </ServicesMenuItemStyles>
                ))}
              </ServicesMenuStyles>
            </SectionHeader>
          </div>
        </ServicesContainerStyles>
        <ServicesBackgroundStyles fluid={data.file.childImageSharp.fluid} />
      </ServicesStyles>
    )}
  />
)

export default Services
