import React, { Component } from 'react'
import styled from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavbarStyles = styled.nav`
  z-index: 99;
  position: fixed;
  top: 0;
  color: white;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;

  ol {
    padding: 0.5rem 0;
    width: 980px;
    float: right;
    display: flex;
    justify-content: space-around;
    margin: 0;
  }

  li {
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  // componentWillMount() {}

  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  // componentWillUnmount() {}

  render() {
    return (
      <NavbarStyles>
        <ol>
          <li>
            <AnchorLink href="#home">HOME</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">OUR STORY</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services">SERVICES</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#gallery">GALLERY</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">CONTACT</AnchorLink>
          </li>
        </ol>
      </NavbarStyles>
    )
  }
}

Navbar.propTypes = {}

export default Navbar
