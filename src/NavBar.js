import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div>
        <Navbar bg="navbar bg-primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Cars4Rent</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cars"  onClick={() => console.log('Link Clicked')}>Cars</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Support">Support</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/signin">Login</Nav.Link>
            <Nav.Link as={Link} to="/user">User</Nav.Link>         
          </Nav>
        </Container>
      </Navbar>
      </div>
    )
}

export default NavBar;