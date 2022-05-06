import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Stocks from '../Stocks/Stocks';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <div className='bg-dark'>
                <Stocks  ></Stocks>
            </div>
            {/* <Footer></Footer> */}




        </>
    );
};

export default Home;