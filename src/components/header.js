import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import image1 from '../images/CIT Logo.png';
import image2 from '../images/iic.png';
import image3 from '../images/top.png';
import './header.css';

function Header() {
  return (
    <Navbar bg="light" className='gradient-background-header'>
      <Nav className="mr-auto container d-flex space-around flex-wrap align-items-center">
        <Nav.Link href="#" className="navbarimg">
        <img
          src={image1}
          alt="Logo"
          height="80"
          className="d-inline-block align-top image-1"
        />
      </Nav.Link>
        <Nav.Link href="#" className="navbarimg">
          <img
            src={image2}
            alt="Image 2"
            height="80"
            className="d-inline-block align-top image-2"
          />
        </Nav.Link>
        <Nav.Link href="#" className="navbarimg">
          <img
            src={image3}
            alt="Image 3"
            height="80"
            className="d-inline-block align-top image-3"
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;