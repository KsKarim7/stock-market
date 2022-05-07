import { Link as button, useNavigate } from 'react-router-dom';
import Stock from '../Stock/Stock';
import './Stocks.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import useStocks from '../../Hooks/useStocks';



const Stocks = (props) => {
    const [stocks] = useStocks();
    const navigate = useNavigate();

    const navigateToInventory = () => {
        navigate('/inventory')
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/stock')
    //         .then(res => res.json())
    //         .then(data => setStocks(data));
    // }, [])
    return (
        <div className='container'>

            <h1 className='text   text-center py-5'>Top Rated Stocks To Invest In</h1>
            <div className='stocks-container '>
                {
                    stocks.slice(0, 6).map(stock => <Stock
                        key={stock._id}
                        stock={stock}
                    ></Stock>)
                }

            </div>
            <div className='mg-inventory'>

                <button onClick={navigateToInventory} className='text-light fw-bold text-xl'>Manage Inventories <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Stocks;