import React from 'react';
import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={error} alt="" className='w-100' />
        </div>
    );
};

export default NotFound;