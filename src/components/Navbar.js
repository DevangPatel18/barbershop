import React, { Component } from 'react'
import styled, { css } from 'styled-components'
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
  display: flex;
  justify-content: center;
  transition: all 0.5s ease;

  ol {
    padding: 3rem 0;
    width: 1280px;
    float: right;
    display: flex;
    justify-content: space-around;
    margin: 0;
    transition: all 0.5s ease;
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

  ${props =>
    props.navBarBg &&
    css`
      background-color: rgba(0, 0, 0, 0.9);

      ol {
        width: 980px;
        padding: 0.5rem 0;
      }
    `};
`

class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navBarBg: false,
      halfHome: '',
    }

    this.navBarCheck = this.navBarCheck.bind(this)
  }

  // componentWillMount() {}

  componentDidMount() {
    let home = document.querySelector('#home')

    this.setState({ halfHome: home.offsetHeight * 0.33 })

    window.addEventListener('scroll', this.navBarCheck)
  }

  // componentDidUpdate(prevProps, prevState) {}

  // componentWillReceiveProps(nextProps) {}

  // shouldComponentUpdate(nextProps, nextState) {}

  // componentWillUpdate(nextProps, nextState) {}

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navBarCheck)
  }

  navBarCheck() {
    this.setState({ navBarBg: window.scrollY > this.state.halfHome })
  }

  render() {
    const { navBarBg } = this.state

    return (
      <NavbarStyles navBarBg={navBarBg}>
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
