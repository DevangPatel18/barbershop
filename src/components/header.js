import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const logo =
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1544991151/Barbershop/Logo.svg'

const HeaderStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #282828;
  z-index: 0;
`

const HeaderBgStyles = styled(Img)`
  width: 100%;
  height: 100%;
  filter: saturate(0) brightness(0.22);
  z-index: -1;
`

const HeaderLogoStyles = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 4rem 0;
  font-size: 20px;

  img {
    width: 300px;
    margin: 0;
  }

  p {
    font-size: 1em;
    margin: 0.5em;
  }

  .header-logo-top {
    font-family: Roboto;
    color: #af9300;
  }

  .header-logo-bottom {
    color: white;
  }

  @media (min-width: 761px) {
    img {
      width: calc(300px + ((1vw - 7.61px) * 27.1));
    }

    font-size: calc(20px + ((1vw - 7.61px) * 2.71));
  }

  @media (min-width: 1130px) {
    img {
      width: calc(400px + ((1vw - 11.3px) * 15));
    }

    font-size: 30px;
  }
`

const HeaderInfoStyles = styled.div`
  color: #b9b9b9;
  text-align: center;
  text-transform: none;
  margin: 1rem 0 2rem;
  p {
    @media (max-width: 760px) {
      font-size: 12px;
    }

    @media (min-width: 761px) {
      font-size: calc(12px + ((1vw - 7.61px) * 2.439));
    }

    @media (min-width: 1130px) {
      font-size: 21px;
    }
  }

  .divider {
    color: #af9300;

    ::before {
      content: '|';
    }
  }
`

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query HomeBgQuery {
        file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderStyles id="home">
        <HeaderBgStyles
          style={{ position: 'absolute' }}
          fluid={data.file.childImageSharp.fluid}
        />
        <HeaderLogoStyles>
          <p className="header-logo-top">traditional men's hair salon</p>
          <img src={logo} alt="logo" />
          <p className="header-logo-bottom">classic & modern cuts</p>
          <HeaderInfoStyles>
            <p>
              M - F: 9 am - 7 pm <span className="divider" /> SAT: 10 am - 5 pm{' '}
              <span className="divider" /> SUN: Closed
            </p>
            <p>
              (416) 999 9991 <span className="divider" /> barbs@shop.com
            </p>
          </HeaderInfoStyles>
          <Button href="#reservations" text="BOOK RESERVATION" />
        </HeaderLogoStyles>
      </HeaderStyles>
    )}
  />
)

export default Header
