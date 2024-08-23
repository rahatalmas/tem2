import './InternShipCard.css'
import { useState } from 'react';
import InternPopUp from '../popups/internPopup';

const InternshipCard = ({name,position,date,location,data}) =>{

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
          <InternPopUp popState={pop} off={popUp} data={data}/>
          <h1 className='int-title'>{name}</h1>
          <p className='int-pos'>{position}</p>
          <p className='int-location'>{location}</p>
          <p className='int-para'>{date}</p>
          <span className='education-c-moreInfo' onClick={popUp}>Details</span>
        </div>
    );
}

export default InternshipCard;