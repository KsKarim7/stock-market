import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);

    if (loading) {
        <Loading></Loading>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Provided Email is not Verified</h3>
            <h5 className='text-success'>Verify your Email Address</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent Email')
                }}
            >Send Email Verification Again</button>
            <ToastContainer></ToastContainer>
        </div>
    }
    return children;
};

export default RequireAuth;