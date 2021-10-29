import React from 'react';
import { Card, Col, Container, Nav, Row } from 'react-bootstrap';
import './Expert.css'

const Expert = (props) => {
    // take data using props from json 
    const { name, img, describe } = props.expert;
    return (
        <div>
            <Col>
                {/* viewing data using cards */}
                <Card className="design">
                    <Row>
                        <Col xs={12} lg={12} md={12} sm={12} className="expert-img">
                            <Card.Img className="rounded" variant="top" src={img} />
                        </Col>
                        <Col xs={12} lg={12} md={12} sm={12} className="align-items-center">
                            <Card.Body className="expert-details">
                                <Card.Title className="text-white fw-bold text-uppercase">{name}</Card.Title>
                                <Card.Text className="">
                                    <Col className="text-white fw-bold px-2">{describe}</Col>
                                </Card.Text>
                                <Container>
                                    <Nav className="mx-auto w-100">
                                        <Nav.Link href="https://www.facebook.com/"><i className="fab fa-facebook-f text-white"></i></Nav.Link>
                                        <Nav.Link href="https://twitter.com/Twitch"><i className="fab fa-twitter text-white"></i></Nav.Link>
                                        <Nav.Link href="https://www.instagram.com/"><i className="fab fa-instagram text-white" ></i></Nav.Link>
                                    </Nav>
                                </Container>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </div>
    );
};

export default Expert;