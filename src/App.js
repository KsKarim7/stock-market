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
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>


    </>
  );
}

export default App;
