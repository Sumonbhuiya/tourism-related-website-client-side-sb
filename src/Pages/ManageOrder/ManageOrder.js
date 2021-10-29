import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const [manageService, setManageService] = useState([]);

    useEffect(() => {
        // load data
        fetch(`https://pure-island-78807.herokuapp.com/use_services`)
            .then(res => res.json())
            .then(data => setManageService(data));
    }, [])

    //Update status
    const handelAccept = id => {
        const permission = window.confirm('You want to accept this service?')
        if (permission) {
            const url = `https://pure-island-78807.herokuapp.com/use_services/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Updated successfully')
                    }
                })
        }
    }

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
                        const remaining = manageService.filter(service => service._id !== id);
                        setManageService(remaining)
                    }

                })
        }
    }

    return (
        <div>
            <Container className="py-5 px-3">
                <Row xs lg={1} md sm={1}>
                    <Col lg={12}>
                        <Row xs={1} lg={2} md sm={1}>
                            <Col lg={2} md sm={12} className="py-3">
                                <Card.Text className="text-start">
                                    <Link className=" text-primary fw-bold text-decoration-none" to="/manage_service"><i className="fas fa-user-circle"></i> Service List</Link>
                                </Card.Text>
                                <Card.Text className="text-start">
                                    <Link className=" text-primary fw-bold text-decoration-none" to="/add_service"><i className="fas fa-plus-circle"></i> Add service</Link>
                                </Card.Text>
                            </Col>
                            <Col xs lg={10} md sm={12} className="align-items-center bg-light" style={{ fontFamily: "cursive" }}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Order</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            manageService.map(service =>
                                                <tr key={service._id}>
                                                    <td>{service.name}</td>
                                                    <td>{service.email}</td>
                                                    <td>{service.order_id}</td>
                                                    <td><Button variant="secondary" onClick={() => handelAccept(service._id)}>{service.status}</Button></td>
                                                    <td><Button variant="secondary" onClick={() => handelDelete(service._id)}><i className="fas fa-trash-alt"></i></Button></td>
                                                </tr>
                                            )}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ManageOrder;