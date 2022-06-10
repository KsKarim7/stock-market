import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useStocks from '../../Hooks/useStocks';
import ShowInventory from '../ShowInventory/ShowInventory';
import './Inventory.css'

const Inventory = (props) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/addstock')
    }
    const [stocks] = useStocks();


    return (
        <div className='inventory '>
            <Table id='scroll-table' striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className='text-center text-xl bg-secondary text-dark' colSpan={9}>Track table of today's latest stocks</th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        {
                            stocks.map(stock => <td><ShowInventory
                                key={stock.id}
                                stock={stock}

                            ></ShowInventory></td>)
                        }
                    </tr>
                </tbody >

            </Table>
            <div className='d-flex  justify-content-center my-4'>
                <button onClick={handleNavigate} className='button-1 ' type="submit">
                    Add  new Stock
                </button>
            </div>
        </div>
    );
};

export default Inventory;