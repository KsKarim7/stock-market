import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import useStocks from '../../Hooks/useStocks';

const ShowInventory = ({ stock }) => {
    const { _id, name, value, high, low } = stock;
    const [stocks, setStocks] = useStocks();


    const handleStockDelete = id => {
        const proceed = window.confirm('This stock stock will be deleted from the inventory, click OK to proceed.')
        if (proceed) {
            console.log('deleting stock with id ', id);
            const url = ` https://glacial-spire-92377.herokuapp.com/stock/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = stocks.filter(stock => _id !== id)
                        setStocks(remaining);
                    }
                })

        }
    }

    return (
        <div className='scroll'>
            <p className='text-center scroll-item'>{name} </p>
            <p className='scroll-item'>Current Value: <span className='fw-bold'>${value}</span></p>
            <p className='scroll-item' >{high} <FontAwesomeIcon className='text-success' icon={faUpLong}></FontAwesomeIcon> </p>
            <p className='scroll-item'> {low} <FontAwesomeIcon className='text-danger' icon={faDownLong}></FontAwesomeIcon></p>
            <button onClick={() => handleStockDelete(_id)} className='btn scroll-item  btn-danger ms-5'>Delete</button>
        </div>

        // <tbody>
        //     <tr>
        //         <td>{name}</td>
        //         <td>{value}</td>
        //         <td>{high}</td>
        //         <td>{low}</td>
        //     </tr>

        // </tbody>
    );
};

export default ShowInventory;