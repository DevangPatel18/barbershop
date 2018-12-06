import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const ServicesStyles = styled.section`
  position: relative;
  height: 100vh;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(
        ellipse closest-side,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1) 100%
      ),
      url('https://res.cloudinary.com/dbeqp2lyo/image/upload/c_scale,h_1071/v1543330907/Barbershop/joshua-sorenson-637596-unsplash.jpg');
    background-size: cover;
    background-position: center;
    filter: saturate(0);
    z-index: -1;
    transition: all 0.5s;
  }

  .services {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background: white;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
  }

  .services-content {
    max-width: 450px;
    margin-left: 4rem;
    margin-right: 2rem;
  }

  ul.services-menu {
    max-width: 400px;
    font-family: 'Roboto';
    font-size: 24px;
    color: black;
    overflow-x: hidden;
    list-style: none;
    margin: 0;
    padding-top: 1em;
  }

  .services-menu {
    li {
      :before {
        float: left;
        width: 0;
        white-space: nowrap;
        color: #c2a300;
        font-size: 1em;
        font-weight: 600;
        content: '. . . . . . . . . . . . . . . . . . . . '
          '. . . . . . . . . . . . . . . . . . . . ';
      }

      margin-bottom: 1.2em;
    }

    span:first-child {
      padding-right: 0.33em;
      background: white;
    }

    span + span {
      float: right;
      padding-left: 0.33em;
      background: white;
      font-weight: 600;
    }
  }

  @media (max-width: 760px) {
    ::before {
      width: 100%;
      height: 40%;
    }

    .services {
      align-items: flex-start;
      justify-content: flex-start;
      width: 100%;
      height: calc(60vh + 3px);
      bottom: 0;

      &-content {
        margin: 0;
        .services-menu {
          li {
            max-width: 310px;
            font-size: 14px;
            margin-bottom: 0em;
          }
        }
      }
    }
  }

  @media (min-width: 761px) {
    .services-menu {
      li {
        font-size: calc(14px + ((1vw - 7.61px) * 2.71));
        margin-bottom: calc((1vw - 7.61px) * 6.5041);
      }
    }
  }

  @media (min-width: 1130px) {
    .services-menu {
      li {
        font-size: 24px;
        margin-bottom: 1.2em;
      }
    }
  }
`

const Menu = [
  { service: 'Cleanup', cost: '$15' },
  { service: 'Cut & Beard', cost: '$25' },
  { service: 'Style & Beard', cost: '$27' },
  { service: 'Cut & Shave', cost: '$35' },
  { service: 'Hot Towel Shave', cost: '$20' },
]

const Services = () => (
  <ServicesStyles id="services">
    <div className="services">
      <div className="services-content">
        <SectionHeader
          headerTitle="Services"
          content="Culpa ipsum nostrud mollit velit eu adipisicing. Nisi culpa cillum tempor culpa sit amet laboris."
        >
          <ul className="services-menu">
            {Menu.map(x => (
              <li key={x.service}>
                <span>{x.service}</span>
                <span>{x.cost}</span>
              </li>
            ))}
          </ul>
        </SectionHeader>
      </div>
    </div>
  </ServicesStyles>
)

export default Services
