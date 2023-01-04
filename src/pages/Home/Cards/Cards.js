import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';


const Cards = () => {
    return (
        <div className='grid grid-cols-3 gap-3 my-10'>
           <div className="card max-w-md h-48 bg-primary bg-gradient-to-l from-primary to-secondary text-primary-content flex flex-row justify-center items-center p-4">
            <div>
                <img src={clock} alt='icon' className='w-20 mr-2'/>
            </div>
            <div className="card ml-3">
                <h2 className="card-title font-sans text-xl text-white">Opening Hours</h2>
                <p className='font-sans text-base text-white'>Lorem Ipsum is simply dummy text of the pri</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
           <div className="card max-w-md h-48 bg-neutral text-primary-content flex flex-row justify-center items-center p-4">
            <div>
                <img src={marker} alt='icon' className='w-20 mr-2'/>
            </div>
            <div className="card ml-3">
                <h2 className="card-title font-sans text-xl text-white">Visit our location</h2>
                <p className='font-sans text-base text-white'>Brooklyn, NY 10036, United States</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
           <div className="card max-w-md h-48 bg-primary bg-gradient-to-l from-primary to-secondary text-primary-content flex flex-row  items-center p-4">
            <div>
                <img src={phone} alt='icon' className='w-20 mr-2'/>
            </div>
            <div className="card ml-3">
                <h2 className="card-title font-sans text-xl text-white">Contact us now</h2>
                <p className='font-sans text-base text-white'>+000 123 456789</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cards;