import React from 'react'
import styled from 'styled-components'

const ButtonStyles = styled.div`
  a {
    color: white;
    background: none;
    padding: 0.85rem;
    border: 5px solid #c2a300;
    font-family: 'Roboto';
    font-size: 24px;
    text-decoration: none;
    text-shadow: 1px 1px 5px black;
  }
`

const Button = props => (
  <ButtonStyles>
    <a href={props.href}>{props.text}</a>
  </ButtonStyles>
)

export default Button
