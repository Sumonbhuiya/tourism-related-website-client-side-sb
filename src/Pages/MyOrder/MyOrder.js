import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AnsQuestion from '../../Components/AnsQuextion/AnsQuestion';
import ShowMyOrder from '../../Components/ShowMyOrder/ShowMyOrder';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();

    const [orderUser, setOrderUser] = useState([]);

    useEffect(() => {
        // load data for see my order 
        fetch(`https://pure-island-78807.herokuapp.com/use_services`)
            .then(res => res.json())
            .then(data => setOrderUser(data));
    }, [])

    //  filter specific data 
    const orderquantity = orderUser.filter(service => ((service.email === user.email)));

    return (
        <div>
            <Container className="bg-light mt-5" style={{ fontFamily: "cursive" }}>
                {/* find user order  */}
                <Row xs lg={2} md sm={1} className="align-items-center py-3">
                    <Col md={6} lg={6} className="py-3">
                        <Card.Img className="rounded" style={{ height: "100%" }} src="https://image.freepik.com/free-vector/beach-holiday-with-summer-beach-items-opened-suitcase_1308-65486.jpg" />
                    </Col>
                    <Col md={6} lg={6} className="py-3">
                        <h2 className="pb-2 text-success">Orders by using your email</h2>
                        {
                            orderquantity.map(service => <ShowMyOrder
                                key={service._id}
                                service={service}>
                            </ShowMyOrder>)
                        }
                    </Col>
                </Row>
            </Container>
            {/* call different route  */}
            <AnsQuestion></AnsQuestion>
        </div>
    );
};

export default MyOrder;