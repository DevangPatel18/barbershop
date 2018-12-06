import React from 'react'
import styled, { css } from 'styled-components'

const SectionHeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  padding: 2em;

  h2 {
    font-family: 'Neuton';
    font-size: 4.23em;
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
  }

  p {
    font-family: 'Roboto';
    font-size: 1.41em;
    font-weight: 100;
    color: #757575;
    padding-top: 20px;
    line-height: 2.3rem;
    max-width: ${props => (props.narrowText ? '650px' : '900px')};
    text-align: ${props => (props.centerText ? 'center' : 'left')};
  }

  ${props =>
    props.center &&
    css`
      h2 {
        text-align: center;
        :after {
          margin: 20px auto 0;
        }
      }

      p {
        margin: 0 auto;
      }
    `};

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

  @media (max-width: 760px) {
    font-size: 0.6075em;

    h2 {
      :after {
        width: 70px;
      }
    }

    p {
      line-height: 1.335rem;
    }
  }

  @media (min-width: 761px) {
    font-size: calc(0.6075em + ((1vw - 7.61px) * 1.626));

    h2 {
      :after {
        width: calc(70px + ((1vw - 7.61px) * 9.214));
      }
    }

    p {
      line-height: calc(1.335rem + ((1vw - 7.61px) * 4.7154));
    }
  }

  @media (min-width: 1130px) {
    font-size: 17px;

    h2 {
      :after {
        width: 104px;
      }
    }

    p {
      line-height: 41.4px;
    }
  }

  ${props =>
    props.footer &&
    css`
      h2 {
        font-size: 24px;
        :after {
          margin-top: 10px;
          width: 30px;
          border-top: 2px solid #9f9f9f;
        }
      }

      p {
        font-size: 14px;
        color: white;
        margin: 0;
        padding: 0;
        line-height: 1.3;
      }

      @media (max-width: 650px) {
        padding: 0 0 1.5em;
        width: 130px;
        h2 {
          font-size: 20px;
        }

        p {
          font-size: 12px;
        }
      }
    `};
`

const SectionHeader = props => {
  const { headerTitle, content } = props

  return (
    <SectionHeaderStyles {...props}>
      <h2>{headerTitle}</h2>
      {content && <p>{content}</p>}
      {props.children}
    </SectionHeaderStyles>
  )
}

export default SectionHeader
