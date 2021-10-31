import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Expert from '../Expart/Expert';

const Exparts = () => {
    const [exparts, setExparts] = useState([]);

    useEffect(() => {
        // load data for experts section
        fetch(`https://pure-island-78807.herokuapp.com/experts`)
            .then(res => res.json())
            .then(data => setExparts(data));
    }, [])
    return (
        <div>
            {/* experts header  */}
            <div className="pt-5 px-2">
                <h3 className="text-info" style={{ fontFamily: "Satisfy, cursive", }}>Our Best</h3>
                <h1 className="text-dark fw-bold">TRAVEL EXPERTS</h1>
                <p className="text-muted fs-5">Our experts who understand where you want to go, how to <br /> get you there and the priceless experiences you want to have. <br /> We get you and we get you there.</p>
            </div>
            {/* find experts and show */}
            <Row xs={1} md={2} lg={4} className="g-3 px-5 py-5">
                {
                    exparts.map(expert => <Expert
                        key={expert._id}
                        expert={expert}>
                    </Expert>)
                }
            </Row>
        </div>
    );
};

export default Exparts;