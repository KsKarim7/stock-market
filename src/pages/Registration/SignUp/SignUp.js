import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './SignUp.css'
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();


    const [
        createUserWithEmailAndPassword,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const handleUserSignUp = async e => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match, type passwords correctly!')
            return;
        }
        if (password.length < 6) {
            setError('Password must contain at least 6 characters or above!')
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Update profile')
        navigate('/')
    }
    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handleNameBlur = e => {
        setName(e.target.value);
    }

    const handleConfirmPasswordBlur = e => {
        setConfirmPassword(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    if (loading || updating) {
        return <Loading></Loading>
    }

    return (
        <div className='signup-bg d-flex justify-content-center align-items-center '>
            <div className='form-container'>
                <Form onSubmit={handleUserSignUp}>
                    <h2 className='text-secondary'>Get started with your account</h2>
                    <h2 className='my-3 text-secondary' >Sign Up</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <div className='d-flex'>
                        <div>
                            <Form.Group onClick={() => setAgree(!agree)} className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check className={agree ? 'text-primary' : 'text-danger'} type="checkbox" label="Accept all terms and conditions" />
                            </Form.Group>
                            <p className='text-danger'>{error}</p>
                        </div>
                        <div>
                            <Link className='login-link' to='/login'>Already have an account?  <span className=''>Login</span></Link>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <input
                            disabled={!agree}
                            className='button-1'
                            type="submit"
                            value="Sign Up">
                        </input>
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