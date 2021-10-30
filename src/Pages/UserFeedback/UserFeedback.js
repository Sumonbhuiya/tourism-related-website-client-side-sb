import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserFeedback = () => {
    const [manageFeedback, setManageFeedback] = useState([]);

    useEffect(() => {
        // load data
        fetch(`https://pure-island-78807.herokuapp.com/users_feedback`)
            .then(res => res.json())
            .then(data => setManageFeedback(data));
    }, [])

    // Delete a feedback
    const handelDelete = id => {
        const permission = window.confirm('Are you sure you want to delete!!')
        if (permission) {
            const url = `https://pure-island-78807.herokuapp.com/users_feedback/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Deleted feedback successfully')
                        const found = manageFeedback.filter(opinion => opinion._id !== id);
                        setManageFeedback(found)
                    }

                })
        }
    }

    return (
        <div>
            <h1 className="py-4 text-success">Review All Feedbacks</h1>
            <Container className="pb-5 px-3">
                <Row xs lg={1} md sm={1}>
                    <Col lg={12}>
                        <Row xs={1} lg={2} md sm={1}>
                            <Col lg={2} md sm={12} className="py-3">
                                <Card.Text className="text-start">
                                    <Link className=" text-primary fw-bold text-decoration-none" to="/manage_service"><i className="fas fa-user-circle"></i> Service List</Link>
                                </Card.Text>
                                <Card.Text className="text-start">
                                    <Link className=" text-primary fw-bold text-decoration-none" to="/feedback"><i className="fas fa-comment-dots"></i> See Feedback</Link>
                                </Card.Text>
                                <Card.Text className="text-start">
                                    <Link className=" text-primary fw-bold text-decoration-none" to="/my-order"><i className="far fa-user-circle"></i> My Service</Link>
                                </Card.Text>
                                <Card.Text className="text-start">
                                    <Link className=" text-primary fw-bold text-decoration-none" to="/add_service"><i className="fas fa-plus-circle"></i> Add Service</Link>
                                </Card.Text>
                            </Col>
                            <Col xs lg={10} md sm={12} className="align-items-center bg-light" style={{ fontFamily: "cursive" }}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>About</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            manageFeedback.map(opinion =>
                                                <tr key={opinion._id}>
                                                    <td>{opinion.email}</td>
                                                    <td>{opinion.about}</td>
                                                    <td>{opinion.describe}</td>
                                                    <td><Button variant="secondary" onClick={() => handelDelete(opinion._id)}><i className="fas fa-trash-alt"></i></Button></td>
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

export default UserFeedback;