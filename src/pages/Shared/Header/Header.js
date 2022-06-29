import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../img/logo/bull-bear-logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar sticky='top' className='px-5 py-2 ' collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Brand as={Link} to="/">
                <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#features">Blog Insights </Nav.Link>
                    <Nav.Link href="#pricing">News Portal</Nav.Link>
                    {
                        user && <>
                            <NavDropdown title="Stocks" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to='inventory'>Manage Stocks</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='addstock'>Add Stocks</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to='mystocks'>My Stocks</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </>
                    }
                </Nav>
                <Nav>
                    {
                        user ?
                            <div className='flex  flex-row-reverse'>
                                <Nav.Link className=' text-light' onClick={handleSignOut}>Log Out</Nav.Link>
                                <div className='flex'>
                                    <FontAwesomeIcon className='text-light mt-2 text-xl' icon={faUser}></FontAwesomeIcon>
                                    <Nav.Link to="">{user.displayName}</Nav.Link>
                                </div>
                            </div>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>

                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;