import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const FooterStyles = styled.section`
  padding: 2rem 0 4rem;
  position: relative;
  background: #282828;

  .footer-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 800px;
    margin: 0 auto;
  }

  .footer-copy {
    position: absolute;
    width: 100%;
    bottom: 3px;
    font-size: 12px;
    font-family: Roboto;
    color: #e3e3e3;
    text-align: center;
    line-height: 1.3;
    a {
      color: #e3e3e3;
    }
  }

  .footer-social {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      margin-right: 1em;
    }
    img {
      margin-bottom: 0;
      width: 24px;
      height: 24px;
      transition: all 0.2s;

      :hover {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 650px) {
    .footer-container {
      max-width: 310px;
      justify-content: space-around;
    }

    .footer-social {
      justify-content: flex-start;
      img {
        width: 18px;
        height: 18px;
      }
    }

    .footer-copy {
      font-size: 9px;
    }
  }
`

const Footer = () => {
  return (
    <FooterStyles>
      <div className="footer-container">
        <SectionHeader footer headerTitle="Hours">
          <p>Mon to Fri: 9 am - 7 pm</p>
          <p>Sat: 10 am - 5 pm</p>
          <p>Sun: Closed</p>
        </SectionHeader>
        <SectionHeader footer headerTitle="Phone">
          <p>(416) 999 9991</p>
        </SectionHeader>
        <SectionHeader footer headerTitle="Email">
          <p>barbs@shop.com</p>
        </SectionHeader>
        <SectionHeader footer headerTitle="Social">
          <div className="footer-social">
            <a href="https://www.facebook.com">
              <img
                src="https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543676885/Barbershop/facebook.svg"
                alt="Facebook"
              />
            </a>
            <a href="https://www.twitter.com">
              <img
                src="https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543676871/Barbershop/twitter.svg"
                alt="Twitter"
              />
            </a>
            <a href="https://www.instagram.com">
              <img
                src="https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543676871/Barbershop/instagram.svg"
                alt="Instagram"
              />
            </a>
          </div>
        </SectionHeader>
      </div>

      <div className="footer-copy">
        Copyright © 2018 Devang Patel. All rights reserved. Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>{' '}
        is licensed by{' '}
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
      </div>
    </FooterStyles>
  )
}

export default Footer
