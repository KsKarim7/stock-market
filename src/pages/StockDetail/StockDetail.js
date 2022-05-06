import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useStockDetail from '../../Hooks/useStockDetail';

const StockDetail = () => {
    const { stockId } = useParams();
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }

    const [stock] = useStockDetail(stockId)

    return (
        <div className='stock'>
            <h2>StockDetail :{stockId}</h2>
            <img className='w-50' alt="" />
            <p>Price: {stock.value}</p>
            <p><small>{ }</small></p>
            <button onClick={() => navigateToInventory(stockId)} className=' fw-bold'>Manage Inventories</button>
        </div>
    );
};

export default StockDetail;