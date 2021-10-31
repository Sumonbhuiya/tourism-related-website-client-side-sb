import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import TotalServices from "../../Components/TotalServices/TotalServices"
import './AddService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    // for add a new service call server 
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
        <>
            {/* add section header  */}
            <div className="py-3 px-2 bg-secondary bg-gradient">
                <h3 className="text-info" style={{ fontFamily: "Satisfy, cursive", }}>Plan The</h3>
                <h1 className="text-dark fw-bold" style={{ fontFamily: "Rockwell" }}>Perfect Holiday</h1>
                <p className="text-white fs-6">Describe your perfect holiday. We should say: where you would go and <br /> who you would't go.</p>
            </div>
            {/* add section form for add service  */}
            <div className="service-background">
                <h2 className="pt-5 text-white text-uppercase" style={{ fontFamily: "cursive" }}>Add a new Place here</h2>
                <form className="add-service form-background" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder="name Like(Rome (Italy))" />
                    <input {...register("img", { required: true })} placeholder="image url (link)" />
                    <textarea {...register("describe", { required: true })} placeholder="description" />
                    <input type="text" {...register("price", { required: true })} placeholder="Cost Like($amount)" />
                    <input type="text" {...register("time", { required: true })} placeholder="How many days? Like(1 Day)" />
                    <input type="text" {...register("rating", { required: true })} placeholder="Rating Like(5.0 Good)" />
                    <input style={{ fontFamily: "cursive" }} type="submit" value="Add" />
                </form>
                <br />
            </div>
            {/* call route */}
            <TotalServices></TotalServices>
        </>
    );
};

export default AddService;