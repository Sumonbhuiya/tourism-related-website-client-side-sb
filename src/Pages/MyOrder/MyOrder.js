import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ShowMyOrder from '../../Components/ShowMyOrder/ShowMyOrder';
import TotalServices from '../../Components/TotalServices/TotalServices';
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
            <Container className="pb-4 bg-light mt-5" style={{ fontFamily: "cursive" }}>
                <h1 className="py-4 text-success text-uppercase pb-4">Orders by using your email</h1>
                <Row xs lg={2} md sm={1} className="g-3 align-items-center pb-5">
                    {
                        orderquantity.map(service => <ShowMyOrder
                            key={service._id}
                            service={service}>
                        </ShowMyOrder>)
                    }
                </Row>
            </Container>
            <TotalServices></TotalServices>
        </div>
    );
};

export default MyOrder;