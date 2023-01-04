import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className='grid grid-cols-2 justify-center items-center'>
            <div className='flex justify-center items-center'>
                <img src={treatment} alt="dental care" className='max-w-md'/>
            </div>
            <div className='max-w-lg'>
                <h1 className='text-5xl font-bold text-neutral '>Exceptional Dental Care, on Your Terms</h1>
                <p className='text-base mt-6 mb-12'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
    );
};

export default DentalCare;