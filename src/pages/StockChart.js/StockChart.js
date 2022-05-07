import React from 'react';
import useStocks from '../../Hooks/useStocks';
import { Line, YAxis, XAxis, Tooltip, ComposedChart, CartesianGrid, Legend, Area, Bar, Scatter } from 'recharts'
import './StockChart.css'

const StockChart = (stock) => {
    const { _id, name, value, high, low } = stock;
    const [stocks, setStocks] = useStocks();

    return (
        <div >
            <h1 className='text text-center chart' style={{ paddingTop: '60px' }}>A Composed Chart is shown below on today stock report:</h1>
            <div className='container' style={{ padding: '50px' }}>
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
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="high" barSize={20} fill="#656262" />
                    <Bar dataKey="low" barSize={20} fill="#cfc9c9" />
                    <Line type="monotone" dataKey="value" stroke="#108dbe" />
                    <Scatter dataKey="quantity" fill="purple" />

                </ComposedChart>

            </div>
        </div>
    );
};

export default StockChart;