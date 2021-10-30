import React from 'react';
import { Card, Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    // take data using props 
    const { _id, name, img, describe, price, time, rating } = props.service;
    return (
        <div>
            <Col>
                {/* viewing data using cards */}
                <Card className="shadow-hover">
                    <Row>
                        {/* view look and data  */}
                        <Col xs={12} lg={12} md={12} sm={12} className="show-details">
                            <Card.Img className=" rounded" style={{ height: "280px" }} variant="top" src={img} />
                        </Col>
                        <Col xs={12} lg={12} md={12} sm={12} className="align-items-center pt-2">
                            <Card.Body className="">
                                <Card.Title className="fs-4 text-uppercase">{name}</Card.Title>
                                <Card.Text className="hide-details">
                                    <Col className="text-white fw-bold px-4 pb-4">{describe.slice(0, 50)}...</Col>
                                    <Col className="text-white fw-bold">FOR: {time}</Col>
                                </Card.Text>
                                <Row lg={1} xs={1} md sm={1} className="align-items-center">
                                    <Col lg={6} xs={6} sm={6}>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-star text-warning"></i> {rating}
                                        </Card.Text>
                                    </Col>
                                    <Col lg={6} xs={6} sm={6}>
                                        <Card.Text className="text-end text-muted fw-bold">
                                            {price}
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Button className="w-100 handel-button"><Link className="text-white text-decoration-none" to={`/place_order/${_id}`}><i className="text-primary far fa-handshake"></i> Book Now</Link></Button>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </div>
    );
};

export default Service;