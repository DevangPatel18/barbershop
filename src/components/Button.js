import React from 'react'
import styled from 'styled-components'

const ButtonStyles = styled.div`
  margin: 1rem;

  button,
  a {
    background: none;
    padding: 0.85rem;
    border: none;
    font-family: 'Roboto';
    font-size: 1em;
    font-weight: bolder;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.2s;
    cursor: pointer;
    color: #c2a300;
    box-shadow: inset 0 0 0 5px #c2a300;

    :hover {
      box-shadow: inset 0 0 1px 2rem #c2a300;
      color: white;
    }
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
  <ButtonStyles white={props.white}>
    {props.href && <a href={props.href}>{props.text}</a>}
    {props.submit && <button type="submit">submit</button>}
  </ButtonStyles>
)

export default Button
