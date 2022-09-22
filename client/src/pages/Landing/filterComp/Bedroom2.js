import React, {useState} from 'react'
import './Bedroomstyle2.css';


function Bedroom2() {
    const[state, setstate] = useState(false);
    const showBDR2 =()=>{
        setstate(true);
    }
    const hideBDR2=()=>{
        setstate(false);
    }

  return (
    <div className='BDR-section2'>
    <p className='BDR-text2'>Bedroom</p>
   <div className='BdR-menu2' onClick={showBDR2} onMouseLeave={hideBDR2}>
      
            Any
            {state ? (<ul  className='BDR2-filter'onClick={showBDR2}>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5+</option>
                
            </ul>) : null }
    </div>
   
 
</div>
 )
}

export default Bedroom2;
