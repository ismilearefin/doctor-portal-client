import React, { useState } from 'react';
import AvailableServices from './AvailableServices/AvailableServices';
import Calender from './Calander/Calander';


const Appointment = () => {
    const [selected, setSelected] = useState(new Date());
       return(
        <div>
        <Calender
         selected={selected}
         setSelected={setSelected}
        ></Calender>
        <AvailableServices selected={selected} ></AvailableServices>
    </div>
       )
    
};

export default Appointment;