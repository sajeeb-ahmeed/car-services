import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const navigateLogin = event => {
        navigate('/login')
    }
    const handleRegister = event => {
        event.preventDefault()
    }
    return (
        <div className='mx-auto container row' >
            <h2 className='text-center my-4'> Register Now </h2>
            <div className='col-md-4 col-12'>

            </div>
            <Form onSubmit={handleRegister} className='col-md-4 col-12'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>

                <p className='mt-1'>Already Have an Account ? <Link to='/login' onClick={navigateLogin} className='text-info  '>Login  </Link></p>
            </Form>


            <div className='col-md-4 col-12'>

            </div>
        </div>
    );
};

export default Register;