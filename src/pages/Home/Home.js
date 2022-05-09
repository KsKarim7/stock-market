import React from 'react';
import Stocks from '../Stocks/Stocks';
import Banner from './Banner/Banner';
import StockChart from '../StockChart.js/StockChart';
import Newsletter from '../Newsletter/Newsletter';
import useStocks from '../../Hooks/useStocks';

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <div className='bg-dark'>
                <Stocks  ></Stocks>

                <StockChart></StockChart>
            </div>
            <div style={{ backgroundColor: 'rgb(32, 40, 30) ' }}>
                <Newsletter></Newsletter>
            </div>


        </>
    );
};

export default Home;