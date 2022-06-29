import React from 'react';
import './AddStock.css'
import { useForm } from "react-hook-form";

const AddStock = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = ` https://glacial-spire-92377.herokuapp.com/stock`;
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
        <div className='form bg-gray-400 w-50 mx-auto'>
            <h2 className='text-center text-white h-16 bg-black py-4'>Add Stocks</h2>
            <form className='d-flex mt-4 flex-column gap-y-5 ' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Name ' className='mx-auto border-t-4  border-slate-800 pb-2 text-center  w-50 ' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Email' className=' border-slate-800 pb-2 border-t-4 text-center mx-auto w-50  ' {...register("email", { required: true, maxLength: 20 })} />
                <input placeholder='Supplier' className='mx-auto  border-slate-800 pb-2 border-t-4 text-center w-50  ' {...register("supplier", { required: true, maxLength: 20 })} />
                <textarea placeholder='Description' className='mx-auto  border-slate-800 pb-2 border-t-4 text-center w-50  ' {...register("article")} />
                <input placeholder='Value' className='mx-auto  border-slate-800 pb-2 border-t-4 text-center w-50  ' type="number" {...register("value")} />
                <input placeholder='Quantity' className='mx-auto  border-slate-800 pb-2 border-t-4 text-center w-50  ' type="number" {...register("quantity")} />
                <input placeholder='Highest stock price' className='mx-auto w-50    border-slate-800 pb-2 border-t-4 text-center' type="number" {...register("high")} />
                <input placeholder='Lowest stock price' className='mx-auto  border-slate-800 pb-2 border-t-4 text-center w-50  ' type="number" {...register("low")} />
                <input placeholder='Image URL' className='mx-auto  border-slate-800 pb-2 border-t-4 text-center w-50  ' type="text" {...register("img")} />
                <input type="submit" className='button-1 mt-2 mx-auto' value="Add Stock" />
            </form>
        </div>
    );
};

export default AddStock;