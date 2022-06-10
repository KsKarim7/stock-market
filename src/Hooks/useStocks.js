import React, { useEffect, useState } from 'react';

const useStocks = () => {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true)
    // console.log(stocks)
    useEffect(() => {
        setLoading(true)
        fetch('https://glacial-spire-92377.herokuapp.com/stock', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                setStocks(data)
                setLoading(false)
            });
    }, [])

    return [stocks, loading];
};

export default useStocks;