import userEvent from '@testing-library/user-event';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useStockDetail from '../../Hooks/useStockDetail';
import './StockDetail.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const StockDetail = () => {
    const { stockId } = useParams();
    const navigate = useNavigate();
    const [update, setUpdate] = useState(false)
    // const [stock] = useStockDetail(stockId)

    const [stock, setStock] = useState({})

    useEffect(() => {
        const url = ` https://glacial-spire-92377.herokuapp.com/stock/${stockId}`

        fetch(url)
            .then(res => res.json())
            .then(data => setStock(data))
    }, [stockId, update])


    const navigateToInventory = id => {
        navigate(`/inventory`)
    }
    const sellRef = useRef('');

    const handlePlaceOrder = id => {
        // const quantity = share.quantity
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            // console.log('deleting  user with id,', id);
            const url = ` https://glacial-spire-92377.herokuapp.com/stock/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({ quantity: stock.quantity - 1 })

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount > 0) {
                        setUpdate(!update)
                    }
                })
        }
    }

    const handleSellOrder = (id) => {
        const stockNumber = sellRef.current.value;
        // console.log(stockNumber)
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            console.log('deleting  user with id,', id);
            const url = ` https://glacial-spire-92377.herokuapp.com/stock/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": 'application/json'
                },
                body: JSON.stringify({ quantity: stock.quantity + parseInt(stockNumber) })
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    // const remaining = stock.filter(stock => stock._id !== id)
                    // setShare(remaining);
                    if (data.modifiedCount > 0) {
                        setUpdate(!update)
                    }
                })
        }

    }


    return (
        <div className='body container'>
            <h2 className='text-center mt-5'>Stock Information :</h2>
            <div className='stock'>
                <div className='detail'>
                    <div className='grid'>
                        <div>
                            <img src={stock.img} className='w-75' alt="" />
                        </div>
                        <div className='stock-info'>
                            <h3 style={{ color: '#c8c6c6' }}>{stock.name}</h3>
                            <h5 className="text-light">Origin: {stock.supplier}</h5>
                            <p className="text-light">Current Stock Value: ${stock.value}</p>
                            <p className="text-light">{stock.article}</p>
                            <p className="text-light">Stock Quantity: {stock.quantity}</p>
                            <p className="text-light">Lowest Stock value today: ${stock.high}</p>
                            <p className="text-light">Growth Rate: {stock.low}%</p>
                            <button onClick={() => handlePlaceOrder(stock._id)} type="submit" className="btn btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className='mg-inventory'>

                    <button onClick={navigateToInventory} className='text-dark fw-bold me-5 mt-3  text-xl'>Manage Inventories <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
                </div>
                <div className='stock-form '>
                    <h2>Sell Stocks:</h2>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label className='underline' column sm="2">
                                <h4>Name of stock:</h4>
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control className='text-2xl fw-bold' plaintext readOnly defaultValue={stock.name} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 " controlId="formPlaintextPassword">
                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label className='text-xl pb-2' >
                                    Choose Number of stocks you want to sell:
                                </Form.Label>
                                <div className='flex'>

                                    <Form.Control ref={sellRef} name='name' className='w-50' type="number" size="lg" />
                                    <button onClick={() => handleSellOrder(stock._id)} type="button" className="btn mx-4 btn-secondary">Sell Stock</button>
                                </div>
                            </Form.Group>
                        </Form.Group>
                    </Form>
                </div>
            </div>


        </div>
    );
};

export default StockDetail;