import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as Divider } from '../images/divider.svg'

const SectionHeaderStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  h2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Frank Ruhl Libre';
    font-size: 5.14em;
    font-weight: 100;
    color: #af9300;
  }

  p {
    font-family: 'Roboto';
    font-size: 1.5em;
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
    padding: 4em;
    font-size: 0.6075em;

    p {
      line-height: 1.335rem;
    }
  }

  @media (min-width: 761px) {
    padding: 1rem;
    font-size: calc(0.6075em + ((1vw - 7.61px) * 0.83));

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
    font-size: 14px;

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
        align-items: flex-start;
        :after {
          content: '';
          margin-top: 10px;
          width: 30px;
          border-top: 2px solid #9f9f9f;
          left: 0;
          transform: none;
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

const DividerStyles = styled(Divider)`
  display: block;
  margin-top: 0.3em;
  transition: all 0.2s;
  max-width: 4em;

  path {
    stroke: rgb(159, 159, 159);
    stroke-width: 4px;
  }

  .divider_svg__filled {
    fill: rgb(159, 159, 159);
  }

  ${props =>
    props.white === 'true'
      ? `
          path {
            stroke: white;
          }

          .divider_svg__filled {
            fill: white;
          }
        `
      : ''}
`

const SectionHeader = props => {
  const { headerTitle, content, footer, white, children } = props

  return (
    <SectionHeaderStyles {...props}>
      <h2>
        {headerTitle}
        {!footer && <DividerStyles white={white ? 'true' : 'false'} />}
      </h2>
      {content && <p>{content}</p>}
      {children}
    </SectionHeaderStyles>
  )
}

export default SectionHeader
