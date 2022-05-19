import React, { useEffect, useState } from 'react';

const useStocks = () => {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        fetch(' https://glacial-spire-92377.herokuapp.com/stock')
            .then(res => res.json())
            .then(data => setStocks(data));
    }, [])

    return [stocks, setStocks];
};

export default useStocks;