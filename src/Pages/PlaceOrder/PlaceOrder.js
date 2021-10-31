import React from 'react';
import OrderDetails from '../../Components/OrderDetails/OrderDetails/OrderDetails';

const PlaceOrder = () => {
    return (
        <div>
            {/* heading  */}
            <div className="bg-success bg-gradient">
                <h3 className="text-white w-75 mx-auto py-3 text-start">SEE DETAILS</h3>
            </div>
            {/* call route  */}
            <OrderDetails></OrderDetails>
        </div>
    );
};

export default PlaceOrder;