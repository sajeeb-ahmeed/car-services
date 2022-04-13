import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        console.log(email, password);
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <div className='mx-auto container row' >
            <h2 className='text-center my-4'>Please Login </h2>
            <div className='col-md-4 col-12'>

            </div>
            <Form onSubmit={handleSubmit} className='col-md-4 col-12'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <p className='mt-1'>New to Genius Car ? <span onClick={navigateRegister} className='text-info underline'>Please Register Now </span></p>
            </Form>


            <div className='col-md-4 col-12'>

            </div>
        </div>
    );
};

export default Login;