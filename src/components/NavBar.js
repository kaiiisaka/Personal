import React from 'react';
import {Nav, Navbar, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Styles = styled.div `
  a, .navbar-brand, .navbar-nav nav-link{
    color: #adb1b8;
    &:hover{
      color: azure;
      text-decoration: none;
    }
  }
`

const NavBar = () => {

    return (
        <Styles>
            <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
                <Container>
                <Navbar.Brand href='/'>Kaiiisaka</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id = "responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link>  </Nav.Link>
                        <Nav.Link> <Link to="/projects">Projects</Link> </Nav.Link>
                        <Nav.Link> <Link to="/about">About</Link> </Nav.Link>
                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
    );
};

export default NavBar;