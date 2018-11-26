import React from 'react'
import styled from 'styled-components'
import logo from '../images/Logo.svg'

const HeaderStyles = styled.div`
  position: relative;
  height: 100vh;
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
    height: 67%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .header-reserve {
    height: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 20vw;
    min-width: 350px;
    margin: 0;
  }
  
  a {
    color: white;
    background: none;
    padding: .85rem;
    border: 5px solid #c2a300;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 24px;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div className="header-logo"><img src={logo} alt="" /></div>
    <div className="header-reserve"><a href='#reservations'>BOOK RESERVATION</a></div>
  </HeaderStyles>
)

export default Header
