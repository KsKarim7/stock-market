import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';


const Login = () => {
    const navigate = useNavigate();
    const navigateToSignup = () => {
        navigate('/signup')
    }
    return (
        <div className='reg-container '>
            <div className=''>
                <div className="login d-flex justify-content-center">
                    <div className='login-form'>
                        <h1>Login to Your Account</h1>
                        <SocialLogin></SocialLogin>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                {/* <Form.Label>Email address</Form.Label> */}
                                <Form.Control type="email" placeholder="Enter email" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Accept terms and conditions" />
                            </Form.Group>
                            <div className='d-flex justify-content-center'>
                                <button className='button-1' type="submit">
                                    Submit
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
                    <button onClick={navigateToSignup} className='button'>Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;