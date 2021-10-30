import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

// details page - our total services show 
const TotalServices = () => {
    return (
        <>
            <Container className="py-5">
                {/* show in different column  */}
                <Row xs={1} sm={2} md={2} lg={4} className="g-2">
                    <Col>
                        <Card.Title><i className="far fa-smile-beam fs-1  text-muted" style={{ marginBottom: "-5px" }}></i></Card.Title>
                        <Card.Body>
                            <Card.Title className="fs-1" style={{ marginBottom: "-2px", marginTop: "-15px", fontFamily: "Rockwell" }}>11,201</Card.Title>
                            <Card.Text className="text-danger fst-italic">
                                HAPPY CUSTOMERS
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Title><i className="fas fa-car fs-1 text-muted" style={{ marginBottom: "-5px" }}></i></Card.Title>
                        <Card.Body>
                            <Card.Title className="fs-1" style={{ marginBottom: "-2px", marginTop: "-15px", fontFamily: "Rockwell" }}>107</Card.Title>
                            <Card.Text className="text-danger fst-italic">
                                AMAZING TOURS
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Title><i className="fas fa-user-alt fs-1 text-muted" style={{ marginBottom: "-5px" }}></i></Card.Title>
                        <Card.Body>
                            <Card.Title className="fs-1" style={{ marginBottom: "-2px", marginTop: "-15px", fontFamily: "Rockwell" }}>13</Card.Title>
                            <Card.Text className="text-danger fst-italic">
                                TOUR REQUEST
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <Card.Title><i className="far fa-comments fs-1 text-muted" style={{ marginBottom: "-5px" }}></i></Card.Title>
                        <Card.Body>
                            <Card.Title className="fs-1" style={{ marginBottom: "-2px", marginTop: "-15px", fontFamily: "Rockwell" }}>5,149</Card.Title>
                            <Card.Text className="text-danger fst-italic">
                                SUPPORT CASES
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default TotalServices;