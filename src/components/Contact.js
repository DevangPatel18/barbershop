import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const contactImg =
  'https://res.cloudinary.com/dbeqp2lyo/image/upload/c_scale,h_1080/v1543618290/Barbershop/jonathan-weiss-657313-unsplash.jpg'

const ContactStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 650px;
    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 30%,
        rgba(255, 255, 255, 1) 95%
      ),
      linear-gradient(
        to top,
        rgba(255, 255, 255, 0) 80%,
        rgba(255, 255, 255, 1) 100%
      ),
      linear-gradient(
        45deg,
        rgba(255, 255, 255, 0) 50%,
        rgba(255, 255, 255, 1) 100%
      ),
      url(${contactImg});
    background-size: cover;
    background-position: left;
    z-index: -1;
  }

  .contact-form {
    text-align: center;
    font-family: 'Roboto';
    margin: 0 auto;
    max-width: 600px;
    padding: 0 1rem;
    z-index: 1;

    &-top {
      display: flex;
      justify-content: space-between;
      input[id='name'],
      input[id='phone'] {
        width: 48%;
      }
    }

    input,
    textarea {
      opacity: 0.8;
      width: 100%;
      padding: 0.3rem 0.5rem;
      margin-top: 1.2rem;
      border: 1px solid black;
    }

    input[type='submit'] {
      width: auto;
      font-size: 1.3rem;
      font-weight: bolder;
      padding: 1rem;
      background: white;
      border: 5px solid #c2a300;

      &:hover,
      &:focus {
        cursor: pointer;
      }
    }

    ::placeholder {
      color: #9f9f9f;
    }

    textarea {
      resize: none;
    }
  }

  @media (max-width: 760px) {
    padding: 4rem 0;

    ::before {
      width: 100%;
    }

    .contact-form-top {
      flex-direction: column;
      input[id='name'],
      input[id='phone'] {
        width: 100%;
      }
    }
  }
`

class Contact extends Component {
  render() {
    return (
      <ContactStyles id="contact">
        <SectionHeader
          center
          centerText
          narrowText
          headerTitle="Contact"
          content="Ex proident dolor commodo ullamco quis officia id ad ut commodo laboris nostrud et ipsum."
        />

        <form className="contact-form">
          <div className="contact-form-top">
            <input
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              autoComplete="nope"
              required
            />
            <input
              type="text"
              placeholder="Phone"
              id="phone"
              name="phone"
              autoComplete="nope"
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            autoComplete="nope"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
          />
          <textarea
            rows="6"
            placeholder="Message"
            id="message"
            name="message"
            required
          />
          <input type="submit" id="submit" name="submit" value="Submit" />
        </form>
      </ContactStyles>
    )
  }
}

export default Contact
