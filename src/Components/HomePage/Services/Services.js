import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const { isLoading } = useAuth();
    const [services, setServices] = useState([]);

    useEffect(() => {
        // load data for seeing offer
        fetch(`https://pure-island-78807.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    // show spinner 
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }
    return (
        <div className="fixed-background">
            {/* offer header  */}
            <h1 className="pt-5 text-white text-uppercase pb-4" style={{ fontFamily: "Satisfy, cursive", }}>Our available services</h1>
            <Row xs={1} md={2} lg={3} className="g-4 w-75 mx-auto pb-5">
                {/* load all service data  */}
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}>
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;