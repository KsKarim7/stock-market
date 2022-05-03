import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='signup-bg d-flex justify-content-center align-items-center '>
            <div className='form-container'>
                <Form>
                    <h2 className='text-secondary'>Get started with your account</h2>
                    <h2 className='my-4 text-secondary' >Sign Up</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <div className='d-flex'>
                        <div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className='fw-light' type="checkbox" label="Accept all terms and conditions" />
                            </Form.Group>
                        </div>
                        <div>
                            <Link className='login-link' to='/login'>Already have an account?  <span className=''>Login</span></Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button className='button-1' type="submit">
                            Submit
                        </button>
                    </div>

                </Form>
                <div className='d-flex align-items-center'>
                    <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                    <p className='mt-2 mx-3 fw-bold'>or</p>
                    <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;