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
  width: 100%;
  display: flex;
  flex-direction: column;

  .contact-form-top {
    display: flex;
    justify-content: space-between;

    div {
      width: 48%;
    }
  }

  @media (max-width: 760px) {
    margin: 0;

    .contact-form-top {
      flex-direction: column;
      div {
        width: 100%;
      }
    }
  }
`

const ContactLabelStyles = styled.div`
  margin: 0.5rem 0;
  font-size: .9em;
  label {
    padding: 0.1rem 0.5rem;
    display: block;
    text-align: left;
    text-transform: capitalize;
    color: white;
    background: rgba(100, 100, 100, 0.6);
  }

  input,
  textarea {
    opacity: 0.9;
    width: 100%;
    padding: 0.3rem 0.5rem;
  }

  textarea {
    resize: none;
    box-shadow: none;
  }
`

class Contact extends Component {
  handleNumberCheck(evt) {
    var ch = String.fromCharCode(evt.which)

    if (!/[0-9]/.test(ch)) {
      evt.preventDefault()
    }
  }
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
                <ContactLabelStyles>
                  <label htmlFor="name">name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="nope"
                    required
                  />
                </ContactLabelStyles>
                <ContactLabelStyles>
                  <label htmlFor="phone">phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    autoComplete="nope"
                    onKeyPress={evt => this.handleNumberCheck(evt)}
                    required
                  />
                </ContactLabelStyles>
              </div>
              <ContactLabelStyles>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="nope"
                  required
                />
              </ContactLabelStyles>
              <ContactLabelStyles>
                <label htmlFor="subject">subject</label>
                <input type="text" id="subject" name="subject" />
              </ContactLabelStyles>
              <ContactLabelStyles>
                <label htmlFor="message">message</label>
                <textarea rows="6" id="message" name="message" required />
              </ContactLabelStyles>

              <Button submit contact/>
            </ContactFormStyles>
          </ContactStyles>
        )}
      />
    )
  }
}

export default Contact
