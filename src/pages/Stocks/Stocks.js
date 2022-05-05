import React, { useEffect, useState } from 'react';
import Stock from '../Stock/Stock';

const Stocks = (props) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/stock')
            .then(res => res.json())
            .then(data => setStocks(data));
    }, [])
    return (
        <div>
            <h1 className='text-center m-5'>Top Rated Stocks To Invest In {stocks.length} </h1>
            <div>
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