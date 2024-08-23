import './TeachingCard.css';
import { useState } from 'react';
import PopUpDetails from '../pages/PopUpDetails';
const TeachingCard = ({courseName,position,organization,date}) =>{
    
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
        <div className='teaching-card'>
            <PopUpDetails popState={pop} off={popUp}/>
            <div className='t-c-image-container'>
                <img className='t-c-img' alt='teaching Image' src='./assets/python.png'/>
            </div>
            <div className='t-c-info'>
               <div className='t-c-header'>
                 <h1 className='t-c-title'>Title: {courseName}</h1>
                 <h1 className='plusBtn'>+</h1>
               </div>
               <p className='t-c-organization'>Institute: {organization}</p>
               <p className='t-c-para'><span>{position}</span> <span className='t-c-date'>{date} </span></p>
            </div>
        </div>
    );
}

export default TeachingCard;