import React from 'react';
import appoinment from '../../../assets/images/appointment.png';


const Contact = () => {
    return (
        <div className='mt-40'>
            <div  className="h-[533px] text-center" style={{backgroundImage:`url(${appoinment})`}}>
                <div className='text-center pt-8'>
                    <h1 className='text-base text-primary mb-3'>Contact Us</h1>
                    <p className='text-3xl text-white'>Stay connected with us</p>
                </div>
                <div className='flex justify-center items-center mt-10'>
                <form className='flex flex-col'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-[450px] h-12 mb-5" />
                <input type="text" placeholder="Subject" className="input input-bordered w-[450px] h-12 mb-5" />
                <textarea className="textarea textarea-bordered w-[450px] h-36 mb-8" placeholder="Your message"></textarea>
                </form>
                </div>
                <button className="px-12 btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Submit</button>
            </div>
        </div>
    );
};

export default Contact;