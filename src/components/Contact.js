import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'

const ContactStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8rem 0;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 35%;
    height: 100%;
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
      url('https://res.cloudinary.com/dbeqp2lyo/image/upload/c_scale,h_1080/v1543618290/Barbershop/jonathan-weiss-657313-unsplash.jpg');
    background-size: cover;
    background-position: left;
    z-index: -1;
  }

  .contact-screen {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 66%;
    height: 100%;
    background-color: white;
    z-index: 0;
  }

  .contact-form {
    text-align: center;
    font-family: 'Roboto';
    margin: 0 auto 1rem;
    max-width: 600px;
    padding: 1rem;
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
`

class Contact extends Component {
  render() {
    return (
      <ContactStyles>
        <div className="contact-screen" />
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
