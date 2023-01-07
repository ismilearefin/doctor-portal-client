import { format } from "date-fns";
import React from "react";

const BookingModal = ({treatment,selected}) => {
    console.log(treatment)
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
          <form className="flex flex-col gap-y-2 justify-center  items-center">
          <input type="text" disabled placeholder={format (selected,"PP")} className="input input-bordered w-full font-bold" />
          <select className="select select-bordered w-full">
            
            {
                treatment?.slots.map((slot,i)=><option value={slot} key={i}>{slot}</option>)
            }
            
        </select>
          <input type="text" placeholder="Full name" className="input input-bordered w-full" />
          <input type="number" placeholder="Number" className="input input-bordered w-full" />
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          <button className="btn btn-neutral w-full">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
