import React from 'react';
import { useParams } from 'react-router-dom';

const StockDetail = () => {
    const { stockId } = useParams();
    return (
        <div>
            <h2>StockDetail :{stockId}</h2>
        </div>
    );
};

export default StockDetail;