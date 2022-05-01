import React from 'react';
import google from '../../../../img/social/google.png'
import github from '../../../../img/social/github.png'

const SocialLogin = () => {
    return (
        <div>
            <p className='font-medium text-xl text-center'>Login using social networks</p>
            <div className='text-center'>
                <button className='btn'>
                    <img style={{ width: '40px' }} src={google} alt="" />
                </button>
                <button className='btn'>
                    <img style={{ width: '45px' }} src={github} alt="" />
                </button>
            </div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', }} className='bg-secondary w-50'></div>
                <p className='mt-2 mx-3'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
        </div>
    );
};

export default SocialLogin;