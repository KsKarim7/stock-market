import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Registration/Login/Login';
import SocialLogin from './pages/Registration/Login/SocialLogin/SocialLogin';
import SignUp from './pages/Registration/SignUp/SignUp';

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

      </Routes>

    </>
  );
}

export default App;
