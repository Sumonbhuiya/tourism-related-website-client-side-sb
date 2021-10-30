import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import DetailsForm from '../DetailsForm/DetailsForm';
import OrderDetail from '../OrderDetail/OrderDetail';

const OrderDetails = () => {
    // call specific data 
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        // load data
        fetch(`https://pure-island-78807.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    //  filter specific data 
    const orderDetails = services.filter(service => (service._id === serviceId));

    return (
        <div className="bg-light">
            <h1 className="pt-5 text-dark text-uppercase">See Details</h1>
            <Container className="pb-4" style={{ fontFamily: "cursive" }}>
                <Row xs lg={2} md sm={1} className="align-items-center py-5">
                    {
                        orderDetails.map(service => <OrderDetail
                            key={service._id}
                            service={service}>
                        </OrderDetail>)
                    }
                </Row>
            </Container>
            <DetailsForm></DetailsForm>
        </div>
    );
};

export default OrderDetails;