import React from 'react';
import {Nav, Navbar, Button} from "react-bootstrap";
import {Link} from "react-router-dom"

const NavBar = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
                <Navbar.Brand>Kaiiisaka</Navbar.Brand>
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
            </Navbar>
        </div>
    );
};

export default NavBar;