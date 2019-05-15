import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const logo =
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1545150764/Barbershop/Logo.svg'

const HeaderStyles = styled.div`
  position: relative;
  background: #282828;
  z-index: 0;
`

const HeaderBgStyles = styled(Img)`
  width: 100%;
  height: 100%;
  filter: saturate(0) brightness(0.22);
  z-index: -1;
`

const HeaderContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  min-height: 100vh;
`

const HeaderLogoStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
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
    font-family: 'Frank Ruhl Libre';
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
      width: calc(400px + ((1vw - 11.3px) * 10));
    }

    font-size: 30px;
  }
`

const HeaderInfoStyles = styled.div`
  color: white;
  text-align: center;
  text-transform: none;
  margin: 2rem 0;
  font-family: 'Frank Ruhl Libre';

  p {
    margin: 0.5em 0;

    @media (max-width: 760px) {
      font-size: 14px;
    }

    @media (min-width: 761px) {
      font-size: calc(14px + ((1vw - 7.61px) * 1.9));
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
        <HeaderContainerStyles>
          <HeaderLogoStyles>
            <p className="header-logo-top">traditional men's hair salon</p>
            <img src={logo} alt="logo" />
            <p className="header-logo-bottom">classic & modern cuts</p>
          </HeaderLogoStyles>
          <HeaderInfoStyles>
            <p>
              M - F: 9 am - 7 pm <span className="divider" /> SAT: 10 am - 5 pm{' '}
              <span className="divider" /> SUN: Closed
            </p>
            <p>
              652 Auburn Street <span className="divider" /> (416) 999 9991{' '}
            </p>
            <p>barbs@shop.com</p>
          </HeaderInfoStyles>
          <Button href="#reservations" text="BOOK RESERVATION" />
        </HeaderContainerStyles>
      </HeaderStyles>
    )}
  />
)

export default Header
