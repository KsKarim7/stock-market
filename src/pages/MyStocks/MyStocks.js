import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MyStocks.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyStocks = () => {
    const [user] = useAuthState(auth);
    const [stocks, setStocks] = useState([])
    useEffect(() => {
        const getStocks = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/stock?email=${email}`;
            const { data } = await axios.get(url);
            console.log(url)
            setStocks(data);

        }
        getStocks();
    }, [user])
    return (
        <div>
            <h2>My Stocks {stocks.length}</h2>
        </div>
    );
};

export default MyStocks;