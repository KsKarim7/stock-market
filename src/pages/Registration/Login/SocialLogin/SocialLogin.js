import React from 'react';
import google from '../../../../img/social/google.png'
import github from '../../../../img/social/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);
    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>{error.message}</p>
            </div>

    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/')
    }
    return (
        <div>
            <p className='font-medium text-xl text-center'>Login using social networks</p>
            <div className='text-center'>
                <button onClick={() => signInWithGoogle()}

                    className='btn'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                </button>
                <button className='btn'>
                    <img style={{ width: '45px' }} src={github} alt="" />
                </button>
            </div>
            {errorElement}

        </div>
    );
};

export default SocialLogin;