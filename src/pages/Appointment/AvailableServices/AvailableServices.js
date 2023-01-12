import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const AvailableServices = ({selected}) => {
    const [treatment, settreatment] = useState(null)

    const {data :appointmentOptions=[]}= useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: () => fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
    })


    
    return (
        <div className='flex flex-col justify-center'>
            <p className='text-center font-bold text-secondary mt-14    text-2xl'>Available Services on {format(selected, "PP")}</p>
            <p className='text-center text-gray-400 mt-4'>Please select a service.</p>
            <div className='grid grid-cols-3 gap-10 self-center mt-14'>
             {appointmentOptions.map((option) => 
                <div key={option._id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-xl text-secondary">{option.name}</h2>
                    <p className='text-center'>{option?.slots.length > 0 ? option?.slots[0] : 'Try another day'}</p>
                    <p className='text-center text-sm'>{option?.slots.length} spaces available</p>
                    <div className="card-actions justify-center mt-4">
                    <label 
                    className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white" htmlFor="booking-modal"
                    onClick={()=> settreatment(option)}
                    >Book Appointment</label>
                    </div>
                </div>
                {
                    treatment && 
                    <BookingModal
                    treatment={treatment}
                    selected={selected}
                    ></BookingModal>
                }
                </div>
             )}
            </div>
        </div>
    );
};

export default AvailableServices;