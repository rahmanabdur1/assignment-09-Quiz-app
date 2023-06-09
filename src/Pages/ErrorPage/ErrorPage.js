import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='p-20'>
            <div className='text-center'>
                <h1 className='text-2xl text-orange-600'> This Route is not found: 404</h1>
                <h2><Link className='text-2xl text-orange-800 py-4' to='/'>Go To Back Home Page</Link></h2>
            </div>
        </div>

    );
};

export default ErrorPage;