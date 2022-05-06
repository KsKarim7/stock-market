import React from 'react';
import Stocks from '../Stocks/Stocks';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='bg-dark'>
                <Stocks  ></Stocks>
            </div>




        </div>
    );
};

export default Home;