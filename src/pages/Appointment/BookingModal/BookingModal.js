import { format } from "date-fns";
import React from "react";

const BookingModal = ({treatment,selected}) => {
    console.log(treatment)
    const handleBooking = (e) =>{
        e.preventDefault();
        
        const name = e.target.name.value;
        const slot = e.target.slot.value;
        const number = e.target.number.value;
        const email = e.target.email.value;

        const booking = {
            appointmentDate : format (selected,"PP"),
            treatment: treatment?.name,
            patient : name,
            slot : slot,
            number : number,
            email : email
        }

console.log(booking);
    }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-3 text-center ">
            {treatment?.name}
          </h3>
          <form onSubmit={handleBooking} className="flex flex-col gap-y-2 justify-center  items-center">
          <input name="date" type="text" disabled placeholder={format (selected,"PP")} className="input input-bordered w-full font-bold" />
          <select name="slot" className="select select-bordered w-full">
            
            {
                treatment?.slots.map((slot,i)=><option value={slot} key={i}>{slot}</option>)
            }
            
        </select>
          <input name="name" type="text" placeholder="Full name" className="input input-bordered w-full" />
          <input name="number" type="number" placeholder="Number" className="input input-bordered w-full" />
          <input name="email" type="email" placeholder="Email" className="input input-bordered w-full" />
          <button className="btn btn-neutral w-full">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
