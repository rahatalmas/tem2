import '../components/TrainCard.css';
import PopUpDetails from '../pages/PopUpDetails';
import { useState } from 'react';
import TrainingPopUp from '../popups/trainingPopup';
const TrainCard = ({trainImg,TrainTitle,TrainDate,data}) =>{
    
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
        <div className='training-content'>
        <TrainingPopUp popState={pop} off={popUp} data={data}/>
        
        <div className='training-image-sec'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/007/117/181/small/training-of-office-staff-increase-sales-and-skills-team-thinking-and-brainstorming-analytics-of-company-information-flat-illustration-vector.jpg' className='train-sec-img'/>
        </div>
        <div>
        <div className='training-desc-sec'>
            <h1 className='train-sec-title'>{TrainTitle.length>20?TrainTitle.slice(0,20)+"...":TrainTitle}</h1>
            <p className='train-sec-date'>Date: {TrainDate}</p>
            <p className='train-sec-short'>Acquiring essential skills and hands-on experience in re...</p>
            <button className='train-details-btn' onClick={popUp}>Detaiils</button>
        </div>
      </div>
      </div>
    );
}

export default TrainCard;