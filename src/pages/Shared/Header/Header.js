import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from '../../../img/logo/bull-bear-logo-bullish-stocks_434503-247 (1) (1).png'

const Header = () => {
    return (
        <Navbar sticky='top' className='px-5 py-2' collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand href="/">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Blog Insights </Nav.Link>
                    <Nav.Link href="#pricing">News Portal</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Manage Stocks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Add Stocks</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">My Stocks</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/log out">
                        Log Out
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    );
};

export default Header;