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
        font-size: 24px;
        font-weight: 600;
        content: '. . . . . . . . . . . . . . . . . . . . '
          '. . . . . . . . . . . . . . . . . . . . ';
      }

      padding: 0.3em 0;
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
        />
        <ul className="services-menu">
          {Menu.map(x => (
            <li key={x.service}>
              <span>{x.service}</span>
              <span>{x.cost}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </ServicesStyles>
)

export default Services
