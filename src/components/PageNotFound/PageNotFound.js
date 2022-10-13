import React from 'react';
import image from '../../image/not-found.jpg'

const PageNotFound = () => {
    return (
        <div className='h-[90vh] flex items-center justify-center'>
            <img className='w-7/12 ' src={image} alt="" />
            
        </div>
    );
};

export default PageNotFound;