import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ShowMyOrder.css'

const ShowMyOrder = (props) => {
    // load information for service details page 
    const { _id, order_id, status } = props.service;

    const [services, setServices] = useState([]);

    useEffect(() => {
        // load data
        fetch(`https://pure-island-78807.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    //  filter specific data 
    const orderDetails = services.filter(service => (service._id === order_id));

    // Delete a service
    const handelDelete = id => {
        const permission = window.confirm('Are you sure you want to delete!!')
        if (permission) {
            const url = `https://pure-island-78807.herokuapp.com/use_services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted successfully')
                    }

                })
        }
    }

    return (
        <div>
            {
                orderDetails.map(service =>
                    <Card key={service._id} className="p-3">
                        <Row>
                            <Col xs={12} lg={4} md sm={4}>
                                <Card.Img className="rounded image-handel" src={service.img} />
                            </Col>
                            <Col xs={12} lg={8} md sm={8} className="align-items-center pt-2">
                                <Card.Title className="text-start text-primary">{service.name}</Card.Title>
                                <Row lg={1} xs={1} md sm={1} className="align-items-center pb-2">
                                    <Col lg={6} xs={6} sm={6}>
                                        <Card.Text className="text-start text-muted">
                                            {service.price}
                                        </Card.Text>
                                    </Col>
                                    <Col lg={6} xs={6} sm={6}>
                                        <Card.Text className="text-start text-muted">
                                            <i className="fas fa-star text-warning"></i> {service.rating}
                                        </Card.Text>
                                    </Col>
                                </Row>
                                <Row lg={1} xs={1} md sm={1} className="align-items-center">
                                    <Col lg={6} xs={6} sm={6}>
                                        <Card.Text className="text-start text-danger">
                                            {status}
                                        </Card.Text>
                                    </Col>
                                    <Col lg={6} xs={6} sm={6}>
                                        <Card.Text className="text-start text-muted">
                                            <Button className="bg-secondary rounded px-2 py-1" onClick={() => handelDelete(_id)}>Cancel</Button>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                )
            }
        </div>
    );
};

export default ShowMyOrder;