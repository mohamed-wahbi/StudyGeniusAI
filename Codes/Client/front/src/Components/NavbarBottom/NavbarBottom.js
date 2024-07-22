import React, { useState } from 'react';
import './navbarBottom.css';
import logo from '../../Assets/logo.png';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const NavbarBottom = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className='navbar-brand' href="#"><img src={logo} alt='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className={`links ${activeLink === 'action1' ? 'active' : ''}`}
              onClick={() => handleSetActive('action1')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={`links ${activeLink === 'action2' ? 'active' : ''}`}
              onClick={() => handleSetActive('action2')}
            >
              News
            </Nav.Link>
            <Nav.Link
              href="#action3"
              className={`links ${activeLink === 'action3' ? 'active' : ''}`}
              onClick={() => handleSetActive('action3')}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              href="#action4"
              className={`links ${activeLink === 'action4' ? 'active' : ''}`}
              onClick={() => handleSetActive('action4')}
            >
              Test
            </Nav.Link>
            <NavDropdown
              title="About Us"
              id="navbarScrollingDropdown"
              className={`links ${activeLink === 'about' ? 'active' : ''}`}
              onClick={() => handleSetActive('about')}
            >
              <NavDropdown.Item href="#action5">xxx</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" className='btnSocial'>
              <i className="bi bi-facebook"></i>
            </Button>
            <Button variant="secondary" className='btnSocial'>
              <i className="bi bi-twitter"></i>
            </Button>
            <Button variant="secondary" className='btnSocial'>
              <i className="bi bi-linkedin"></i>
            </Button>
          </ButtonGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarBottom;
