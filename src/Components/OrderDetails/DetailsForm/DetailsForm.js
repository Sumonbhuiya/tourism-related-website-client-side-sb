import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './DetailsForm.css'

const DetailsForm = () => {
    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    //process order
    const onSubmit = data => {
        // server call for add data
        fetch(`https://pure-island-78807.herokuapp.com/place_order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            // set data in background 
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed successfully');
                    reset();
                }
            })
    };
    return (
        <div className="set-image">
            {/* form header  */}
            <h1 className="pt-5 text-white text-uppercase" style={{ fontFamily: "cursive" }}>Give Your Information </h1>
            <h3 className="text-white" style={{ fontFamily: "cursive" }}>For proceed your order... </h3>
            {/* order form  */}
            <form className="details-form " onSubmit={handleSubmit(onSubmit)} >
                <input defaultValue={serviceId} style={{ display: 'none' }} {...register("order_id")} />
                <input defaultValue="Pending" style={{ display: 'none' }} {...register("status")} />

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input placeholder="Your city" {...register("city", { required: true })} />

                <input placeholder="Home address" {...register("address", { required: true })} />

                <input placeholder="Contact no" {...register("phone", { required: true })} />

                <input style={{ fontFamily: "cursive" }} type="submit" value="Add This Service" />
            </form>
            {/* back button  */}
            <div className="pb-5">
                <NavLink to="/home" className="text-decoration-none text-white fs-4">Go to <button className="bg-warning text-white rounded-pill px-3"> Back</button></NavLink>
            </div>
        </div>
    );
};

export default DetailsForm;