import React, { useEffect, useState } from 'react';
import './ShowMyStocks.css'
import axios from 'axios'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ShowMyStocks = ({ stock }) => {
    const [user] = useAuthState(auth);
    const [stocks, setStocks] = useState();

    const { _id, name, value, high, low } = stock;
    // const [stocks, setStocks] = useStocks();
    useEffect(() => {
        const getStocks = async () => {
            const email = user?.email;
            const url = ` https://glacial-spire-92377.herokuapp.com/singlestock?email=${email}`;
            const { data } = await axios.get(url);
            // console.log(url)
            setStocks(data);
        }
        getStocks();
    }, [user])




    const handleStockDelete = id => {
        const proceed = window.confirm('This stock stock will be deleted from the inventory, click OK to proceed.')
        if (proceed) {
            console.log('', id);
            const url = ` https://glacial-spire-92377.herokuapp.com/singlestock/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = stocks.filter(stock => _id !== id)
                        setStocks(remaining);
                    }
                })

        }
    }
    return (
        <div>
            {/* <p>{_id}</p> */}
            <p className='text-center'>{name} </p>
            <p>Current Value: <span className='fw-bold'>${value}</span></p>
            <p >{high} <FontAwesomeIcon className='text-success' icon={faUpLong}></FontAwesomeIcon> </p>
            <p > {low} <FontAwesomeIcon className='text-danger' icon={faDownLong}></FontAwesomeIcon></p>
            <button onClick={() => handleStockDelete(_id)} className='btn  btn-danger ms-5'>Delete</button>
        </div>
    );
};

export default ShowMyStocks;