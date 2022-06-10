import React from 'react';
import useStocks from '../../Hooks/useStocks';
import { Line, YAxis, XAxis, Tooltip, ComposedChart, CartesianGrid, Legend, Area, Bar, Scatter, ResponsiveContainer } from 'recharts'
import './StockChart.css'

const StockChart = () => {
    console.log('rendering')
    const [stocks, loading] = useStocks();
    console.log(stocks)
    console.log(loading)
    // if ()
    if (loading) {

        return;
    }

    // console.log(stocks)

    return (
        <div >
            <h1 className='text text-center chart' style={{ paddingTop: '60px' }}>A Composed Chart is shown below on today's stock report:</h1>
            <div className='for-mob'>
                {
                    stocks.length > 0 &&
                    <div className='container' style={{ padding: '50px' }}>
                        {/* <ResponsiveContainer width="100%" height="100%"> */}
                        <ComposedChart className='composedChart'
                            width={1200}
                            height={500}
                            data={stocks}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}>
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey={stocks?.name} scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey={stocks?.high} barSize={20} fill="#656262" />
                            <Bar dataKey={stocks?.low} barSize={20} fill="#cfc9c9" />
                            <Line type="monotone" dataKey={stocks?.value} stroke="#108dbe" />
                            <Scatter dataKey={stocks?.quantity} fill="purple" />

                        </ComposedChart>
                        {/* </ResponsiveContainer> */}

                    </div>
                }
            </div>
        </div>
    );
};

export default StockChart;