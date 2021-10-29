import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './DetailsForm.css'

const DetailsForm = () => {
    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    //process order
    const onSubmit = data => {
        fetch(`http://localhost:5000/place_order`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed successfully');
                    reset();
                }
            })
    };
    return (
        <div className="set-image">
            <h1 className="pt-5 text-white text-uppercase" style={{ fontFamily: "cursive" }}>Give Your Information </h1>
            <form className="details-form " onSubmit={handleSubmit(onSubmit)} >
                <input defaultValue={serviceId} style={{ display: 'none' }} {...register("order_id")} />
                <input defaultValue="Pending" style={{ display: 'none' }} {...register("status")} />

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}

                <input placeholder="Your city" {...register("city", { required: true })} />

                <input placeholder="Home address" {...register("address", { required: true })} />

                <input placeholder="Contact no" {...register("phone", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default DetailsForm;