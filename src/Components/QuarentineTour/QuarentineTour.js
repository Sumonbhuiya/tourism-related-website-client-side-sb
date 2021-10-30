import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const QuarentineTour = () => {
    return (
        <div>
            <Container className="pb-4">
                {/* short information about quarantine */}
                <Row xs lg={1} md sm={1} className="align-items-center bg-primary px-3 py-5">
                    <Col lg={12} md={12}>
                        <Card.Title className="text-start fs-2 fw-bold text-white">Breaking News: No Quarentine in Bangladesh!</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-white fw-bold pb-2" style={{ fontFamily: "cursive" }}>
                                No quarantine is require for the full vaccinated travelers. For this reason you can visit anywhere or enjoy your life, if you are a fully vaccinated person. We can organize a tour for you anytime with this vaccinated condition.
                            </Col>
                        </Card.Text>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default QuarentineTour;