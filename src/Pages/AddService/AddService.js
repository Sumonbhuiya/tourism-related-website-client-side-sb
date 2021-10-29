import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('https://pure-island-78807.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Service add successfully!');
                    reset();
                }
            })
    };
    return (
        <div className="service-background">
            <h1 className="pt-5 text-white text-uppercase" style={{ fontFamily: "cursive" }}>Add a new service here</h1>
            <form className="add-service" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <input {...register("img", { required: true })} placeholder="image url" />
                <textarea {...register("describe", { required: true })} placeholder="description" />
                <input type="text" {...register("price", { required: true })} placeholder="Cost" />
                <input type="text" {...register("time", { required: true })} placeholder="How many days?" />
                <input type="text" {...register("rating", { required: true })} placeholder="Rating" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;