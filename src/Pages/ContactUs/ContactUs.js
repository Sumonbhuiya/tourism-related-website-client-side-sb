import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            {/* contuct us */}
            <div className="bg-success">
                <h3 className="text-white w-75 mx-auto py-3 text-start">Contact Us</h3>
            </div>
            <Container>
                {/* image  */}
                <Row xs={1} lg={2} md={2} sm={1} className="align-items-center pb-5">
                    <Col lg={4} md={3} className="py-3">
                        <Card.Img className="contact-image" src="https://image.freepik.com/free-photo/tourist-presenting-something_1368-7018.jpg" />
                        <Card.Img className="contact-image" src="https://image.freepik.com/free-photo/traveling-concept-with-landmarks_23-2149153261.jpg" />
                    </Col>
                    {/* describtion  */}
                    <Col lg={8} md={9}>
                        <Card.Title className="text-start fs-3 fw-bold text-success" style={{ fontFamily: "cursive" }}>How to contact with us</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-dark fw-bold">
                                (The best is to send us an email with details. We replay first. if you want to meet us in the office, make sure to have an appointment in advance.)
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-5 pb-2 text-dark fw-bold text-decoration-underline" style={{ fontFamily: "cursive" }}>Address:</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-dark fw-bold">
                                Mention Tower(2nd floor) <br />Near Farmgate <br /> Dhaka-1215 <br />Bangladesh
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-5 pb-2 text-dark fw-bold text-decoration-underline" style={{ fontFamily: "cursive" }}>Phone:</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-warning">
                                <span className="text-dark fw-bold">+880 1786 215963</span> <br /> <small>(09.00am - 06.00pm exact Friday and Govt. Holiday. We prefer email)</small>
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-5 pb-2 text-dark fw-bold text-decoration-underline" style={{ fontFamily: "cursive" }}>WhatsApp:</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-warning">
                                <span className="text-dark fw-bold">+880 1786 215963</span> <br /> <small>(Text only. No call. For emergency contacts only. Please send any inquiries by email only)</small>
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-5 pb-2 text-dark fw-bold text-decoration-underline" style={{ fontFamily: "cursive" }}>Email:</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-dark">
                                <span className="text-dark fw-bold">wheelock@support.com</span><br />(Send email by using your personal email)
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-3 fw-bold text-success" style={{ fontFamily: "cursive" }}>Send us an email</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-dark fw-bold">
                                Please write as many details as possible about the tour you want us to organized for you. Write which place you want to visit, the standard of hotel you need, which guide you want to hire, your interests, likings, dislikes and expectations. Also, provide your expected arrival and departure date so that we can suggest the best suitable itinerary for you based on your requirements and available time.
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-3 fw-bold text-success" style={{ fontFamily: "cursive" }}>Office Times</Card.Title>
                        <Card.Title className="text-start fs-5 fw-bold text-dark">Saturday - Thursday:</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-dark">
                                09-00am - 06.00pm (GMT+6)
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-5 fw-bold text-dark">Friday:</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-dark">
                                Closed
                            </Col>
                        </Card.Text>
                        <Card.Title className="text-start fs-5 fw-bold text-dark">Govt. Holidays:</Card.Title>
                        <Card.Text className="text-start">
                            <Col className="text-dark">
                                Closed
                            </Col>
                        </Card.Text>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ContactUs;