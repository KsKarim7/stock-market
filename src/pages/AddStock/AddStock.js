import React from 'react';
import './AddStock.css'
import { useForm } from "react-hook-form";

const AddStock = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/stock`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(outcome => {
                console.log(outcome);
            })
    }
    return (
        <div className='form bg-secondary w-50 mx-auto'>
            <h2 className='text-center py-4'>Add Stock here</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name' className='mx-auto w-50 mb-2 pb-1' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Email' className='mx-auto w-50 mb-2 pb-1' {...register("email", { required: true, maxLength: 20 })} />
                <input placeholder='Supplier' className='mx-auto w-50 mb-2 pb-1' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mx-auto w-50 mb-2 pb-1' {...register("article")} />
                <input placeholder='value' className='mx-auto w-50 mb-2 pb-1' type="number" {...register("value")} />
                <input placeholder='quantity' className='mx-auto w-50 mb-2 pb-1' type="number" {...register("quantity")} />
                <input placeholder='Highest stock price' className='mx-auto w-50 mb-2 pb-1' type="number" {...register("high")} />
                <input placeholder='Lowest stock price' className='mx-auto w-50 mb-2 pb-1' type="number" {...register("low")} />
                <input placeholder='Image URL' className='mx-auto w-50 mb-2 pb-1' type="text" {...register("img")} />
                <input type="submit" value="Add Stock" />
            </form>
        </div>
    );
};

export default AddStock;