import React from 'react';
import { Container, Image, Nav, Navbar, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    // header navbar 
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" sticky="top" variant="dark">
                <Container>
                    {/* logo  */}
                    <Nav.Link as={Link} to="/home"><Image src="https://th.bing.com/th/id/R.6080c0a48ee67a6c713b5d4579988387?rik=Ti%2fjt4ayLsxdNw&riu=http%3a%2f%2fwww.wheelocktravel.com%2fwp-content%2fuploads%2f2015%2f12%2fWheelock-Travel-Logo-Master-NoWords.png&ehk=3v5nEwPMA3QFVqr17BuqSmCMibKvvCZn9lFBOVZp60w%3d&risl=&pid=ImgRaw&r=0" style={{ width: '150px', height: '80px' }} /> </Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        {/* nav button handel as link */}
                        <Nav className="me-auto">
                            {user.uid || user.email ?
                                <Nav>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/home">Home</Nav.Link>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/my-order">My Orders</Nav.Link>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/manage_service">Manage All Orders</Nav.Link>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/add_service">Add A New Service</Nav.Link>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/contact_us">Contact Us</Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/home">Home</Nav.Link>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/about_us">About</Nav.Link>
                                    <Nav.Link as={NavLink} activeStyle={{ color: "#ffce3e", borderBottom: "1px solid #fff" }} to="/contact_us">Contact Us</Nav.Link>
                                </Nav>
                            }
                        </Nav>
                        <Nav>
                            {/* check user  */}
                            {user.uid || user.email ?
                                <Nav>
                                    <Navbar.Text>
                                        |{user.displayName}|
                                    </Navbar.Text>
                                    <Nav.Link onClick={logOut} as={Link} to="/home"><span className="text-danger">log Out</span></Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <Nav.Link as={Link} to="/login"><span className="text-danger fs-5">Sign In</span></Nav.Link>
                                    <Nav.Link as={Link} to="/register"><Button variant="success">Try Free</Button></Nav.Link>
                                </Nav>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;