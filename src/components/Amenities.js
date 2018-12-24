import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ReactComponent as Cash } from '../images/paper-bill.svg'
import { ReactComponent as CCard } from '../images/credit-card.svg'
import { ReactComponent as Wifi } from '../images/wifi.svg'
import { ReactComponent as Subway } from '../images/subway.svg'

const AmenitiesStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 15px;
  padding: 4rem 0;
`

const AmenitiesBgStyles = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  z-index: -1;
`

const AmenitiesContainerStyles = styled.div`
  width: 100%;
  margin: 0 5em;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 761px) {
    font-size: calc(15px + ((1vw - 7.61px) * 1.35));
  }
  @media (min-width: 1130px) {
    font-size: 20px;
  }
`
const AmenitiesExampleStyles = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;
  width: 20em;
  height: 6em;
  font-family: 'Roboto';
  color: white;
  margin: 2em 0;
  padding: 1rem;
  border-radius: 2em 0;
  box-shadow: inset 0 0 1em white;
  background: rgba(0, 0, 0, 0.6);

  svg {
    width: 3em;
    margin: 0 1em;

    path {
      fill: #af9300;
    }
  }

  @media (max-width: 760px) {
    margin: 1rem 0.5rem;
  }
`

const Amenities = () => (
  <StaticQuery
    query={graphql`
      query QuoteBgQuery {
        file(relativePath: { eq: "quote.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <AmenitiesStyles>
        <AmenitiesBgStyles
          style={{ position: 'absolute' }}
          fluid={data.file.childImageSharp.fluid}
        />
        <AmenitiesContainerStyles>
          <AmenitiesExampleStyles>
            <Cash /> Take cash and debit
          </AmenitiesExampleStyles>
          <AmenitiesExampleStyles>
            <CCard /> Accept Visa and Mastercard
          </AmenitiesExampleStyles>
          <AmenitiesExampleStyles>
            <Wifi /> Free hi-speed wifi
          </AmenitiesExampleStyles>
          <AmenitiesExampleStyles>
            <Subway /> Near the subway
          </AmenitiesExampleStyles>
        </AmenitiesContainerStyles>
      </AmenitiesStyles>
    )}
  />
)

export default Amenities
