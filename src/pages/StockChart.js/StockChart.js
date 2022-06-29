import React from 'react';
import useStocks from '../../Hooks/useStocks';
import { Line, YAxis, XAxis, Tooltip, ComposedChart, CartesianGrid, Legend, Area, Bar, Scatter, ResponsiveContainer } from 'recharts'
import './StockChart.css'
import { useEffect } from 'react';
import { useState } from 'react';

const StockChart = () => {
    // console.log('rendering')
    // const [stocks, loading] = useStocks();
    // console.log(stocks)
    // console.log(loading)
    // if ()
    // if (loading) {

    //     return;
    // }

    // console.log(stocks)
    const [chart, setChart] = useState([])
    useEffect(() => {
        fetch('https://glacial-spire-92377.herokuapp.com/stock')
            .then(res => res.json())
            .then(data => {
                setChart(data)
                console.log(data[2])
            })
    }, [])

    return (
        <div >
            <h1 className='text text-center chart' style={{ padding: '60px' }}>A Composed Chart is shown below on today's stock report:</h1>
            <div className='for-mob'>


                <div className='container' style={{ padding: '30px' }}>
                    {/* <ResponsiveContainer width="100%" height="100%"> */}
                    <ComposedChart className='composedChart'
                        width={1000}
                        height={450}
                        data={chart}
                        margin={{
                            // right: 20,
                            bottom: 20,
                            left: 20,
                        }}>
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey={chart?.name} scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey={chart?.high} barSize={20} fill="#656262" />
                        <Bar dataKey={chart?.low} barSize={20} fill="#cfc9c9" />
                        <Line type="monotone" dataKey={chart?.value} stroke="#108dbe" />
                        <Scatter dataKey={chart?.quantity} fill="purple" />

                    </ComposedChart>
                    {/* </ResponsiveContainer> */}

                </div>

            </div>
        </div >
    );
};

export default StockChart;