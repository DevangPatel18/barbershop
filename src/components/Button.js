import React from 'react'
import styled from 'styled-components'

const ButtonStyles = styled.div`
  margin: 1rem;
  a {
    color: white;
    background: none;
    padding: 0.85rem;
    border: 5px solid #c2a300;
    font-family: 'Roboto';
    font-size: 1em;
    text-decoration: none;
    text-shadow: 1px 1px 5px black;
  }

  @media (max-width: 760px) {
    font-size: 15px;
  }

  @media (min-width: 761px) {
    font-size: calc(15px + ((1vw - 7.61px) * 2.439));
  }

  @media (min-width: 1130px) {
    font-size: 24px;
  }
`

const Button = props => (
  <ButtonStyles>
    <a href={props.href}>{props.text}</a>
  </ButtonStyles>
)

export default Button
