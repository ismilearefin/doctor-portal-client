import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import fluoride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='my-36 mx-5'>
            <div className='text-center mb-16'>
            <h1 className='font-sans text-xl mb-2 font-bold text-secondary'>OUR SERVICES</h1>
            <p className='font-sans text-4xl'>Services We Provide</p>
            </div>

          <div className='grid grid-cols-3 gap-5'>
          <div className="card max-w-md bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={cavity} alt="Shoes" className="rounded-xl w-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-sans text-xl ">Fluoride Treatment</h2>
                <p className='font-sans text-base'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                <div className="card-actions">
                </div>
            </div>
            </div>
            <div className="card max-w-md bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src={fluoride} alt="Shoes" className="rounded-xl w-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-sans text-xl">Cavity Filling</h2>
                <p className='font-sans text-base'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                <div className="card-actions">
                </div>
            </div>
            </div>
            <div className="card max-w-md bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={whitening} alt="Shoes" className="rounded-xl w-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-sans text-xl">Teeth Whitening</h2>
                <p className='font-sans text-base'>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                <div className="card-actions">
                </div>
            </div>
            </div>
          </div>
        </div>
    );
};

export default Services;