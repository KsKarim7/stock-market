import React, { useEffect, useState } from 'react';

const useStockDetail = id => {
    const [stock, setStock] = useState({})

    useEffect(() => {
        const url = ` https://glacial-spire-92377.herokuapp.com/stock/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [id])
    return [stock]

};

export default useStockDetail;