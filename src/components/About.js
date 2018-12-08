import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'

const AboutStyles = styled.div`
  display: flex;
  flex-direction: row;

  .about-bg {
    position: relative;
    width: 50%;
    height: auto;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 180%
      ),
      linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 95%
      ),
      url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543266272/Barbershop/barber-1017457_1920.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;

    ::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-right: 1px solid white;
    }
  }

  .about {
    width: 50%;
    background: white;
    margin: 0 auto;
    padding: 6rem 0;
    display: flex;
    align-items: center;
    transition: all 0.5s;
  }

  .about-content {
    max-width: 600px;
    margin-left: 4rem;
    margin-right: 2rem;
  }

  @media (max-width: 760px) {
    height: 100%;
    flex-direction: column;

    .about-bg {
      width: 100%;
      min-height: 300px;

      background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 60%,
          rgba(255, 255, 255, 1) 150%
        ),
        linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 60%,
          rgba(255, 255, 255, 1) 95%
        ),
        url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543266272/Barbershop/barber-1017457_1920.jpg');
      background-size: cover;
      background-position: center;

      ::before {
        border-right: none;
        border-bottom: 1px solid white;
      }
    }

    .about {
      width: 100%;
      height: 100%;
      bottom: 0;
      padding: 0;
      align-items: flex-start;
    }

    .about-content {
      margin: 0;
    }
  }

  @media (min-width: 761px) {
    min-height: 100vh;
  }
`

const About = () => (
  <AboutStyles id="about">
    <div className="about-bg" />
    <div className="about">
      <div className="about-content">
        <SectionHeader
          headerTitle={'Our Story'}
          content={
            'Officia ea ea minim veniam non tempor do pariatur fugiat. Minim dolor enim veniam proident cupidatat quis anim culpa minim sit labore et Lorem. Ad ex consectetur elit irure ex sint nostrud consectetur proident. Reprehenderit non incididunt consequat minim exercitation reprehenderit. Ea pariatur et aliqua et enim esse in. Laboris ut eiusmod veniam consectetur eu consectetur sunt pariatur laboris. Velit ut ea irure ad et duis.'
          }
        />
      </div>
    </div>
  </AboutStyles>
)

export default About
