import '../components/EducationCard.css';
import { useState } from 'react';
import EducationPopUp from '../popups/educationPopup';

const EducationCard = ({institute,degree,result,totalcredit,position,data}) =>{
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
    return(
        <div className='education-card'>
            <EducationPopUp popState={pop} off={popUp} data={data}/>
            <h1 className='e-c-h'>{institute}</h1>
            <p className='e-c-p'>{degree}</p>
            <p className='e-c-p'><span>Cgpa: {result} </span> <span> Total Credit: {totalcredit}</span></p>
            <p className='e-c-p'>{position}</p>
            <span className='education-c-moreInfo' onClick={popUp}> More Info</span>
        </div>
    );
}

export default EducationCard;