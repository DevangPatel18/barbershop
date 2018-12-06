import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'
import Button from './Button'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'
const MINUTE_INCREMENT = 20

const ReservationsStyles = styled.section`
  position: relative;
  padding: 8rem;
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

  .reservations-form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 3em;

    input {
      font-family: Roboto;
      font-size: 1em;
      padding: 0.833em;
      width: 16em;
      text-align: center;
      font-weight: bolder;
      border: 1px solid black;
    }
  }

  @media (max-width: 760px) {
    padding: 4rem;
    .reservations-form {
      font-size: 15px;
      flex-direction: column;
      padding: 0;

      input {
        margin-bottom: 2rem;
      }
    }
  }

  @media (min-width: 761px) {
    .reservations-form {
      font-size: calc(15px + ((1vw - 7.61px) * 2.439));
    }
  }

  @media (min-width: 1130px) {
    .reservations-form {
      font-size: 24px;
    }
  }
`

const currentTime = () => {
  let coeff = 1000 * 60 * MINUTE_INCREMENT
  let date = new Date()
  let rounded = new Date(Math.round(date.getTime() / coeff) * coeff)
  return rounded
}

class Reservations extends Component {
  constructor() {
    super()

    this.state = {
      date: currentTime(),
    }
  }
  render() {
    const { date } = this.state
    return (
      <ReservationsStyles id="reservations">
        <SectionHeader
          white
          center
          narrowText
          headerTitle="Reservations"
          content="Proident adipisicing duis id dolor non occaecat ea pariatur mollit deserunt consectetur proident minim incididunt."
        />
        <div className="reservations-form">
          <Flatpickr
            data-enable-time
            options={{
              dateFormat: 'F j, Y - h:i K',
              minuteIncrement: MINUTE_INCREMENT,
            }}
            value={date}
            onChange={date => {
              this.setState({ date })
            }}
          />
          <Button href="#" text="RESERVE" white />
        </div>
      </ReservationsStyles>
    )
  }
}

export default Reservations
