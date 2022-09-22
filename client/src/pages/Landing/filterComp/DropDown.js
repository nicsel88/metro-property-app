import React, {useState} from 'react'
import './DDStyle.css'

function DropDown() {
    const[state, setstate] = useState(false);
    const showDD =()=>{
        setstate(true);
    }
    const hideDD=()=>{
        setstate(false);
    }

      return (
    <div className='dd-section'>
         <p className='PT-text'>Property Type</p>
        <div className='dd-menu' onClick={showDD} onMouseLeave={hideDD}>
           
            All Type
            {state ? (<ul  className='dd-filter'onClick={showDD}>
                <option className='dd-text'>House</option>
                <option className='dd-text'>Apartment</option>
                <option className='dd-text'>Unit</option>
                <option className='dd-text'>Town House</option>
            </ul>) : null }
            

        </div>
      
    </div>
      )
}
export default DropDown;
