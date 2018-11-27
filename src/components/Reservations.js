import React from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'
import Button from './Button'

const ReservationsStyles = styled.section`
  position: relative;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('https://res.cloudinary.com/dbeqp2lyo/image/upload/v1543343106/Barbershop/pexels-photo-1319459.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`

const Reservations = () => {
  return (
    <ReservationsStyles id="reservations">
      <SectionHeader
        white
        center
        headerTitle="Reservations"
        content="Proident adipisicing duis id dolor non occaecat ea pariatur mollit deserunt consectetur proident minim incididunt."
      />
      <div>
        <Button href="#" text="RESERVE" />
      </div>
    </ReservationsStyles>
  )
}

export default Reservations
