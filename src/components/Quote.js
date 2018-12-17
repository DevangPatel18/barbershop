import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const QuoteStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  font-size: 11px;
  padding: 4rem 0;

  p {
    color: white;
    font-family: Roboto;
  }

  .quote-line {
    font-size: 2.67em;
    margin: 0;
    line-height: 2em;
    text-align: center;
  }

  .quote-credit {
    font-size: 1.33em;
    margin: 0.375em;
  }

  .quote-quote {
    color: #af9300;
  }

  @media (min-width: 761px) {
    font-size: calc(11px + ((1vw - 7.61px) * 1.897));
  }

  @media (min-width: 1130px) {
    font-size: 18px;
  }
`

const QuotesBgStyles = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
  z-index: -1;
`

const Quote = () => (
  <StaticQuery
    query={graphql`
      query QuoteBgQuery {
        file(relativePath: { eq: "quote.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <QuoteStyles>
        <QuotesBgStyles
          style={{ position: 'absolute' }}
          fluid={data.file.childImageSharp.fluid}
        />
        <p className="quote-line">
          <span className="quote-quote">"</span> Looking good isn't
          self-importance;
        </p>
        <p className="quote-line">
          it's self-respect <span className="quote-quote">"</span>
        </p>
        <p className="quote-credit">- Charles Hix</p>
      </QuoteStyles>
    )}
  />
)

export default Quote
