import React from 'react';
import './Newsletter.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const Newsletter = () => {
    const handleSubmit = () => {
        toast('Thank your for being with us')
    }
    return (
        <div className='d-flex justify-content-center p-5'>
            <div>
                <FontAwesomeIcon className=' awesome text-center' icon={faNewspaper}></FontAwesomeIcon>
                <h1 className='news p-2'>Newsletter Signup</h1>
                <h5 className='news ps-3'>Enter your info to get latest stock update daily.</h5>
                <>
                    {/* <Form.Label htmlFor="inputPassword5">Password</Form.Label> */}
                    <Form.Control
                        className='m-3'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='First Name'
                    />
                    <Form.Control
                        className='m-3'
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Last Name'

                    />
                    <Form.Control
                        className='m-3'
                        type="email"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder='Email Address'

                    />

                </>
                <button onClick={handleSubmit} className='submit'>Sign Up</button>
            </div>

        </div>
    );
};

export default Newsletter;