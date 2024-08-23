import './InternShipCard.css'
import { useState } from 'react';
import PopUpDetails from '../pages/PopUpDetails';
const VolunterCard = ({data}) =>{
  
  const [pop,setPop] = useState(false);
  const popUp = () =>{
     if(pop){
        document.body.style.overflow="scroll"
        setPop(!pop)
     }else{
        document.body.style.overflow="hidden"
        setPop(!pop)
     }
  }  
  
  return (
        <div className='internship-card'>
          <PopUpDetails popState={pop} off={popUp}/>
          <h1 className='int-title'>{data.mission}</h1>
          <p className='int-pos'>{data.position}</p>
          <p className='int-location'>{data.duration}</p>
          <span className='education-c-moreInfo' onClick={popUp}>Details</span>
        </div>
    );
}

export default VolunterCard;