import React from 'react';
import { Link } from 'react-router-dom';
import lazyMacanic from '../../../images/lazy-mecanic.jpg'
const Notfound = () => {
    return (
        <div>
            <section className=' container-fluid p-lg-5 notfound text-dark '>
                <div className='row justify-content-center  align-items-center'>
                    <div className='col-md-5 '>
                        <h3 className='mb-2 '>
                            Error 404
                        </h3>
                        <h1 className='mb-4 '>
                            Oops! The page you're looking for isn't here.
                        </h1>
                        <h4>Mecanic Sleeping</h4>
                        <p className='mb-5 '>
                            You might have the wrong address, or the page may have moved.
                        </p>
                        <div className='d-flex gap-4'>
                            <p>
                                <Link
                                    to='/'
                                    className='btn - btn-outline-dark'
                                >
                                    Back to homepage
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to='/login'
                                    className='btn - btn-outline-dark'
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className='col-md-7'>
                        <Link to='/'>
                            <img className='img-fluid'
                                src={lazyMacanic}
                                alt=''
                            />
                        </Link>

                    </div>
                </div>
                <div className='notfounds  text-center'>

                </div>
            </section>
        </div>
    );
};

export default Notfound;