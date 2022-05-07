import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Registration/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/Registration/SignUp/SignUp';
import QnA from './pages/QnA/QnA';
import Stock from './pages/Stock/Stock';
import Stocks from './pages/Stocks/Stocks';
import { ToastContainer } from 'react-toastify';
import Footer from './pages/Shared/Footer/Footer';
import Inventory from './pages/Inventory/Inventory';
import StockDetail from './pages/StockDetail/StockDetail';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import AddStock from './pages/AddStock/AddStock';
import MyStocks from './pages/MyStocks/MyStocks'

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='qna' element={<QnA></QnA>}></Route>
        <Route path='stock' element={<Stock></Stock>}></Route>
        <Route path='stocks' element={<Stocks></Stocks>}></Route>
        <Route path='inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/stock/:stockId' element={
          <RequireAuth>
            <StockDetail></StockDetail>
          </RequireAuth>
        }></Route>
        <Route path='addstock' element={
          <RequireAuth>
            <AddStock></AddStock>
          </RequireAuth>
        }></Route>
        <Route path='mystocks' element={
          <RequireAuth>
            <MyStocks></MyStocks>
          </RequireAuth>
        } >

        </Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer />


    </>
  );
}

export default App;
