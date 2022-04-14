import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import userlogo from '../../../images/user1.png'
import { FaUserCircle } from 'react-icons/fa'
import { RiLoginCircleLine } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'

const Header = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="home#banner"> <img src={logo} height={30} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#expert">Expert</Nav.Link>

                    </Nav>

                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ? <Nav.Link onClick={logout}>
                                <FiLogOut className='mx-1'></FiLogOut>
                                Logout  <img className='ms-1 rounded-circle' height={30} src={userlogo} alt="" />
                            </Nav.Link> :
                                <Nav.Link as={Link} to="/login">
                                    Login <RiLoginCircleLine></RiLoginCircleLine>
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;