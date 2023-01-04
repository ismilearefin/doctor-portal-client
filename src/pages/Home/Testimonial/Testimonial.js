import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';

const Testimonial = () => {
    return (
        <div className='mt-20 mx-5'>
            <div className='flex justify-between items-center mb-20'>
                <div>
                <h1 className='text-xl text-primary'>Testimonial</h1>
                <p className='text-3xl'>What Our Patients Says</p>
                </div>
                <div>
                    <img src={quote} alt='' className='w-36'/>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-1 mx-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-base mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <div className="avatar mr-5">
                        <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={people1}  alt='pepole1'/>
                        </div>
                        </div>
                        <div>
                            <h2>Winson Herry</h2>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-base mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <div className="avatar mr-5">
                        <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={people1} alt='people'/>
                        </div>
                        </div>
                        <div>
                            <h2>Winson Herry</h2>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='text-base mb-9'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <div className='flex items-center'>
                        <div className="avatar mr-5">
                        <div className="w-20 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img src={people1} alt='people'/>
                        </div>
                        </div>
                        <div>
                            <h2>Winson Herry</h2>
                            <p>California</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;