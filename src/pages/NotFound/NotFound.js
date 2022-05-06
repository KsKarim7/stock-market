import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/')
    }
    return (
        <div className='notFound'>
            <h1 className='text-center text-light'>404- PAGE NOT FOUND</h1>
            <h3 className='text-center text-light'>Sorry, the page you are looking for doesn't exists or temporarily unavailable</h3>
            <button onClick={returnToHome} className='text-center btn btn-secondary'>Go Back to Home Page</button>
        </div>
    );
};

export default NotFound;