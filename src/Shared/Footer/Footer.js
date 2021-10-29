import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    // footer section 
    return (
        <div className="bg-dark">
            <Container>
                {/* footer first row */}
                <Row lg={2} xs md sm={1} className="align-items-center pt-5">
                    <Col lg={4} sm={12} className="">
                        <Card.Body className="p-4">
                            <Card.Img variant="top" className="w-75" src="https://th.bing.com/th/id/R.6080c0a48ee67a6c713b5d4579988387?rik=Ti%2fjt4ayLsxdNw&riu=http%3a%2f%2fwww.wheelocktravel.com%2fwp-content%2fuploads%2f2015%2f12%2fWheelock-Travel-Logo-Master-NoWords.png&ehk=3v5nEwPMA3QFVqr17BuqSmCMibKvvCZn9lFBOVZp60w%3d&risl=&pid=ImgRaw&r=0" />
                        </Card.Body>
                        <Container>
                            <Nav className="mx-auto w-75">
                                <Nav.Link href="https://www.facebook.com/"><i className="fab fa-facebook-square fs-3 text-white"></i></Nav.Link>
                                <Nav.Link href="https://twitter.com/Twitch"><i className="fab fa-twitter-square fs-3 text-white"></i></Nav.Link>
                                <Nav.Link href="https://www.youtube.com/"><i className="fab fa-youtube-square fs-3 text-white" ></i></Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/feed/"><i className="fab fa-linkedin fs-3 text-white"></i></Nav.Link>
                            </Nav>
                        </Container>
                    </Col>
                    <Col lg={8} sm={12}>
                        <Row lg={2} xs={1} md sm={1} className="align-items-center py-2">
                            <Col sm={12}>
                                <Row className="pb-4">
                                    <Col xs={2} lg={4} md sm={3}>
                                    </Col>
                                    <Col xs={10} lg={8} md sm={9} className="align-items-center">
                                        <Card.Text className="text-start text-white fs-4">
                                            OUR RECENT POSTS
                                        </Card.Text>
                                        <Card.Text className="text-start">
                                            <Link className=" text-white fw-light text-decoration-none" to="">Standard blogs with image</Link>
                                        </Card.Text>
                                        <Card.Text className="text-start">
                                            <Link className=" text-white fw-light text-decoration-none" to="">Amazing fullwidth post</Link>
                                        </Card.Text>
                                        <Card.Text className="text-start">
                                            <Link className=" text-white fw-light text-decoration-none" to="">Link post</Link>
                                        </Card.Text>
                                        <Card.Text className="text-start">
                                            <Link className=" text-white fw-light text-decoration-none" to="">Quota post</Link>
                                        </Card.Text>
                                        <Card.Text className="text-start">
                                            <Link className=" text-white fw-light text-decoration-none" to="">Sidebar post with slideshow</Link>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12}>
                                <Row className="pb-4">
                                    <Col xs={1} lg={4} md sm={3}>
                                    </Col>
                                    <Col xs={11} lg={8} md sm={9}>
                                        <Card.Text className="text-start text-white fs-4">
                                            CONTACT INFO
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-phone-alt text-white "></i> +880 1786 215963
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-envelope text-white "></i> wheelock@support.com
                                        </Card.Text>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-map-marker-alt text-white "></i> Farmgate, Mention Tower, Dhaka-1215
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row >
                {/* footer second row  */}
                <Row lg={2} xs md sm={1} className="align-items-center py-3">
                    <Col lg={4} xs={12} sm={12} className="">
                        <Card.Body className="py-4">
                            <Card.Text className="text-white">Copyright <i className="far fa-copyright text-white"></i> 2021 Wheelock Travel | SumonBhuiya</Card.Text>
                        </Card.Body>
                    </Col>
                    <Col lg={8}>
                        <Row lg={2} xs={2} md sm={2} className="align-items-center py-2">
                            <Col sm={6} xs={6}>
                                <Row className="pb-4">
                                    <Col xs={3} lg={4} md sm={3}>
                                    </Col>
                                    <Col xs={9} lg={8} md sm={9} className="align-items-center">
                                        <Card.Text className="text-start">
                                            <Link className=" text-white text-decoration-none" to="">Help Center</Link>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={6} xs={6}>
                                <Row className="pb-4">
                                    <Col xs={3} lg={4} md sm={3}>
                                    </Col>
                                    <Col xs={9} lg={8} md sm={9}>
                                        <Card.Text className="text-start text-white">
                                            Licenses
                                        </Card.Text>
                                        <Card.Text className="text-start text-white">
                                            Privacy Statement
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container>
        </div>
    );
};

export default Footer;