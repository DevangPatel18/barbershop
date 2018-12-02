import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

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

  ul {
    padding: 3rem 0;
    width: 1280px;
    float: right;
    display: flex;
    justify-content: space-around;
    margin: 0;
    transition: all 0.5s ease;
  }

  li {
    transition: all 0.5s ease;
    list-style-type: none;
    padding-left: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }

  .scrollSpy {
    box-shadow: 0 3px 0px #c2a300;
  }

  ${props =>
    props.navBarBg &&
    css`
      background-color: rgba(0, 0, 0, 0.9);

      ul {
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
      navBreak: '',
    }

    this.navBarCheck = this.navBarCheck.bind(this)
  }

  // componentWillMount() {}

  componentDidMount() {
    let home = document.querySelector('#home')

    this.setState({ navBreak: home.offsetHeight * 0.33 })

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
    const navBarBg = window.scrollY > this.state.navBreak
    if (navBarBg !== this.state.navBarBg) {
      this.setState({ navBarBg })
    }
  }

  render() {
    const { navBarBg } = this.state

    return (
      <NavbarStyles navBarBg={navBarBg}>
        <Scrollspy
          items={['home', 'about', 'services', 'gallery', 'contact']}
          currentClassName="scrollSpy"
        >
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
        </Scrollspy>
      </NavbarStyles>
    )
  }
}

Navbar.propTypes = {}

export default Navbar
