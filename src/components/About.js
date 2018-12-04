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
    transition: all 0.5s;
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
    transition: all 0.5s;
  }

  .about-content {
    max-width: 450px;
    margin-left: 4rem;
    margin-right: 2rem;
  }

  @media (max-width: 760px) {
    ::before {
      width: 100%;
      height: 40%;
    }

    .about {
      width: 100%;
      background: none;
      align-items: flex-end;
    }

    .about-content {
      height: 60%;
      font-size: 0.6075em;
      margin: 0 2rem;
      padding: 2rem 2rem 0 0;

      h2 {
        :after {
          width: 70px;
        }
      }
      p {
        line-height: 1.335rem;
      }
    }
  }

  @media (min-width: 761px) {
    .about-content {
      font-size: calc(0.6075em + ((1vw - 7.61px) * 1.626));

      h2 {
        :after {
          width: calc(70px + ((1vw - 7.61px) * 9.214))
        }
      }

      p {
        line-height: calc(1.335rem + ((1vw - 7.61px) * 4.7154));
      }
    }
  }

  @media (min-width: 1130px) {
    .about-content {
      font-size: 17px;

      h2 {
        :after {
          width: 104px;
        }
      }

      p {
        line-height: 41.4px;
      }
    }
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
