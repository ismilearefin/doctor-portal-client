import React from 'react';
import background from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const Calender = ({selected, setSelected}) => {
    

    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
    }


    return (
        <div className="hero min-h-screen bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${background})`}}>
      <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
        <img
          src={chair}
          className="w-2/4 rounded-lg shadow-2xl"
          alt="chair"
        />
        <div>
        <DayPicker
        className='bg-white p-3 shadow-md rounded-md'
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      />
        </div>
      </div>
    </div>
    );
};

export default Calender;