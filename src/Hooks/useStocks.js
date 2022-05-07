import React, { useEffect, useState } from 'react';

const useStocks = id => {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/stock')
            .then(res => res.json())
            .then(data => setStocks(data));
    }, [id])

    return [stocks, setStocks];
};

export default useStocks;