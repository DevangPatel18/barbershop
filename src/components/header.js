import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const logo =
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/v1544105704/Barbershop/Logo.svg'

const HeaderStyles = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543258768/Barbershop/barber-2345701_1920.jpg');
    background-size: cover;
    background-position: center;
    filter: saturate(0) brightness(0.22);
    z-index: -1;
  }

  .header-logo {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    padding: 4rem 0;
    p {
      font-size: 20px;
      margin: 0.5em;

      @media (min-width: 761px) {
        font-size: calc(20px + ((1vw - 7.61px) * 0.863));
      }
    }

    &-top {
      font-family: Roboto;
      color: #c2a300;
    }

    &-bottom {
      color: white;
    }
  }

  .header-reserve {
    margin-top: 2rem;
  }

  .header-info {
    color: #b9b9b9;
    text-align: center;
    text-transform: none;
    p {
      @media (max-width: 760px) {
        font-size: 12px
      }

      @media (min-width: 761px) {
        font-size: calc(12px + ((1vw - 7.61px) * 2.439));
      }

      @media (min-width: 1130px) {
        font-size: 21px;
      }
    }
  }

  img {
    width: 20vw;
    min-width: 300px;
    margin: 0;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles id="home">
    <div className="header-logo">
      <p className="header-logo-top">traditional men's hair salon</p>
      <img src={logo} alt="logo" />
      <p className="header-logo-bottom">classic & modern cuts</p>
      <div className="header-info">
        <p>M - F: 9 am - 7 pm / SAT: 10 am - 5 pm / SUN: Closed</p>
        <p>(416) 999 9991 / barbs@shop.com</p>
      </div>
      <div className="header-reserve">
        <Button href="#reservations" text="BOOK RESERVATION" white />
      </div>
    </div>
  </HeaderStyles>
)

export default Header
