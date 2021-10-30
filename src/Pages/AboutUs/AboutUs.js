import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import './aboutUs.css'

const AboutUs = () => {
    return (
        <>
            <div>
                <Container className="py-5">
                    <h1 className="text-dark text-uppercase pb-5">Our Team</h1>
                    <Row xs={1} sm={2} md={2} lg={4} className="g-3">
                        <Col>
                            <Card.Img className="rounded-pill handel-image" src="https://max-themes.net/demos/altair/upload/2.jpg" />
                            <Card.Body>
                                <Card.Title className="" style={{ fontFamily: "Rockwell" }}>Oka Samy</Card.Title>
                                <Card.Text className="text-danger fst-italic">
                                    SALE MANAGER
                                </Card.Text>
                                <Card.Text className="text-muted">
                                    A person (plural people or persons) is a being that has certain capacities or attributes such as reason, morality, consciousness or self-consciousness
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Img className="rounded-pill handel-image" src="https://max-themes.net/demos/altair/upload/5.jpg" />
                            <Card.Body>
                                <Card.Title className="" style={{ fontFamily: "Rockwell" }}>Jony Khan</Card.Title>
                                <Card.Text className="text-danger fst-italic">
                                    CO-FOUNDER & CFO
                                </Card.Text>
                                <Card.Text className="text-muted">
                                    Jony Khan is being a part of a culturally established form of social relations such as kinship, ownership of property, or legal responsibility
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Img className="rounded-pill handel-image" src="https://max-themes.net/demos/altair/upload/6.jpg" />
                            <Card.Body>
                                <Card.Title className="" style={{ fontFamily: "Rockwell" }}>Yohani Cho</Card.Title>
                                <Card.Text className="text-danger fst-italic">
                                    TECHNICAL LEAD & CTO
                                </Card.Text>
                                <Card.Text className="text-muted">
                                    Meet people who understand. Community is at the heart of 7 Cups. You can find support and friendship in chat rooms and forums for many issues
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Img className="rounded-pill handel-image" src="https://max-themes.net/demos/altair/upload/7.jpg" />
                            <Card.Body>
                                <Card.Title className="" style={{ fontFamily: "Rockwell" }}>Jeny Abrar</Card.Title>
                                <Card.Text className="text-danger fst-italic">
                                    MARKETING MANAGER
                                </Card.Text>
                                <Card.Text className="text-muted">
                                    Take her Personality Test and get a “freakishly accurate” description of who you are and why you do things the way you do. Take the Test Only takes 10 minutes
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-light">
                <h1 className="text-dark pb-2" style={{ fontFamily: "cursive" }}>Clint Says About Us</h1>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '250px' }}
                            src="https://www.nicepng.com/png/detail/89-896041_smoky-swirl-border-on-blank-page-white-page.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 className="text-dark">Zuku Ahmed</h2>
                            <p className="text-muted">
                                The more prepared you are, the more confident you will be in your plans. <br />
                                Try reviewing differential diagnoses
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: '250px' }}
                            src="https://www.nicepng.com/png/detail/89-896041_smoky-swirl-border-on-blank-page-white-page.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2 className="text-dark">Fazin Nahar</h2>
                            <p className="text-muted">
                                Need to be open to learning even on a rotation that you are not very interested in. <br />
                                Each person are very secure for clint's</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div style={{ backgroundImage: "url(https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/cities-parallax-img-1.jpg)", backgroundSize: "cover" }}>
                <Container className="py-5">
                    <Row xs={1} sm={2} md={2} lg={4} className="py-5 g-5">
                        <Col>
                            <Card.Img className="handel-image" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-1.png" />
                            <Card.Body>
                                <Card.Title className="fs-3 text-white" style={{ fontFamily: "Rockwell" }}>Restaurants</Card.Title>
                                <Card.Text className="text-white">
                                    a place where people pay to sit and eat meals that are cooked and served on the premises.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Img className="handel-image" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-2.png" />
                            <Card.Body>
                                <Card.Title className="fs-3 text-white" style={{ fontFamily: "Rockwell" }}>Sightseeing</Card.Title>
                                <Card.Text className="text-white">
                                    Sightseeing is the activity of travelling around a city or region for tourists usually visit
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Img className="handel-image" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-3.png" />
                            <Card.Body>
                                <Card.Title className="fs-3 text-white" style={{ fontFamily: "Rockwell" }}>Shops & Boutiques</Card.Title>
                                <Card.Text className="text-white">
                                    A boutique is a small shop that deals in fashionable clothing or accessories.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Img className="handel-image" src="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-custom-icon-img-4.png" />
                            <Card.Body>
                                <Card.Title className="fs-3 text-white" style={{ fontFamily: "Rockwell" }}>Where to Stay</Card.Title>
                                <Card.Text className="text-white">
                                    Whether you're travelling alone; with your family or partner; or as part of a business group
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default AboutUs;