import React from 'react';
import './SocialLogin.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

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
            <div className='text-center text-3xl'>
                <button className='mx-3' onClick={() => signInWithGoogle()}>
                    <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>

                </button>
                {/* <button onClick={() => signInWithGoogle()}

                    className='btn'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                </button> */}
                <button className='mx-3'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </button>
            </div>
            {errorElement}

        </div >
    );
};

export default SocialLogin;