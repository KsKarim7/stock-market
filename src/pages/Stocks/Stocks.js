import React, { useEffect, useState } from 'react';
import Stock from '../Stock/Stock';
import './Stocks.css'

const Stocks = (props) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/stock')
            .then(res => res.json())
            .then(data => setStocks(data));
    }, [])
    return (
        <div className=''>

            <h1 className='text  text-center py-5'>Top Rated Stocks To Invest In</h1>
            <div className='stocks-container container'>
                {
                    stocks.map(stock => <Stock
                        key={stock._id}
                        stock={stock}
                    ></Stock>)
                }
            </div>
        </div>
    );
};

export default Stocks;