import React from 'react'
import styled, { css } from 'styled-components'

const SectionHeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  h2 {
    font-family: 'Neuton';
    font-size: 72px;
    font-weight: 100;
    color: #c2a300;

    :after {
      content: '';
      display: block;
      margin-top: 20px;
      width: 104px;
      border-top: 3px solid #9f9f9f;
      ${props => props.center && css``};
    }

    ${props =>
      props.center &&
      css`
        text-align: center;
        :after {
          margin-left: auto;
          margin-right: auto;
        }
      `};
  }

  p {
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 100;
    color: #757575;
    padding-top: 20px;
    line-height: 2.3rem;
    margin: 0 auto;
    max-width: ${props => (props.narrowText ? '650px' : '900px')};
    text-align: ${props => (props.centerText ? 'center' : 'left')};
  }

  ${props =>
    props.white &&
    css`
      h2 {
        color: white;
        text-shadow: 1px 1px 5px black;
      }
      
      p {
        color: white;
        text-shadow: 1px 1px 5px black;
      }
    `};
`

const SectionHeader = props => {
  const { headerTitle, content } = props

  return (
    <SectionHeaderStyles {...props}>
      <h2>{headerTitle}</h2>
      <p>{content}</p>
    </SectionHeaderStyles>
  )
}

export default SectionHeader
