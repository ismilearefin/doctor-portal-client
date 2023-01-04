import React from 'react';
import appoinment from '../../../assets/images/appointment.png';
import doctorSmall from '../../../assets/images/doctor-small.png';

const MakeAppoinment = () => {
    return (
        <div className='mt-64'>
            <div className="hero h-[533px]" style={{backgroundImage:`url(${appoinment})`}}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctorSmall} className="mt-[-135px] rounded-lg " alt='app'/>
                <div>
                <p className='text-secondary text-bold text-xl mb-5'>Appointment</p>
                <h1 className="text-3xl font-bold text-white mb-5">Make an appointment Today</h1>
                <p className="text-base text-white mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MakeAppoinment;