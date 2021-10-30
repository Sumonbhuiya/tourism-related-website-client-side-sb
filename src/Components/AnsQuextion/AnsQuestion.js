import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const AnsQuestion = () => {
    return (
        <div>
            <Container className="pb-4">
                {/* questions and answers  */}
                <Row xs lg={2} md sm={1} className="align-items-center py-5">
                    <h3 className="text-success">Frequently Asked Questions!</h3>
                    <Col lg={8} md={8}>
                        <Card.Title className="text-start text-success">Why book tours with WHEELOCK travel?</Card.Title>
                        <Card.Text className="text-start text-muted">
                            <Col className="text-muted fw-bold pb-2" style={{ fontFamily: "cursive" }}>
                                We are a award-winning local tour operator in Bangladesh with vase local knowledge and the hightest quality. We have 271+ good review from our clients with average good rating. You will have a great experience on out tours. By booking tour with us, you are also supporting a local small business instead of the big foreign corporations who are dominating the tourism industry with their large marketing budget.
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start text-success">Are you running tours during the pandemic?</Card.Title>
                        <Card.Text className="text-start text-muted">
                            <Col className="text-muted fw-bold pb-2" style={{ fontFamily: "cursive" }}>
                                Despite the pandemic, we are open and running our tours regularly. Check out our tour services list to find details on all of our tours. You can check the available service now.
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start text-success">Why are the Covid-19 measures on tours?</Card.Title>
                        <Card.Text className="text-start text-muted">
                            <Col className="text-muted fw-bold pb-2" style={{ fontFamily: "cursive" }}>
                                Wearing masks, cleaning hands frequently, disinfecting the vehicles are same of the Covid-19 measures we have taken on our tours. Hand rubs are always available on our vehicles for the guests.
                            </Col>
                        </Card.Text>
                    </Col>
                    {/* showing image */}
                    <Col lg={4} md={4}>
                        <Card.Img className="rounded" src="https://nijhoom.b-cdn.net/wp-content/uploads/2016/11/hilde-steen-forest-700-o.jpg" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AnsQuestion;