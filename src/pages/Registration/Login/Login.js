import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleUserLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent Email')
        }
        else {
            toast('Enter your Email Address!')
        }
    }



    const navigateToSignup = () => {
        navigate('/signup')
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='reg-container '>
            <div className=''>

                <div className="login d-flex justify-content-center">
                    <div className='login-form'>
                        <h1>Login to Your Account</h1>
                        <SocialLogin></SocialLogin>
                        <div className='d-flex align-items-center'>
                            <div style={{ height: '1px', }} className='bg-secondary w-50'></div>
                            <p className='mt-2 mx-3'>or</p>
                            <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                        </div>
                        <Form onSubmit={handleUserLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control onSubmit={handleEmailBlur} type="email" placeholder="Enter email" required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Enter password" required />
                                <div className='d-flex justify-content-between reset'>
                                    <p className='text-danger'>{error?.message}</p>
                                    {
                                        loading
                                    }
                                    <p className=' text-danger'>
                                        Forget Password?  <button onClick={resetPassword} className=' text-success reset-btn '>Reset Password</button>
                                    </p>
                                    {errorElement}
                                </div>
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <button className='button-1' type="submit">
                                    Login
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="signup d-flex align-items-center">
                <div className='mx-5'>
                    <h1 className='my-4'>New Here?</h1>
                    <h3>Sign up and create your first account in share market.</h3>
                    <button className='button-2' onClick={navigateToSignup}>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;