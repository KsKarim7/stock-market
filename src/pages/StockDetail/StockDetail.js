import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useStockDetail from '../../Hooks/useStockDetail';
import './StockDetail.css'

const StockDetail = () => {
    const { stockId } = useParams();
    const navigate = useNavigate();

    const navigateToInventory = id => {
        navigate(`/inventory`)
    }

    const [share, setShare] = useState();
    // useEffect(() => {
    //     const url = `http://localhost:5000/stock/${id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setShare(data))
    // }, [])

    const handlePlaceOrder = id => {
        const proceed = window.confirm("Are you sure?")
        if (proceed) {
            console.log('deleting  user with id,', id);
            const url = `http://localhost:3000/stock/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = stock.filter(stock => stock._id !== id)
                    setShare(remaining);
                })
        }
    }
    // const updateQuantity = e => {
    //     e.preventDefault();

    //     const url = `http://localhost:5000/stock/${}`;
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateQuantity)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('success', data);
    //             toast('Stock quantity updated')
    //         })
    // }

    const [stock] = useStockDetail(stockId)

    return (
        <div className='body container'>
            <h2 className='text-center mt-5'>Stock Detail :</h2>
            <div className='stock'>
                <div className='detail'>
                    <div className='grid'>
                        <div>
                            <img src={stock.img} className='w-75' alt="" />
                        </div>
                        <div className='stock-info'>
                            <h3 className='text-secondary'>{stock.name}</h3>
                            <h5>Origin: {stock.supplier}</h5>
                            <p>Current Stock Value: ${stock.value}</p>
                            <p><small>{stock.article}</small></p>
                            <p>Stock Quantity: {stock.quantity}</p>
                            <p>Lowest Stock value today: ${stock.high}</p>
                            <p>Growth Rate: {stock.low}%</p>
                            <button onClick={() => handlePlaceOrder(stock._id)} type="submit" class="btn btn-secondary">Place Order</button>
                        </div>
                    </div>
                </div>
                <div className='mg-inventory manage'>
                    <button onClick={() => navigateToInventory(stockId)} className=' fw-bold'>Manage Inventories</button>

                </div>
                <div className='stock-form '>
                    <h2>Sell Stocks:</h2>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label column sm="2">
                                Name of stock:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={stock.name} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3 " controlId="formPlaintextPassword">
                            {/* <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                            <button>asdf</button>
                        </Col> */}
                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label>
                                    Choose Number of stocks you want to sell
                                </Form.Label>
                                <div className='flex'>

                                    <Form.Control className='w-50' type="number" size="lg" />
                                    <button type="button" class="btn mx-4 btn-secondary">Secondary</button>
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