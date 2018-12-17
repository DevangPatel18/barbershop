import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'
import Button from './Button'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ContactStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: white;
  z-index: 0;

  @media (max-width: 760px) {
    padding: 2rem 0;
  }
`

const ContactBackgroundStyles = styled(Img)`
  bottom: 0;
  left: 0;
  width: 500px;
  height: 650px;

  ::after {
    background-image: linear-gradient(
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
      );

    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 650px;
    border-top: 1px solid white;
  }

  @media (max-width: 760px) {
    width: 100%;

    ::after {
      width: 100%;
    }
  }

  @media (min-width: 761px) {
    height: calc(650px + ((1vw - 7.61px) * 94.85));
    width: 500px;
    box-shadow: 0 0 1px 5px white;

    ::after {
      height: calc(650px + ((1vw - 7.61px) * 94.97));
    }
  }

  @media (min-width: 961px) {
    height: 839px;

    box-shadow: 0 0 5px 5px white;

    ::after {
      height: 100%;
    }
  }
`

const ContactFormStyles = styled.form`
  text-align: center;
  font-family: 'Roboto';
  margin: 2rem 0;
  max-width: 600px;
  padding: 1rem;
  z-index: 1;
  background: rgba(100, 100, 100, 0.4);

  label {
    display: block;
    text-align: left;
    margin-bottom: 1rem;
    text-transform: capitalize;
    color: white;
  }

  .contact-form-top {
    display: flex;
    justify-content: space-between;

    label {
      width: 48%;
    }
  }

  input,
  textarea {
    opacity: 0.8;
    width: 100%;
    padding: 0.3rem 0.5rem;
    margin-top: 5px;
  }

  textarea {
    resize: none;
    box-shadow: none;
  }

  @media (max-width: 760px) {
    margin: 0;
    width: 90%;
    .contact-form-top {
      flex-direction: column;
      label {
        width: 100%;
      }
    }
  }
`

class Contact extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ContactBgQuery {
            file(relativePath: { eq: "contact.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <ContactStyles id="contact">
            <ContactBackgroundStyles
              style={{ position: 'absolute' }}
              fluid={data.file.childImageSharp.fluid}
            />
            <SectionHeader
              center
              centerText
              narrowText
              headerTitle="Contact"
              content="Ex proident dolor commodo ullamco quis officia id ad ut commodo laboris nostrud et ipsum."
            />

            <ContactFormStyles>
              <div className="contact-form-top">
                <label htmlFor="name">
                  name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="nope"
                    required
                  />
                </label>
                <label htmlFor="phone">
                  phone
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    autoComplete="nope"
                    required
                  />
                </label>
              </div>
              <label htmlFor="email">
                email
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="nope"
                  required
                />
              </label>
              <label htmlFor="subject">
                subject
                <input type="text" id="subject" name="subject" />
              </label>
              <label htmlFor="message">
                message
                <textarea rows="6" id="message" name="message" required />
              </label>
              <Button submit />
            </ContactFormStyles>
          </ContactStyles>
        )}
      />
    )
  }
}

export default Contact
