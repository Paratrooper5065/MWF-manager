import React from 'react';
import './EW.css';
import { DatePicker, DatePickerInput } from 'carbon-components-react';
import 'carbon-components/css/carbon-components.min.css';
import BackButton from './BackButton';


function EW() {

    return (
        <div>
            <BackButton />
            <header className="EW-header">
               <DatePicker
               datePickerType="range"
               dateFormat="m/d/Y" 
             >
                <DatePickerInput
                id="StartDate"
                labelText="Enter Start Date"
                pattern="Short"
                placeholder="mm/dd/yyyy"
                type="text"/>
                <DatePickerInput
                id="EndDate"
                labelText="Enter End Date"
                pattern="Short"
                placeholder="mm/dd/yyyy"
                type="text"/>
                
               </DatePicker>
            </header>
        </div>
    );
}

export default EW;
