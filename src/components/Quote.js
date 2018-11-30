import React from 'react'
import styled from 'styled-components'

const QuoteStyles = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543327067/Barbershop/pexels-photo-1453005.jpg');
    background-size: cover;
    background-position: center;
    filter: brightness(0.6);
    z-index: -1;
  }

  p {
    color: white;
    font-family: Roboto;
  }

  .quote-line {
    font-size: 48px;
    margin-top: 1.5rem;
  }

  .quote-credit {
    font-size: 24px;
    margin-top: 0.5rem;
  }

  .quote-quote {
    color: #c2a300;
  }
`

const Quote = () => (
  <QuoteStyles>
    <p className="quote-line">
      <span className="quote-quote">"</span> Looking good isn't self-importance;
    </p>
    <p className="quote-line">
      it's self-respect <span className="quote-quote">"</span>
    </p>
    <p className="quote-credit">- Charles Hix</p>
  </QuoteStyles>
)

export default Quote
