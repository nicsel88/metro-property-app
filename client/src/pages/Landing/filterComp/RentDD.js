import React,{useState} from 'react'
import './RentDDStyle.css';

function RentDD() {
    const[state, setstate] = useState(false);
    const showRDD =()=>{
        setstate(true);
    }
    const hideRDD=()=>{
        setstate(false);
    }

  return (
    <div className='Rentdd-section'>
    <p className='RW-text'>Rent Per Week</p>
   <div className='Rdd-menu' onClick={showRDD} onMouseLeave={hideRDD}>
      
            Any
            {state ? (<ul  className='Rdd-filter'onClick={showRDD}>
                <option className='Rdd-text'>$150 - $250</option>
                <option className='Rdd-text'>$250 - $450</option>
                <option className='Rdd-text'>$350 - $650</option>
                <option className='Rdd-text'>$450 - $900</option>
            </ul>) : null }
    </div>
   
 
</div>
 )
}
export default RentDD;
