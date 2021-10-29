import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const OrderDetail = (props) => {
    // load information for servic details page 
    const { name, img, describe, price, time, rating } = props.service

    return (
        <div>
            <Col lg={12}>
                <Row xs={1} lg={2} md sm={1} className="align-items-center py-2">
                    <Col lg={6} md sm={12}>
                        <Card.Img className="rounded w-75 pb-2" src={img} />
                    </Col>
                    <Col xs lg={6} md sm={12} className="align-items-center">
                        <Card.Title className="text-start text-primary"><span className="text-dark fw-bold">Place: </span>{name}</Card.Title>
                        <Row lg={1} xs={1} md sm={1} className="align-items-center pb-2">
                            <Col lg={6} xs={6} sm={6}>
                                <Card.Text className="text-start text-muted fw-bold">
                                    <span className="text-dark fw-bold">Amount: </span> {price}
                                </Card.Text>
                            </Col>
                            <Col lg={6} xs={6} sm={6}>
                                <Card.Text className="text-start text-muted fw-bold">
                                    <i className="fas fa-star text-warning"></i> {rating}
                                </Card.Text>
                            </Col>
                        </Row>
                        <Card.Text className="text-start text-muted">
                            <Col className="text-muted fw-bold pb-2"><span className="text-dark fw-bold">Only For: </span>{time}</Col>
                            <Col className="text-muted"><span className="text-dark fw-bold">About {name}: </span>{describe}</Col>
                        </Card.Text>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default OrderDetail;