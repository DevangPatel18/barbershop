import React from 'react'
import styled from 'styled-components'

const SectionHeaderStyles = styled.div`
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
    }
  }
  p {
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 100;
    color: #757575;
    padding-top: 20px;
  }
`

const SectionHeader = props => {
  const { headerTitle, content } = props

  return (
    <SectionHeaderStyles>
      <h2>{headerTitle}</h2>
      <p>{content}</p>
    </SectionHeaderStyles>
  )
}

export default SectionHeader
