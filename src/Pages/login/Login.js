import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }
    if (user) {
        navigate(from, { replace: true });
    }
    // if (!user) {
    //     navigate('/register')
    //     return alert('Please register frist')
    // }


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
                    Login
                </Button>

                <p className='mt-1'>New to Genius Car ? <Link to='/register' onClick={navigateRegister} className='text-info  '>Please Register  </Link></p>
            </Form>


            <div className='col-md-4 col-12'>

            </div>
        </div>
    );
};

export default Login;