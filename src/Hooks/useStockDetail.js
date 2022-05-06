import React, { useEffect, useState } from 'react';

const useStockDetail = id => {
    const [stock, setStock] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/stock/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [id])
    return [stock]

};

export default useStockDetail;