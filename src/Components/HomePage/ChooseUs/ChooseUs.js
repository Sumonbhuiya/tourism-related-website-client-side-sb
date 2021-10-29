import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className="set-background p-5">
            <h1 className="pt-5 text-white text-uppercase pb-4">why you choose us!</h1>
            <Row xs={1} md={2} lg={3} className="g-4 py-5">
                <Col className="card-description pb-4">
                    <Card className="pt-5">
                        <Card.Body>
                            <Card.Title>Handpicked Hotels</Card.Title>
                            <Card.Text className="text-muted p-2">
                                From board rooms for intimate meetings to modern conference centres, our expert team of planners will put together a proposal which meets your every need.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="card-icon icon-handel">
                        <i className="fas fa-star fs-4 bg-danger rounded-pill text-white p-4"></i>
                    </div>
                </Col>
                <Col className="card-description pb-4">
                    <Card className="pt-5">
                        <Card.Body>
                            <Card.Title>World Class Service</Card.Title>
                            <Card.Text className="text-muted p-2">
                                World class customer care is not about meeting but about exceeding expectations and looking for opportunities to provide an unexpected moments in unique ways.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="card-icon icon-handel">
                        <i className="fas fa-globe-americas fs-4 text-white bg-danger rounded-pill p-4"></i>
                    </div>
                </Col>
                <Col className="card-description pb-4">
                    <Card className="pt-5">
                        <Card.Body>
                            <Card.Title>Best Price Guarantee</Card.Title>
                            <Card.Text className="text-muted p-2">
                                Our Best Price Guarantee means that you can be sure of booking at the best rate. If you find a lower price elsewhere within 24 hours of booking & get 25% off.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <div className="card-icon icon-handel">
                        <i className="fas fa-thumbs-up fs-4 bg-danger text-white rounded-pill p-4"></i>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ChooseUs;