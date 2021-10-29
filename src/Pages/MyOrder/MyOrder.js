import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowMyOrder from '../../Components/ShowMyOrder/ShowMyOrder';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();

    const [orderUser, setOrderUser] = useState([]);

    useEffect(() => {
        // load data
        fetch(`https://pure-island-78807.herokuapp.com/use_services`)
            .then(res => res.json())
            .then(data => setOrderUser(data));
    }, [])

    //  filter specific data 
    const orderquantity = orderUser.filter(service => ((service.email === user.email)));

    return (
        <div>
            <h1 className="pt-5 text-success text-uppercase pb-4">Orders using your email</h1>
            <Container className="pb-4" style={{ fontFamily: "cursive" }}>
                <Row xs lg={2} md sm={1} className="g-3 align-items-center py-5">
                    {
                        orderquantity.map(service => <ShowMyOrder
                            key={service._id}
                            service={service}>
                        </ShowMyOrder>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;