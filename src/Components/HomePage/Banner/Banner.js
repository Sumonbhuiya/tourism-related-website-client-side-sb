import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="bg-info">
            <Container className="pb-4">
                {/* Welcome intro */}
                <Row xs lg={1} md sm={1} className="align-items-center px-3 py-5">
                    <Col lg={12} md={12}>
                        <Card.Title className="text-start fs-2 fw-bold text-white">Welcome to Wheelock Travel!</Card.Title>
                        <Card.Title className="text-start fs-3 pb-2 text-white">A satisfied place where you'll hardly meet another tourist</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-white fw-bold" style={{ fontFamily: "cursive" }}>
                                Wheelock is a award-winning local tour operator in Bangladesh specializing in organizing tours in the world for seasoned western travel. We organize 1-12 days tours with a tiny group of 4-6 travelers only.
                            </Col>
                        </Card.Text>
                        <Card.Text className="text-start">
                            <Col className="text-white fw-bold" style={{ fontFamily: "cursive" }}>
                                For being a home-grown local operator, our prices will be less than half than any local operator can offer since we do not need to pay any middlemen. All the money you pay goes directly to the locals. For Covid-19 situation we can organize na tour for you anytime if you can arrive with a negative PCR test report and an advance visa. We will organized two different tour in every month.
                            </Col>
                        </Card.Text>
                        <Card.Text className="text-start">
                            <Col className="text-white fw-bold" style={{ fontFamily: "cursive" }}>
                                Start planning your dream holiday with us for an unforgettable experience. Our knowledgeable and experience guides will provide you an experience of different tourist place than you thought you know about!
                            </Col>
                        </Card.Text>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;