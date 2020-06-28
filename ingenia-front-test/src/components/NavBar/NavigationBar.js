import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Layout from '../../assets/Layout'
import '../components.css'

class NavigationBar extends React.Component {
  render () {
    
    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home" className="logo">
          <img src={Layout.navigationImgs.logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav className="menu">
            <Nav.Link href="#home">ABOUT US</Nav.Link>
            <Nav.Link href="#home">OUR WORK</Nav.Link>
            <Nav.Link href="#home">CONTACT</Nav.Link>
            <Nav.Link href="#home">MANIFESTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar
