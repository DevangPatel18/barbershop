import React, { Component } from 'react'
import SectionHeader from './SectionHeader'
import styled from 'styled-components'
import Button from './Button'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/themes/airbnb.css'
const MINUTE_INCREMENT = 20

const ReservationsStyles = styled.section`
  position: relative;
  height: 100vh;
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
    padding-top: 5em;

    input {
      font-family: Roboto;
      font-size: 24px;
      padding: 20px;
      margin-right: 2em;
      width: 18em;
      text-align: center;
      font-weight: bolder;
      border: 1px solid black;
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
          <Button href="#" text="RESERVE" />
        </div>
      </ReservationsStyles>
    )
  }
}

export default Reservations
