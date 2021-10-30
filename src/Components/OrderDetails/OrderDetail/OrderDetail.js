import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import './OrderDetails.css'

const OrderDetail = (props) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    // load information for servic details page 
    const { name, img, describe, price, time, rating } = props.service

    //process order
    const onSubmit = data => {
        fetch(`https://pure-island-78807.herokuapp.com/feedback`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Feedback submit successfully');
                    reset();
                }
            })
    };

    return (
        <>
            <Col lg={7} md={8}>
                <Row xs={1} lg={1} md sm={1} className="align-items-center py-2">
                    <Col lg={12} md={12} sm={12}>
                        <Card.Img className="rounded pb-2 cover-image" src={img} />
                    </Col>
                    <Col xs lg={12} md={12} sm={12} className="align-items-center">
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
            <Col lg={5} md={4} className="feedback-image">
                <h2 className="pt-5 text-white text-uppercase" style={{ fontFamily: "cursive" }}>Give us Your Opinion </h2>
                <form className="feedback" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <input placeholder="About" {...register("about", { required: true })} />
                    <textarea {...register("describe", { required: true })} placeholder="description" />
                    <input type="submit" />
                </form>
            </Col>
        </>
    );
};

export default OrderDetail;