import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../components/SectionHeader'

const AboutStyles = styled.div`
  position: relative;
  height: 100vh;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 51%;
    height: 100%;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 180%
      ), linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 95%
      ),
      url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543266272/Barbershop/barber-1017457_1920.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .about {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background: white;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .about-content {
    max-width: 450px;
    margin-left: 4rem;
    margin-right: 2rem;
  }
`

const About = () => (
  <AboutStyles id="about">
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
