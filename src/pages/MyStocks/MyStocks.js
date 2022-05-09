import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './MyStocks.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Table } from 'react-bootstrap';
import ShowMyStocks from '../ShowMyStocks/ShowMyStocks';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../api/AxiosPrivate';

const MyStocks = () => {
    const [user] = useAuthState(auth);
    const [stocks, setStocks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getStocks = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/singlestock?email=${email}`;
            // const { data } = await axios.get(url);
            // setStok

            console.log(localStorage.getItem('accessToken'))
            axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })

            try {
                const { data } = await axiosPrivate.get(url);
                setStocks(data);


            }
            catch (error) {
                console.log(error);
                if (error.response.statue === 401 || error.response.statue === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getStocks();
    }, [user])
    return (
        <div className='inventory'>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className='text-center text-xl bg-secondary text-dark' colSpan={9}>Track table of My stocks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            stocks.map(stock => <td><ShowMyStocks
                                key={stock._id}
                                stock={stock}

                            ></ShowMyStocks></td>)
                        }
                    </tr>
                </tbody >

            </Table>

        </div>
    );
};

export default MyStocks;