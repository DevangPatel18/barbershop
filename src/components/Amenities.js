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
  min-height: 40vh;
  font-size: 15px;
  padding: 4rem 0;
`

const AmenitiesBgStyles = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.3);
  z-index: -1;
`

const AmenitiesContainerStyles = styled.div`
  width: 100%;
  margin: 0 5em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (min-width: 761px) {
    font-size: calc(15px + ((1vw - 7.61px) * 1.35));
  }
  @media (min-width: 1130px) {
    font-size: 20px;
  }
`
const AmenitiesItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 7em;
  font-family: 'Roboto';
  color: white;
  margin: 0 2.5em;

  svg {
    width: 100%;
    padding: 1.5em 0;

    path {
      fill: #af9300;
    }
  }

  @media (max-width: 760px) {
    width: 5em;
    margin: 0rem 3rem;
  }
`

const AmenitiesItemTextStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
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
          <AmenitiesItemStyles>
            <Cash />{' '}
            <AmenitiesItemTextStyles>
              Take cash and debit
            </AmenitiesItemTextStyles>
          </AmenitiesItemStyles>
          <AmenitiesItemStyles>
            <CCard />{' '}
            <AmenitiesItemTextStyles>
              Accept Visa and Mastercard
            </AmenitiesItemTextStyles>
          </AmenitiesItemStyles>
          <AmenitiesItemStyles>
            <Wifi />{' '}
            <AmenitiesItemTextStyles>
              Free hi-speed wifi
            </AmenitiesItemTextStyles>
          </AmenitiesItemStyles>
          <AmenitiesItemStyles>
            <Subway />{' '}
            <AmenitiesItemTextStyles>Near the subway</AmenitiesItemTextStyles>
          </AmenitiesItemStyles>
        </AmenitiesContainerStyles>
      </AmenitiesStyles>
    )}
  />
)

export default Amenities
