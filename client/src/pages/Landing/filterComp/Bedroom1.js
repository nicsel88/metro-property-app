import React, {useState} from 'react'
import './Bedroomstyle1.css';


function Bedroom1() {
    const[state, setstate] = useState(false);
    const showBDR1 =()=>{
        setstate(true);
    }
    const hideBDR1=()=>{
        setstate(false);
    }

  return (
    <div className='BDR-section1'>
    <p className='BDR-text1'>Bedroom</p>
   <div className='BdR-menu1' onClick={showBDR1} onMouseLeave={hideBDR1}>
      
            Any
            {state ? (<ul  className='BDR1-filter'onClick={showBDR1}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                
            </ul>) : null }
    </div>
    
 
</div>
 )
}

export default Bedroom1;
